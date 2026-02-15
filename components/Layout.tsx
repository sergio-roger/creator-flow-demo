
import React, { useState } from 'react';
import { Icons, COLORS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const navItems = [
    { id: 'dashboard', label: 'Panel de Control', icon: Icons.Dashboard },
    { id: 'calendar', label: 'Calendario Editorial', icon: Icons.Calendar },
    { id: 'ideas', label: 'Banco de Ideas', icon: Icons.Ideas },
    { id: 'sponsorships', label: 'Patrocinios', icon: Icons.Sponsorships },
    { id: 'analytics', label: 'Analíticas', icon: Icons.Analytics },
  ];

  const getTitle = (id: string) => {
    const item = navItems.find(i => i.id === id);
    return item ? item.label : id;
  };

  return (
    <div className="flex h-screen bg-slate-950 overflow-hidden">
      {/* Sidebar */}
      <aside className={`bg-slate-900 border-r border-slate-800 transition-all duration-300 flex flex-col ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-rose-500 flex items-center justify-center shrink-0">
            <span className="font-bold text-white">CF</span>
          </div>
          {isSidebarOpen && <span className="font-bold text-xl tracking-tight text-white">CreatorFlow</span>}
        </div>

        <nav className="flex-1 px-3 space-y-1 mt-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === item.id 
                ? 'bg-rose-500/10 text-rose-500 font-medium' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              <item.icon />
              {isSidebarOpen && <span>{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800">
           <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-slate-200">
             <Icons.Settings />
             {isSidebarOpen && <span>Configuración</span>}
           </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-slate-950 border-b border-slate-800 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 text-slate-400 hover:bg-slate-800 rounded-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h2 className="text-xl font-semibold capitalize text-slate-100">
              {getTitle(activeTab)}
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative group">
               <input 
                type="text" 
                placeholder="Buscar recursos..." 
                className="bg-slate-900 border border-slate-700 rounded-full py-1.5 px-4 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/50 w-64"
               />
               <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                <Icons.Search />
               </div>
            </div>
            <div className="flex items-center gap-2 bg-slate-900 border border-slate-700 p-1 rounded-full px-3">
              <img src="https://picsum.photos/seed/creator/32" className="w-6 h-6 rounded-full" alt="avatar" />
              <span className="text-xs font-medium text-slate-300">Alex Streamer</span>
            </div>
          </div>
        </header>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
