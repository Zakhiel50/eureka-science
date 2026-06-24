"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type LabItem = {
  id: string;
  name: string;
  price: number;
  modelType: 'flask' | 'microscope' | 'telescope' | 'atom' | 'planet' | 'distillator' | 'virus' | 'hearth' | 'moon' | 'rocket';
  color: string;
  image?: string;
};

export const AVAILABLE_ITEMS: LabItem[] = [
  { id: '1', name: 'Fiole de Chimie', price: 50, modelType: 'flask', color: '#ff3366', image: '/images/shop-labs/flask.avif' },
  { id: '2', name: 'Microscope Optique', price: 150, modelType: 'microscope', color: '#00ffcc', image: '/images/shop-labs/microscope.avif' },
  { id: '3', name: 'Distillateur Chimique', price: 250, modelType: 'distillator', color: '#8b5cf6', image: '/images/shop-labs/table.avif' },
  { id: '4', name: 'Modèle Atomique', price: 100, modelType: 'atom', color: '#ffff00', image: '/images/shop-labs/atom.avif' },
  { id: '5', name: 'Échantillon Viral', price: 300, modelType: 'virus', color: '#ff0055', image: '/images/shop-labs/virus.avif' },
  { id: '6', name: 'Cœur Anatomique', price: 400, modelType: 'hearth', color: '#ff4d4d', image: '/images/shop-labs/hearth.avif' },
  { id: '7', name: 'Modèle Lunaire', price: 200, modelType: 'moon', color: '#e2e8f0', image: '/images/shop-labs/moon.avif' },
  { id: '8', name: 'Fusée d\'Exploration', price: 500, modelType: 'rocket', color: '#38bdf8', image: '/images/shop-labs/rocket.avif' },
];

interface UserContextType {
  xp: number;
  completedCourses: string[];
  scores: Record<string, number>;
  inventory: string[]; // IDs of bought items
  preferredVoice: string;
  isMuted: boolean;
  showBackground: boolean;
  isLoaded: boolean;
  hasCompletedTutorial: boolean;
  setHasCompletedTutorial: (completed: boolean) => void;
  addXP: (amount: number) => void;
  saveCourseProgress: (courseId: string, score: number) => void;
  buyItem: (itemId: string) => boolean;
  setPreferredVoice: (voice: string) => void;
  setIsMuted: (muted: boolean) => void;
  setShowBackground: (show: boolean) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [xp, setXp] = useState(0);
  const [completedCourses, setCompletedCourses] = useState<string[]>([]);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [inventory, setInventory] = useState<string[]>([]);
  const [preferredVoice, setPreferredVoice] = useState('fr-FR-DeniseNeural');
  const [isMuted, setIsMuted] = useState(false);
  const [showBackground, setShowBackground] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasCompletedTutorial, setHasCompletedTutorial] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("eureka_progress");
    if (saved) {
      try {
        const data = JSON.parse(saved);
        setXp(data.xp || 0);
        setCompletedCourses(data.completed || []);
        setScores(data.scores || {});
        setInventory(data.inventory || []);
        setPreferredVoice(data.preferredVoice || 'fr-FR-DeniseNeural');
        setIsMuted(data.isMuted || false);
        setShowBackground(data.showBackground !== undefined ? data.showBackground : true);
        setHasCompletedTutorial(data.hasCompletedTutorial || false);
      } catch (e) {
        console.error("Failed to parse progress", e);
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const data = { xp, completed: completedCourses, scores, inventory, preferredVoice, isMuted, showBackground, hasCompletedTutorial };
      localStorage.setItem("eureka_progress", JSON.stringify(data));
    }
  }, [xp, completedCourses, scores, inventory, preferredVoice, isMuted, showBackground, hasCompletedTutorial, isLoaded]);

  const addXP = (amount: number) => {
    setXp(prev => prev + amount);
  };

  const saveCourseProgress = (courseId: string, score: number) => {
    setScores(prev => {
      const previousScore = prev[courseId] || 0;
      if (score > previousScore) {
        const xpGain = score - previousScore;
        setXp(currentXp => currentXp + xpGain);
        return { ...prev, [courseId]: score };
      }
      return prev;
    });

    if (score >= 80) {
      setCompletedCourses(prev => {
        if (!prev.includes(courseId)) {
          return [...prev, courseId];
        }
        return prev;
      });
    }
  };

  const buyItem = (itemId: string) => {
    const item = AVAILABLE_ITEMS.find(i => i.id === itemId);
    if (!item) return false;
    
    if (inventory.includes(itemId)) return false;
    if (xp < item.price) return false;

    setXp(prev => prev - item.price);
    setInventory(prev => [...prev, itemId]);
    
    return true;
  };

  return (
    <UserContext.Provider value={{ 
      xp, 
      completedCourses, 
      scores, 
      inventory, 
      preferredVoice, 
      isMuted,
      showBackground,
      isLoaded,
      hasCompletedTutorial,
      setHasCompletedTutorial,
      addXP, 
      saveCourseProgress, 
      buyItem, 
      setPreferredVoice,
      setIsMuted,
      setShowBackground
    }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
