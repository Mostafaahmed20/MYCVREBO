import React from 'react';
import { Item, ItemQuality } from '../types';
import { Gem } from 'lucide-react';

interface TooltipProps {
  item: Item | null;
  position: { x: number; y: number } | null;
}

const Tooltip: React.FC<TooltipProps> = ({ item, position }) => {
  if (!item || !position) return null;

  // Conquer Online Quality Colors
  let nameColor = 'text-white';
  if (item.quality === ItemQuality.SUPER) nameColor = 'text-orange-500';
  if (item.quality === ItemQuality.ELITE) nameColor = 'text-fuchsia-400';
  if (item.quality === ItemQuality.UNIQUE) nameColor = 'text-green-400';
  if (item.quality === ItemQuality.REFINED) nameColor = 'text-blue-400';

  return (
    <div 
      className="fixed z-[100] w-72 bg-black/95 border border-slate-500 rounded-sm p-3 pointer-events-none select-none shadow-[0_0_0_1px_rgba(0,0,0,1),0_0_20px_rgba(0,0,0,0.9)] font-sans"
      style={{ 
        left: Math.min(position.x + 20, window.innerWidth - 300),
        top: Math.min(position.y + 20, window.innerHeight - 300)
      }}
    >
      {/* Header */}
      <div className={`text-center font-bold text-lg leading-tight mb-0.5 ${nameColor} drop-shadow-md`}>
        {item.name} {item.plus ? `(+${item.plus})` : ''}
      </div>
      <div className="text-center text-[10px] text-gray-400 uppercase tracking-widest mb-3">
        {item.quality} {item.type}
      </div>

      {/* Main Stats */}
      <div className="space-y-1 mb-4 text-sm font-medium">
        {item.stats.map((stat, idx) => {
            const parts = stat.split(':');
            return (
                <div key={idx} className="flex justify-between border-b border-white/5 pb-0.5">
                    <span className="text-cyan-200">{parts[0]}</span>
                    <span className="text-white">{parts[1]}</span>
                </div>
            );
        })}
      </div>

      {/* Sockets */}
      {item.sockets && item.sockets.length > 0 && (
        <div className="space-y-1.5 mb-4 pt-2 border-t border-slate-800">
            <div className="text-[10px] text-slate-500 uppercase font-bold">Sockets</div>
            {item.sockets.map((socket, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs bg-slate-900/50 p-1 rounded">
                <Gem size={12} className="text-yellow-400" />
                <span className="text-yellow-200 font-bold">{socket.name}</span>
                <span className="text-gray-400 ml-auto text-[10px]">{socket.effect}</span>
              </div>
            ))}
        </div>
      )}

      {/* Footer Info */}
      <div className="flex justify-between items-center border-t border-slate-800 pt-2 text-[10px]">
          <span className="text-green-500 font-bold">Durability: {item.durability}</span>
          <span className="text-slate-600 italic">Level Req: 130</span>
      </div>
      
      {/* Flavor Text */}
      {item.description && (
          <div className="text-[10px] text-gray-500 mt-2 italic text-center">
              "{item.description}"
          </div>
      )}
    </div>
  );
};

export default Tooltip;