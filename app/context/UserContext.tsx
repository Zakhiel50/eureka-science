"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type LabItem = {
  id: string;
  name: string;
  price: number;
  modelType: 'flask' | 'microscope' | 'telescope' | 'atom' | 'planet';
  color: string;
};

export const AVAILABLE_ITEMS: LabItem[] = [
  { id: '1', name: 'Flacon de Chimiste', price: 50, modelType: 'flask', color: '#ff0055' },
  { id: '2', name: 'Microscope Optique', price: 150, modelType: 'microscope', color: '#00ffcc' },
  { id: '3', name: 'Télescope Stellaire', price: 300, modelType: 'telescope', color: '#5500ff' },
  { id: '4', name: 'Modèle Atomique', price: 100, modelType: 'atom', color: '#ffff00' },
  { id: '5', name: 'Planète Miniature', price: 200, modelType: 'planet', color: '#ff8800' },
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
  const [xp, setXp] = useState(0);
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
    
    // Check if already owned or not enough XP
    // Note: in a real app, I'd use a functional update for XP to be safe
    let success = false;
    setInventory(prev => {
      if (prev.includes(itemId)) return prev;
      
      setXp(currentXp => {
        if (currentXp >= item.price) {
          success = true;
          return currentXp - item.price;
        }
        return currentXp;
      });
      
      return success ? [...prev, itemId] : prev;
    });
    
    return success;
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
