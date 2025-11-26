import React from 'react';
import { CHARACTER_STATS, SKILLS } from '../constants';
import { Zap, Activity, Users, Star } from 'lucide-react';

const InfoPanel: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 w-full lg:w-80">
      
      {/* Name / Guild Plate */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-950 p-4 rounded-lg border-2 border-yellow-700/50 shadow-lg relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50"></div>
        
        <h1 className="text-2xl font-serif text-yellow-100 font-bold tracking-wider text-center drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
          {CHARACTER_STATS.name}
        </h1>
        <div className="text-center text-xs text-yellow-600 uppercase font-bold tracking-[0.2em] mb-4">
          {CHARACTER_STATS.class}
        </div>

        <div className="flex justify-between items-center text-sm border-t border-slate-800 pt-3">
          <span className="text-slate-400 flex items-center gap-1"><Star size={12} className="text-yellow-500" /> Lvl {CHARACTER_STATS.level}</span>
          <span className="text-slate-400 flex items-center gap-1"><Users size={12} className="text-cyan-500" /> {CHARACTER_STATS.guild}</span>
        </div>
      </div>

      {/* Vital Stats */}
      <div className="bg-slate-900/80 p-4 rounded-lg border border-slate-700 shadow-inner">
        <div className="flex flex-col gap-3">
            {/* HP */}
            <div className="relative h-6 bg-slate-800 rounded-full overflow-hidden border border-slate-600">
                <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-900 to-red-600 w-full flex items-center px-3">
                    <span className="text-[10px] font-bold text-white drop-shadow-md z-10 relative">HP: {CHARACTER_STATS.hp} / {CHARACTER_STATS.hp}</span>
                </div>
                {/* Shine */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10"></div>
            </div>

            {/* MP */}
            <div className="relative h-6 bg-slate-800 rounded-full overflow-hidden border border-slate-600">
                <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-900 to-blue-600 w-full flex items-center px-3">
                    <span className="text-[10px] font-bold text-white drop-shadow-md z-10 relative">MP: {CHARACTER_STATS.mp} / {CHARACTER_STATS.mp}</span>
                </div>
                {/* Shine */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10"></div>
            </div>
        </div>
      </div>

      {/* Skills List */}
      <div className="flex-1 bg-slate-950 border border-slate-800 rounded-lg p-4 overflow-y-auto max-h-[300px]">
        <h3 className="text-sm font-bold text-slate-500 uppercase mb-3 flex items-center gap-2">
            <Zap size={14} /> Active Skills
        </h3>
        <div className="space-y-2">
            {SKILLS.map((skill, idx) => (
                <div key={idx} className="group relative bg-slate-900 p-2 rounded border border-slate-800 hover:border-cyan-700 transition-colors cursor-help">
                    <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-cyan-400 text-sm group-hover:text-cyan-300">{skill.name}</span>
                        <span className="text-xs text-slate-500 bg-black px-1 rounded">Lvl {skill.level}</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-tight">{skill.description}</p>
                    
                    {/* Skill Type Indicator */}
                    <div className={`absolute right-1 bottom-1 w-2 h-2 rounded-full ${
                        skill.type === 'XP Skill' ? 'bg-yellow-500 animate-ping' : 
                        skill.type === 'Active' ? 'bg-cyan-500' : 'bg-green-500'
                    }`}></div>
                </div>
            ))}
        </div>
      </div>

    </div>
  );
};

export default InfoPanel;
