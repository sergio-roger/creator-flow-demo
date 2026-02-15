
import React, { useState } from 'react';
import { MOCK_IDEAS } from '../mockData';
import { Icons } from '../constants';
import { generateVideoIdeas } from '../services/geminiService';
import { VideoIdea, Priority } from '../types';

const priorityTranslations: Record<string, string> = {
  'High': 'Alta',
  'Medium': 'Media',
  'Low': 'Baja'
};

const Ideas: React.FC = () => {
  const [ideas, setIdeas] = useState<VideoIdea[]>(MOCK_IDEAS);
  const [niche, setNiche] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleGenerate = async () => {
    if (!niche) return;
    setIsGenerating(true);
    const newIdeas = await generateVideoIdeas(niche);
    if (newIdeas) {
      const formatted = newIdeas.map((idea: any, idx: number) => ({
        id: `ai-${Date.now()}-${idx}`,
        title: idea.title,
        description: idea.description,
        tags: idea.tags || [],
        priority: (idea.priority as Priority) || 'Medium',
        createdAt: new Date().toISOString().split('T')[0],
      }));
      setIdeas([...formatted, ...ideas]);
    }
    setIsGenerating(false);
  };

  const removeIdea = (id: string) => {
    setIdeas(ideas.filter(i => i.id !== id));
  };

  return (
    <div className="space-y-8">
      {/* AI Header Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-rose-500 p-8 rounded-2xl shadow-lg relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <h3 className="text-2xl font-bold text-white mb-2">¿Sin Ideas?</h3>
          <p className="text-indigo-100 mb-6">Usa CreatorFlow AI para generar temas virales basados en tu nicho y tendencias actuales.</p>
          <div className="flex gap-2">
            <input 
              type="text" 
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              placeholder="ej. Consejos de fotografía, Juegos indie, Trucos de cocina" 
              className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <button 
              onClick={handleGenerate}
              disabled={isGenerating}
              className="bg-white text-indigo-600 px-6 py-2 rounded-xl font-bold hover:bg-indigo-50 transition-colors disabled:opacity-50 flex items-center gap-2"
            >
              {isGenerating ? (
                <div className="w-5 h-5 border-2 border-indigo-600 border-t-transparent animate-spin rounded-full" />
              ) : (
                <Icons.Plus />
              )}
              {isGenerating ? 'Generando...' : 'Generar Ideas'}
            </button>
          </div>
        </div>
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full -mr-20 -mt-20"></div>
      </div>

      {/* Ideas List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          onClick={() => setShowForm(true)}
          className="border-2 border-dashed border-slate-800 rounded-2xl p-8 flex flex-col items-center justify-center text-slate-500 hover:text-slate-400 hover:border-slate-700 cursor-pointer transition-all group h-full min-h-[200px]"
        >
          <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Icons.Plus />
          </div>
          <span className="font-semibold">Nueva Idea</span>
        </div>

        {ideas.map((idea) => (
          <div key={idea.id} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition-all flex flex-col group relative">
            <div className="flex justify-between items-start mb-4">
              <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase ${
                idea.priority === 'High' ? 'bg-rose-500/10 text-rose-500' : 
                idea.priority === 'Medium' ? 'bg-amber-500/10 text-amber-500' : 'bg-blue-500/10 text-blue-500'
              }`}>
                Prioridad {priorityTranslations[idea.priority] || idea.priority}
              </span>
              <button 
                onClick={() => removeIdea(idea.id)}
                className="opacity-0 group-hover:opacity-100 p-1 text-slate-500 hover:text-rose-500 transition-all"
              >
                <Icons.Trash />
              </button>
            </div>
            <h4 className="text-lg font-bold text-slate-100 mb-2 leading-tight">{idea.title}</h4>
            <p className="text-slate-400 text-sm mb-4 line-clamp-3 flex-1">{idea.description}</p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {idea.tags.map(tag => (
                <span key={tag} className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded-lg border border-slate-700">#{tag}</span>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-[10px] text-slate-500">{idea.createdAt}</span>
              <button className="text-xs font-semibold text-rose-500 hover:underline">Empezar Producción →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ideas;
