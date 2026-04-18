"use client";

import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';

type EinsteinMessage = {
  text: string;
  type: 'info' | 'explanation' | 'congrats';
};

interface EinsteinContextType {
  message: EinsteinMessage | null;
  say: (text: string, type?: EinsteinMessage['type']) => void;
  clear: () => void;
}

const EinsteinContext = createContext<EinsteinContextType | undefined>(undefined);

export function EinsteinProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<EinsteinMessage | null>(null);

  const say = useCallback((text: string, type: EinsteinMessage['type'] = 'info') => {
    setMessage({ text, type });
  }, []);

  const clear = useCallback(() => {
    setMessage(null);
  }, []);

  return (
    <EinsteinContext.Provider value={{ message, say, clear }}>
      {children}
    </EinsteinContext.Provider>
  );
}

export function useEinstein() {
  const context = useContext(EinsteinContext);
  if (context === undefined) {
    throw new Error('useEinstein must be used within an EinsteinProvider');
  }
  return context;
}
