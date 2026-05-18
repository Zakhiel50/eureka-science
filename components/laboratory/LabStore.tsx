"use client";

import React from 'react';
import { useUser, AVAILABLE_ITEMS, LabItem } from '@/app/context/UserContext';
import { Star, ShoppingCart, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function LabStore() {
  const { xp, inventory, buyItem } = useUser();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-black text-white flex items-center gap-3">
          <ShoppingCart className="w-8 h-8 text-purple-500" />
          Boutique du Labo
        </h2>
        <div className="bg-slate-800 px-4 py-2 rounded-xl border border-slate-700 flex items-center gap-2">
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          <span className="font-bold text-xl text-white">{xp} XP</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {AVAILABLE_ITEMS.map((item: LabItem) => {
          const isOwned = inventory.includes(item.id);
          const canAfford = xp >= item.price;

          return (
            <div 
              key={item.id}
              className={`p-6 rounded-2xl border transition-all duration-500 group relative overflow-hidden ${
                isOwned 
                ? "bg-slate-900/40 border-green-500/30 opacity-80" 
                : "bg-slate-900/60 border-slate-800 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10"
              }`}
            >
              {/* Background Glow */}
              {!isOwned && (
                <div 
                  className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                  style={{ backgroundColor: item.color }}
                />
              )}

              <div className="flex justify-between items-start mb-6">
                <div 
                  className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-inner relative overflow-hidden group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundColor: `${item.color}15`, border: `1px solid ${item.color}30` }}
                >
                  {item.image ? (
                    <Image 
                      src={item.image} 
                      alt={item.name} 
                      fill
                      className="object-contain p-2"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full blur-sm animate-pulse" style={{ backgroundColor: item.color }} />
                  )}
                </div>
                <div className="flex items-center gap-1.5 bg-slate-950/80 px-3 py-1.5 rounded-full border border-white/5 backdrop-blur-md">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-black text-white">{item.price}</span>
                </div>
              </div>

              <h3 className="text-xl font-black text-white mb-2 group-hover:text-purple-400 transition-colors">{item.name}</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">Ajoute cet objet unique à ta collection pour personnaliser ton laboratoire spatial.</p>

              {isOwned ? (
                <div className="w-full py-3 rounded-xl bg-green-500/10 text-green-400 font-bold flex items-center justify-center gap-2 border border-green-500/20">
                  <CheckCircle className="w-4 h-4" /> Déjà possédé
                </div>
              ) : (
                <button
                  onClick={() => buyItem(item.id)}
                  disabled={!canAfford}
                  className={`w-full py-3 rounded-xl font-black transition-all ${
                    canAfford
                    ? "bg-purple-600 text-white hover:bg-purple-500 shadow-lg shadow-purple-900/20 active:scale-95"
                    : "bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700"
                  }`}
                >
                  {canAfford ? "Acquérir" : "XP Insuffisant"}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
