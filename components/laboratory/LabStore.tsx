"use client";

import React from 'react';
import { useUser, AVAILABLE_ITEMS, LabItem } from '@/app/context/UserContext';
import { Star, ShoppingCart, CheckCircle } from 'lucide-react';

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {AVAILABLE_ITEMS.map((item: LabItem) => {
          const isOwned = inventory.includes(item.id);
          const canAfford = xp >= item.price;

          return (
            <div 
              key={item.id}
              className={`p-6 rounded-2xl border transition-all duration-300 ${
                isOwned 
                ? "bg-slate-900/40 border-green-500/30 opacity-80" 
                : "bg-slate-900/60 border-slate-700 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10"
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center shadow-inner"
                  style={{ backgroundColor: `${item.color}22`, border: `1px solid ${item.color}44` }}
                >
                  <div className="w-6 h-6 rounded-full" style={{ backgroundColor: item.color }} />
                </div>
                <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1 rounded-full border border-white/5">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-bold text-white">{item.price}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
              <p className="text-slate-400 text-sm mb-6">Un bel objet pour décorer ton laboratoire scientifique.</p>

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
                    ? "bg-purple-600 text-white hover:bg-purple-500 shadow-lg shadow-purple-900/20"
                    : "bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700"
                  }`}
                >
                  Acheter
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
