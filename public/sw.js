// Service Worker pour les notifications push EUREKA

self.addEventListener('push', function (event) {
  if (!event.data) return;

  try {
    const payload = event.data.json();
    const title = payload.title || 'EUREKA';
    const options = {
      body: payload.body || 'Un nouveau cours est disponible !',
      icon: '/icon-192x192.png',
      badge: '/icon-192x192.png',
      data: {
        url: payload.url || '/'
      },
      vibrate: [100, 50, 100],
      actions: [
        { action: 'open', title: 'Découvrir' }
      ]
    };

    event.waitUntil(self.registration.showNotification(title, options));
  } catch (err) {
    console.error('Erreur traitement notification:', err);
    // Fallback si le contenu n'est pas au format JSON
    const text = event.data.text();
    const options = {
      body: text || 'Un nouveau cours est disponible !',
      icon: '/icon-192x192.png',
      badge: '/icon-192x192.png',
      data: {
        url: '/'
      }
    };
    event.waitUntil(self.registration.showNotification('EUREKA', options));
  }
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  const urlToOpen = new URL(event.notification.data?.url || '/', self.location.origin).href;

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (clientList) {
      // Si un onglet de l'application est déjà ouvert, on le focalise et on navigue
      for (let i = 0; i < clientList.length; i++) {
        const client = clientList[i];
        if ('focus' in client) {
          if (client.url === urlToOpen || client.url.includes(urlToOpen)) {
            return client.focus();
          }
        }
      }
      // Sinon, on ouvre une nouvelle fenêtre
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen);
      }
    })
  );
});
