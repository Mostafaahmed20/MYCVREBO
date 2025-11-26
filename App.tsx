import React, { useState } from 'react';
import CharacterPanel from './components/CharacterPanel';
import ChatWindow from './components/ChatWindow';
import Tooltip from './components/Tooltip';
import { Item } from './types';

function App() {
  const [hoveredItem, setHoveredItem] = useState<Item | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);

  const handleHoverItem = (item: Item | null, e: React.MouseEvent) => {
    setHoveredItem(item);
    if (item) {
        setTooltipPos({ x: e.clientX, y: e.clientY });
    } else {
        setTooltipPos(null);
    }
  };

  return (
    <div className="min-h-screen bg-black text-slate-200 font-sans selection:bg-cyan-500/30 overflow-x-hidden relative flex flex-col items-center">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-slate-900 via-black to-black pointer-events-none"></div>
      <div className="fixed top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none mix-blend-overlay"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl px-4 py-8 flex flex-col gap-8 items-center">
        
        {/* Header Logo */}
        <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-700 drop-shadow-[0_2px_10px_rgba(234,179,8,0.4)] tracking-widest uppercase">
                CV<span className="text-white ml-2 bg-red-700 px-2 rounded-sm shadow-inner text-3xl align-middle">DEV</span>
            </h1>
            <p className="text-slate-500 text-xs tracking-[0.5em] mt-2 uppercase">Full Stack MMORPG Profile</p>
        </div>

        {/* Character Panel (Main Window) */}
        <CharacterPanel onHoverItem={handleHoverItem} />

        {/* Bottom Section: Chat */}
        <div className="w-full max-w-4xl">
            <ChatWindow />
        </div>
      </div>

      {/* Global Tooltip */}
      <Tooltip item={hoveredItem} position={tooltipPos} />
    </div>
  );
}

export default App;