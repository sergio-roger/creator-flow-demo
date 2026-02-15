
import React from 'react';
import { MOCK_METRICS, MOCK_PRODUCTIONS, MOCK_TEAM } from '../mockData';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Icons } from '../constants';

const DATA = [
  { name: 'Lun', views: 4000 },
  { name: 'Mar', views: 3000 },
  { name: 'Mié', views: 2000 },
  { name: 'Jue', views: 2780 },
  { name: 'Vie', views: 1890 },
  { name: 'Sáb', views: 2390 },
  { name: 'Dom', views: 3490 },
];

const statusTranslations: Record<string, string> = {
  'Idea': 'Idea',
  'Scripting': 'Guion',
  'Recording': 'Grabando',
  'Editing': 'Editando',
  'Ready': 'Listo',
  'Published': 'Publicado'
};

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Suscriptores', value: MOCK_METRICS.subscribers.toLocaleString(), delta: '+1.2%', icon: '👥' },
          { label: 'Vistas Mensuales', value: MOCK_METRICS.viewsLast30Days.toLocaleString(), delta: '+8.4%', icon: '👁️' },
          { label: 'Ingresos Estimados', value: `$${MOCK_METRICS.revenueLast30Days}`, delta: '+5.7%', icon: '💰' },
          { label: 'Tiempo de Visualización (hrs)', value: MOCK_METRICS.watchTimeHours.toLocaleString(), delta: '-0.3%', icon: '⏱️' },
        ].map((stat, i) => (
          <div key={i} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl">{stat.icon}</span>
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.delta.startsWith('+') ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                {stat.delta}
              </span>
            </div>
            <h3 className="text-slate-400 text-sm font-medium">{stat.label}</h3>
            <p className="text-2xl font-bold text-slate-100">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-100">Rendimiento de Vistas</h3>
            <select className="bg-slate-800 text-xs border border-slate-700 rounded-lg px-2 py-1">
              <option>Últimos 7 Días</option>
              <option>Últimos 30 Días</option>
            </select>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={DATA}>
                <defs>
                  <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '12px', color: '#f8fafc' }}
                  itemStyle={{ color: '#f43f5e' }}
                />
                <Area type="monotone" dataKey="views" stroke="#f43f5e" strokeWidth={3} fillOpacity={1} fill="url(#colorViews)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Upcoming Productions */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col">
          <h3 className="text-lg font-bold text-slate-100 mb-6">En Producción</h3>
          <div className="space-y-4 flex-1">
            {MOCK_PRODUCTIONS.map((video) => (
              <div key={video.id} className="p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-sm text-slate-200 line-clamp-1">{video.title}</h4>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                    video.status === 'Ready' ? 'bg-green-500/20 text-green-400' : 'bg-rose-500/20 text-rose-400'
                  }`}>
                    {statusTranslations[video.status] || video.status}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-rose-500" 
                      style={{ width: `${Object.values(video.checklist).filter(Boolean).length * 25}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium">
                    {Object.values(video.checklist).filter(Boolean).length}/4
                  </span>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-6 w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium rounded-xl transition-colors">
            Ver Todo el Contenido
          </button>
        </div>
      </div>

      {/* Team & Collaboration */}
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
        <h3 className="text-lg font-bold text-slate-100 mb-6">Miembros del Equipo</h3>
        <div className="flex flex-wrap gap-6">
          {MOCK_TEAM.map((member) => (
            <div key={member.id} className="flex items-center gap-4 p-3 bg-slate-800/30 rounded-xl border border-slate-800 hover:border-slate-700 transition-all cursor-pointer">
              <img src={member.avatar} className="w-10 h-10 rounded-full ring-2 ring-slate-800" alt={member.name} />
              <div>
                <p className="font-semibold text-slate-200 text-sm">{member.name}</p>
                <p className="text-xs text-slate-500">{member.role}</p>
              </div>
            </div>
          ))}
          <button className="flex items-center gap-3 px-6 py-3 border-2 border-dashed border-slate-800 rounded-xl text-slate-500 hover:text-slate-400 hover:border-slate-700 transition-all">
            <Icons.Plus />
            <span className="text-sm font-medium">Agregar Miembro</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
