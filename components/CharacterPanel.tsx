import React, { useState } from 'react';
import { Item, ItemQuality } from '../types';
import { EQUIPMENT, CHARACTER_STATS, SKILLS, CONTACT_INFO, WORK_EXPERIENCE } from '../constants';
import { Zap, MapPin, Mail, Phone, Linkedin, ScrollText, Briefcase } from 'lucide-react';

interface CharacterPanelProps {
  onHoverItem: (item: Item | null, e: React.MouseEvent) => void;
}

const CharacterPanel: React.FC<CharacterPanelProps> = ({ onHoverItem }) => {
  const [activeTab, setActiveTab] = useState<'skills' | 'experience'>('skills');

  const getItem = (id: string) => EQUIPMENT.find(e => e.id === id);

  const renderSlot = (itemId: string, placeholder: string, customClass: string = "") => {
    const item = getItem(itemId);
    
    let borderClass = 'border-slate-700 bg-black/60';
    let iconColor = 'text-slate-600';
    let glowClass = '';
    let hoverEffects = 'hover:border-slate-500 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]';
    
    if (item) {
        switch (item.quality) {
            case ItemQuality.SUPER: 
                borderClass = 'border-orange-500 bg-orange-900/40';
                iconColor = item.color;
                glowClass = 'shadow-[0_0_15px_rgba(249,115,22,0.4)]';
                hoverEffects = 'hover:shadow-[0_0_30px_rgba(249,115,22,0.8)] hover:border-orange-300 hover:bg-orange-900/60';
                break;
            case ItemQuality.ELITE: 
                borderClass = 'border-fuchsia-500 bg-fuchsia-900/40';
                iconColor = item.color;
                glowClass = 'shadow-[0_0_15px_rgba(217,70,239,0.4)]';
                hoverEffects = 'hover:shadow-[0_0_30px_rgba(217,70,239,0.8)] hover:border-fuchsia-300 hover:bg-fuchsia-900/60';
                break;
            case ItemQuality.UNIQUE: 
                borderClass = 'border-green-500 bg-green-900/40';
                iconColor = item.color;
                glowClass = 'shadow-[0_0_15px_rgba(34,197,94,0.4)]';
                hoverEffects = 'hover:shadow-[0_0_30px_rgba(34,197,94,0.8)] hover:border-green-300 hover:bg-green-900/60';
                break;
            case ItemQuality.REFINED:
                borderClass = 'border-blue-500 bg-blue-900/40';
                iconColor = item.color;
                glowClass = 'shadow-[0_0_15px_rgba(59,130,246,0.4)]';
                hoverEffects = 'hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] hover:border-blue-300 hover:bg-blue-900/60';
                break;
            default:
                borderClass = 'border-slate-500';
                iconColor = 'text-white';
                hoverEffects = 'hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] hover:border-white';
        }
    }

    return (
      <div 
        className={`relative w-14 h-14 md:w-16 md:h-16 border-2 ${borderClass} ${glowClass} rounded-md flex items-center justify-center cursor-pointer transition-all duration-300 ease-out hover:scale-110 ${hoverEffects} hover:-translate-y-1 z-20 ${customClass}`}
        onMouseEnter={(e) => item && onHoverItem(item, e)}
        onMouseLeave={(e) => onHoverItem(null, e)}
        onMouseMove={(e) => item && onHoverItem(item, e)}
      >
        {item ? (
          <>
            <item.icon size={32} className={`${iconColor} drop-shadow-[0_0_5px_currentColor]`} />
            {item.plus && (
                <div className="absolute -top-1.5 -right-1.5 text-[10px] font-bold text-yellow-300 drop-shadow-[0_2px_2px_rgba(0,0,0,1)] bg-red-900/80 px-1.5 rounded border border-yellow-600">
                    +{item.plus}
                </div>
            )}
          </>
        ) : (
          <span className="text-[9px] text-slate-600 uppercase font-bold tracking-tighter">{placeholder}</span>
        )}
      </div>
    );
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto bg-[#0f0f11] border-[3px] border-yellow-800 rounded-xl shadow-[0_0_60px_rgba(0,0,0,0.9),inset_0_0_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col md:flex-row min-h-[650px]">
      
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] opacity-50 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 pointer-events-none"></div>

      {/* Decorative Frame Corners */}
      <div className="absolute top-2 left-2 w-16 h-16 border-t-4 border-l-4 border-yellow-600 rounded-tl-xl z-20 opacity-80"></div>
      <div className="absolute top-2 right-2 w-16 h-16 border-t-4 border-r-4 border-yellow-600 rounded-tr-xl z-20 opacity-80"></div>
      <div className="absolute bottom-2 left-2 w-16 h-16 border-b-4 border-l-4 border-yellow-600 rounded-bl-xl z-20 opacity-80"></div>
      <div className="absolute bottom-2 right-2 w-16 h-16 border-b-4 border-r-4 border-yellow-600 rounded-br-xl z-20 opacity-80"></div>

      {/* LEFT COLUMN: Stats & Contact */}
      <div className="w-full md:w-1/4 p-4 md:p-6 border-r border-yellow-900/30 bg-black/40 relative z-10 flex flex-col">
        <h3 className="text-yellow-500 font-serif text-xl font-bold mb-4 text-center border-b border-yellow-800 pb-2">Status</h3>
        
        {/* Basic Stats */}
        <div className="space-y-3 font-mono text-sm mb-6">
            <div className="flex justify-between items-center group">
                <span className="text-slate-400 group-hover:text-white transition-colors">Class</span>
                <span className="text-white font-bold text-xs text-right max-w-[120px] leading-tight">{CHARACTER_STATS.class}</span>
            </div>
            <div className="flex justify-between items-center group">
                <span className="text-slate-400 group-hover:text-white transition-colors">Guild</span>
                <span className="text-blue-400 font-bold">{CHARACTER_STATS.guild}</span>
            </div>
            <div className="h-px bg-yellow-900/50 my-2"></div>
            <div className="flex justify-between items-center group">
                <span className="text-slate-400 group-hover:text-white transition-colors">HP</span>
                <span className="text-red-500 font-bold text-shadow">{CHARACTER_STATS.hp}</span>
            </div>
            <div className="flex justify-between items-center group">
                <span className="text-slate-400 group-hover:text-white transition-colors">MP</span>
                <span className="text-blue-500 font-bold text-shadow">{CHARACTER_STATS.mp}</span>
            </div>
            <div className="flex justify-between items-center group">
                <span className="text-slate-400 group-hover:text-white transition-colors">Attack</span>
                <span className="text-orange-500 font-bold text-shadow">5000 - 9999</span>
            </div>
        </div>

        {/* Contact Section */}
        <div className="mt-auto bg-slate-900/50 rounded-lg p-3 border border-yellow-900/30">
            <h4 className="text-yellow-600 font-serif text-sm font-bold mb-3 uppercase text-center tracking-widest">Contact Info</h4>
            <div className="space-y-3 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                    <MapPin size={14} className="text-red-500 shrink-0" />
                    <span>{CONTACT_INFO.location}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                    <Mail size={14} className="text-blue-400 shrink-0" />
                    <a href={`mailto:${CONTACT_INFO.email}`} className="truncate hover:text-white transition-colors">{CONTACT_INFO.email}</a>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                    <Phone size={14} className="text-green-500 shrink-0" />
                    <span>{CONTACT_INFO.phone}</span>
                </div>
                <div className="flex items-start gap-2 text-slate-300">
                    <Linkedin size={14} className="text-blue-600 shrink-0 mt-0.5" />
                    <a href={`https://${CONTACT_INFO.linkedin}`} target="_blank" rel="noreferrer" className="truncate hover:text-white transition-colors break-all leading-tight">
                        LinkedIn Profile
                    </a>
                </div>
            </div>
        </div>
      </div>

      {/* CENTER COLUMN: Avatar & Paperdoll */}
      <div className="w-full md:w-2/4 relative flex items-center justify-center min-h-[500px]">
         
         {/* Name Tag */}
         <div className="absolute top-6 w-full text-center z-20">
             <div className="inline-block bg-black/70 border border-yellow-700/50 px-6 py-1 rounded-full backdrop-blur-sm">
                 <h1 className="text-2xl font-serif text-yellow-100 font-bold tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
                    {CHARACTER_STATS.name}
                 </h1>
                 <div className="text-xs text-yellow-500 font-bold uppercase tracking-[0.3em] mt-0.5">Level {CHARACTER_STATS.level}</div>
             </div>
         </div>

         {/* Character Image (Archer) */}
         <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden">
             {/* Glowing aura behind character */}
             <div className="absolute w-[300px] h-[300px] bg-orange-500/20 rounded-full blur-[60px] animate-pulse"></div>
             
             {/* Character Silhouette / Image */}
             <img 
               src="https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=600&auto=format&fit=crop" 
               alt="Archer Character" 
               className="h-full w-full object-cover opacity-80 mask-image-gradient"
               style={{ maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)' }}
             />
             
             {/* Overlay Gradient to fade bottom */}
             <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-[#0f0f11] to-transparent"></div>
         </div>

         {/* Equipment Slots Grid (Paperdoll Layout) */}
         <div className="relative z-10 w-full h-full p-4 flex flex-col justify-between items-center py-12">
             
             {/* Top Row: Head & Accessories */}
             <div className="flex justify-between w-full max-w-[320px] mt-8">
                 <div className="translate-y-4">{renderSlot('acc1', 'Acc')}</div>
                 <div className="-translate-y-2">{renderSlot('head', 'Head')}</div>
                 <div className="translate-y-4">{renderSlot('acc2', 'Acc')}</div>
             </div>

             {/* Middle Row: Weapons & Armor */}
             <div className="flex justify-between w-full max-w-[380px] items-center my-4">
                 <div className="flex flex-col gap-2 items-center">
                     <span className="text-[10px] text-orange-400 font-bold drop-shadow-md">WEAPON</span>
                     {renderSlot('weapon', 'Wpn', 'border-orange-500/50')}
                 </div>

                 {/* Armor is center-mass */}
                 <div className="translate-y-8">
                     {renderSlot('armor', 'Armor')}
                 </div>

                 <div className="flex flex-col gap-2 items-center">
                     <span className="text-[10px] text-blue-400 font-bold drop-shadow-md">OFFHAND</span>
                     {renderSlot('offhand', 'Off')}
                 </div>
             </div>

             {/* Bottom Row: Boots */}
             <div className="mt-auto mb-4">
                 {renderSlot('boots', 'Boots')}
             </div>
         </div>
      </div>

      {/* RIGHT COLUMN: Skills & Work Experience */}
      <div className="w-full md:w-1/4 p-0 border-l border-yellow-900/30 bg-black/40 relative z-10 flex flex-col">
         
         {/* Tabs */}
         <div className="flex border-b border-yellow-900/50">
             <button 
                onClick={() => setActiveTab('skills')}
                className={`flex-1 py-3 text-sm font-serif font-bold transition-colors ${activeTab === 'skills' ? 'bg-yellow-900/20 text-yellow-400' : 'text-slate-500 hover:text-slate-300'}`}
             >
                 Skills
             </button>
             <button 
                onClick={() => setActiveTab('experience')}
                className={`flex-1 py-3 text-sm font-serif font-bold transition-colors ${activeTab === 'experience' ? 'bg-yellow-900/20 text-yellow-400' : 'text-slate-500 hover:text-slate-300'}`}
             >
                 Experiences
             </button>
         </div>
         
         {/* Content Area */}
         <div className="flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-yellow-900 scrollbar-track-transparent">
             
             {/* SKILLS TAB */}
             {activeTab === 'skills' && (
                <div className="space-y-3">
                    {SKILLS.map((skill, idx) => (
                        <div key={idx} className="group relative bg-slate-900/60 p-2 rounded border border-slate-700 hover:border-cyan-500 transition-all cursor-help flex items-start gap-3">
                            {/* Skill Icon */}
                            <div className="shrink-0 p-2 bg-black/40 border border-slate-600 rounded-md shadow-inner group-hover:border-cyan-400/50 transition-colors mt-0.5">
                                {skill.icon ? (
                                    <skill.icon size={20} className="text-cyan-500 group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]" />
                                ) : (
                                    <Zap size={20} className="text-slate-600" />
                                )}
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-bold text-cyan-200 group-hover:text-white truncate">{skill.name}</span>
                                    <span className="text-[10px] bg-black px-1.5 py-0.5 rounded text-yellow-500 font-mono shrink-0 ml-1">Lv{skill.level}</span>
                                </div>
                                <span className="text-[10px] text-slate-500 uppercase block mb-1">{skill.type}</span>
                                <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-800 pt-1">
                                    {skill.description}
                                </p>
                            </div>

                            {skill.type === 'XP Skill' && (
                                <div className="absolute right-1 bottom-1 pointer-events-none">
                                    <Zap size={10} className="text-yellow-400 animate-pulse opacity-50" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
             )}

             {/* WORK EXPERIENCE TAB */}
             {activeTab === 'experience' && (
                 <div className="space-y-4">
                     <div className="text-[10px] text-yellow-600 font-bold uppercase tracking-widest mb-2 border-b border-yellow-900/30 pb-1">
                         Work Experience
                     </div>
                     {WORK_EXPERIENCE.map((exp, idx) => (
                         <div key={idx} className="relative pl-4 border-l-2 border-slate-700 hover:border-green-500 transition-colors pb-4 last:pb-0">
                             <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-slate-800 border border-slate-600"></div>
                             
                             <h4 className="text-sm font-bold text-white leading-none">{exp.title}</h4>
                             <div className="flex items-center gap-1 text-xs text-green-400 font-mono mt-1">
                                 <Briefcase size={10} />
                                 <span>{exp.company}</span>
                             </div>
                             <div className="flex items-center gap-1 text-[10px] text-slate-500 mb-2">
                                 <ScrollText size={10} />
                                 <span>{exp.period}</span>
                             </div>
                             <p className="text-xs text-slate-400 leading-snug">
                                 {exp.description}
                             </p>
                         </div>
                     ))}
                 </div>
             )}

         </div>

         {/* Bottom Tag Cloud */}
         <div className="p-4 border-t border-yellow-900/30 bg-black/20">
             <div className="flex flex-wrap gap-1.5 justify-center">
                 {['React', 'Node.js', 'Express', 'MongoDB', 'GDS', 'Amadeus', 'Galileo', 'Visa'].map((tag) => (
                     <span key={tag} className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded border border-slate-700 hover:text-white hover:border-yellow-600 transition-colors cursor-default">
                         {tag}
                     </span>
                 ))}
             </div>
         </div>
      </div>
      
    </div>
  );
};

export default CharacterPanel;