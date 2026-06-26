import { useState, useEffect } from 'react';

function urlBase64ToUint8Array(base64String: string) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

export function useNotifications() {
  const [isSupported, setIsSupported] = useState(false);
  const [permission, setPermission] = useState<NotificationPermission>('default');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [subscription, setSubscription] = useState<PushSubscription | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Vérifier le support au chargement
  useEffect(() => {
    const checkSupport = async () => {
      const supported =
        typeof window !== 'undefined' &&
        'serviceWorker' in navigator &&
        'PushManager' in window;

      setIsSupported(supported);

      if (supported) {
        setPermission(Notification.permission);
        try {
          // Enregistrer ou récupérer le service worker
          const registration = await navigator.serviceWorker.register('/sw.js');
          
          // Vérifier si un abonnement existe déjà
          let sub = await registration.pushManager.getSubscription();
          
          if (sub) {
            // Vérifier si la clé VAPID correspond pour éviter tout conflit
            try {
              const keyRes = await fetch('/api/notifications/vapid-public-key');
              if (keyRes.ok) {
                const { publicKey } = await keyRes.json();
                const serverKey = urlBase64ToUint8Array(publicKey);
                const clientKey = sub.options?.applicationServerKey;
                
                if (clientKey) {
                  const clientKeyUint8 = new Uint8Array(clientKey);
                  let keysMatch = clientKeyUint8.length === serverKey.length;
                  if (keysMatch) {
                    for (let i = 0; i < serverKey.length; i++) {
                      if (clientKeyUint8[i] !== serverKey[i]) {
                        keysMatch = false;
                        break;
                      }
                    }
                  }
                  
                  if (!keysMatch) {
                    console.warn("Clé VAPID obsolète détectée au chargement, désabonnement automatique...");
                    const oldSub = sub;
                    await sub.unsubscribe();
                    sub = null;
                    
                    // Notifier le serveur pour nettoyer l'ancienne entrée
                    await fetch('/api/notifications/subscribe', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        action: 'unsubscribe',
                        subscription: oldSub,
                      }),
                    }).catch(() => {});
                  }
                }
              }
            } catch (err) {
              console.error('Erreur vérification clé VAPID au chargement:', err);
            }
          }

          setSubscription(sub);
          setIsSubscribed(!!sub);
        } catch (err) {
          console.error('Erreur initialisation Service Worker:', err);
        }
      }
      setLoading(false);
    };

    checkSupport();
  }, []);

  // Fonction pour s'abonner
  const subscribe = async () => {
    if (!isSupported) return false;
    setLoading(true);
    setError(null);

    try {
      // 1. Demander la permission
      const perm = await Notification.requestPermission();
      setPermission(perm);

      if (perm !== 'granted') {
        setLoading(false);
        return false;
      }

      // 2. Récupérer la clé VAPID publique du serveur
      const keyRes = await fetch('/api/notifications/vapid-public-key');
      if (!keyRes.ok) throw new Error('Impossible de récupérer la clé VAPID publique');
      const { publicKey } = await keyRes.json();

      // 3. Obtenir le Service Worker enregistré
      const registration = await navigator.serviceWorker.ready;

      // 3.5. Vérifier s'il existe déjà un abonnement et le nettoyer s'il y a conflit de clé VAPID
      const existingSub = await registration.pushManager.getSubscription();
      if (existingSub) {
        let keysMatch = false;
        const clientKey = existingSub.options?.applicationServerKey;
        if (clientKey) {
          const clientKeyUint8 = new Uint8Array(clientKey);
          const serverKey = urlBase64ToUint8Array(publicKey);
          if (clientKeyUint8.length === serverKey.length) {
            keysMatch = true;
            for (let i = 0; i < serverKey.length; i++) {
              if (clientKeyUint8[i] !== serverKey[i]) {
                keysMatch = false;
                break;
              }
            }
          }
        }
        
        if (!keysMatch) {
          console.warn("Clé VAPID différente détectée lors de l'abonnement, désinscription de l'ancien...");
          await existingSub.unsubscribe();
          await fetch('/api/notifications/subscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              action: 'unsubscribe',
              subscription: existingSub,
            }),
          }).catch(() => {});
        }
      }

      // 4. S'abonner via PushManager
      const sub = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publicKey),
      });

      // 5. Envoyer l'abonnement au serveur
      const subRes = await fetch('/api/notifications/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'subscribe',
          subscription: sub,
        }),
      });

      if (!subRes.ok) throw new Error("Erreur d'enregistrement de l'abonnement côté serveur");

      setSubscription(sub);
      setIsSubscribed(true);
      setLoading(false);
      return true;
    } catch (err: any) {
      console.error("Erreur lors de l'abonnement aux notifications:", err);
      let errMsg = err.message || String(err);
      if (err.name === 'AbortError' || errMsg.toLowerCase().includes('push service error')) {
        errMsg = "Impossible de se connecter au service de push. Si vous utilisez Brave, activez 'Utiliser les services Google pour la messagerie push' dans vos paramètres, ou vérifiez votre connexion.";
      }
      setError(errMsg);
      setLoading(false);
      return false;
    }
  };

  // Fonction pour se désabonner
  const unsubscribe = async () => {
    if (!isSupported || !subscription) return false;
    setLoading(true);
    setError(null);

    try {
      // 1. Se désabonner côté navigateur
      await subscription.unsubscribe();

      // 2. Supprimer l'abonnement du serveur
      await fetch('/api/notifications/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'unsubscribe',
          subscription,
        }),
      });

      setSubscription(null);
      setIsSubscribed(false);
      setLoading(false);
      return true;
    } catch (err: any) {
      console.error("Erreur lors du désabonnement aux notifications:", err);
      setError(err.message || String(err));
      setLoading(false);
      return false;
    }
  };

  // Envoyer une notification de test à l'utilisateur actuel
  const sendTestNotification = async () => {
    if (!isSubscribed || !subscription) return false;
    setError(null);

    try {
      const res = await fetch('/api/notifications/trigger-new-course', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: '🔬 Eureka : Test de Notification !',
          body: 'Félicitations, ta PWA est parfaitement configurée pour recevoir nos nouveautés !',
          url: '/',
          isTest: true,
          targetSubscription: subscription,
        }),
      });
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || "Erreur lors de l'envoi de la notification de test");
      }
      return res.ok;
    } catch (err: any) {
      console.error('Erreur envoi notification test:', err);
      setError(err.message || String(err));
      return false;
    }
  };

  // Simuler le déploiement d'un nouveau cours
  const simulateNewCourseDeployment = async (courseTitle: string, courseDesc: string, courseId: string) => {
    setError(null);
    try {
      const res = await fetch('/api/notifications/trigger-new-course', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: `🔬 Nouveau cours : ${courseTitle}`,
          body: courseDesc || 'Un nouveau cours passionnant vient d\'être publié. Rejoins l\'aventure !',
          url: `/cours/${courseId}`,
          isTest: false,
        }),
      });
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || "Erreur de requête");
      }
      const data = await res.json();
      return data;
    } catch (err: any) {
      console.error('Erreur simulation nouveau cours:', err);
      const errMsg = err.message || String(err);
      setError(errMsg);
      return { success: false, error: errMsg };
    }
  };

  return {
    isSupported,
    permission,
    isSubscribed,
    loading,
    error,
    subscribe,
    unsubscribe,
    sendTestNotification,
    simulateNewCourseDeployment,
  };
}
