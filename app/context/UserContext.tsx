"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type LabItem = {
  id: string;
  name: string;
  price: number;
  modelType: 'flask' | 'microscope' | 'telescope' | 'atom' | 'planet' | 'distillator' | 'virus' | 'hearth' | 'moon' | 'rocket';
  color: string;
};

export const AVAILABLE_ITEMS: LabItem[] = [
  { id: '1', name: 'Fiole de Chimie', price: 50, modelType: 'flask', color: '#ff3366' },
  { id: '2', name: 'Microscope Optique', price: 150, modelType: 'microscope', color: '#00ffcc' },
  { id: '3', name: 'Distillateur Chimique', price: 250, modelType: 'distillator', color: '#8b5cf6' },
  { id: '4', name: 'Modèle Atomique', price: 100, modelType: 'atom', color: '#ffff00' },
  { id: '5', name: 'Échantillon Viral', price: 300, modelType: 'virus', color: '#ff0055' },
  { id: '6', name: 'Cœur Anatomique', price: 400, modelType: 'hearth', color: '#ff4d4d' },
  { id: '7', name: 'Modèle Lunaire', price: 200, modelType: 'moon', color: '#e2e8f0' },
  { id: '8', name: 'Fusée d\'Exploration', price: 500, modelType: 'rocket', color: '#38bdf8' },
];

interface UserContextType {
  xp: number;
  completedCourses: string[];
  scores: Record<string, number>;
  inventory: string[]; // IDs of bought items
  addXP: (amount: number) => void;
  saveCourseProgress: (courseId: string, score: number) => void;
  buyItem: (itemId: string) => boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  // TODO: TEMPORAIRE POUR TESTS - REMETTRE À 0 ET UTILISER LA DATA RÉELLE PLUS TARD
  const [xp, setXp] = useState(100000);
  const [completedCourses, setCompletedCourses] = useState<string[]>([]);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [inventory, setInventory] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("eureka_progress");
    if (saved) {
      try {
        const data = JSON.parse(saved);
        setXp(data.xp || 0);
        setCompletedCourses(data.completed || []);
        setScores(data.scores || {});
        setInventory(data.inventory || []);
      } catch (e) {
        console.error("Failed to parse progress", e);
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const data = { xp, completed: completedCourses, scores, inventory };
      localStorage.setItem("eureka_progress", JSON.stringify(data));
    }
  }, [xp, completedCourses, scores, inventory, isLoaded]);

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
    <UserContext.Provider value={{ xp, completedCourses, scores, inventory, addXP, saveCourseProgress, buyItem }}>
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
