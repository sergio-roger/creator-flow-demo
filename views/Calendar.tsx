
import React from 'react';
import { MOCK_PRODUCTIONS } from '../mockData';

const Calendar: React.FC = () => {
  // Generate days for a mock month (Nov 2023)
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const startDayOffset = 3; // Wednesday start

  return (
    <div className="h-full flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h3 className="text-2xl font-bold text-slate-100">Noviembre 2023</h3>
          <div className="flex bg-slate-900 border border-slate-800 rounded-lg p-1">
            <button className="px-3 py-1 text-xs font-medium bg-slate-800 text-slate-200 rounded-md">Mes</button>
            <button className="px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-300">Semana</button>
          </div>
        </div>
        <div className="flex gap-2">
           <button className="p-2 border border-slate-800 rounded-lg text-slate-400 hover:bg-slate-900">
             &larr;
           </button>
           <button className="p-2 border border-slate-800 rounded-lg text-slate-400 hover:bg-slate-900">
             &rarr;
           </button>
        </div>
      </div>

      <div className="flex-1 bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden grid grid-cols-7 grid-rows-5">
        {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map(day => (
          <div key={day} className="bg-slate-800/50 p-3 text-center text-xs font-bold text-slate-500 border-b border-r border-slate-800 last:border-r-0">
            {day}
          </div>
        ))}

        {Array.from({ length: startDayOffset }).map((_, i) => (
          <div key={`offset-${i}`} className="p-4 border-b border-r border-slate-800 last:border-r-0 bg-slate-950/30" />
        ))}

        {days.map(day => {
          const formattedDate = `2023-11-${day.toString().padStart(2, '0')}`;
          const content = MOCK_PRODUCTIONS.filter(p => p.publishDate === formattedDate);

          return (
            <div key={day} className="p-2 border-b border-r border-slate-800 last:border-r-0 hover:bg-slate-800/30 transition-colors flex flex-col gap-2 min-h-[120px]">
              <span className={`text-xs font-medium ${day === 5 ? 'w-6 h-6 rounded-full bg-rose-500 text-white flex items-center justify-center' : 'text-slate-500'}`}>
                {day}
              </span>
              
              <div className="space-y-1">
                {content.map(video => (
                  <div key={video.id} className="text-[10px] p-1.5 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 font-medium truncate">
                    🎬 {video.title}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
