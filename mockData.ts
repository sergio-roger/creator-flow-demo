
import { VideoIdea, VideoProduction, Sponsorship, ChannelMetrics, HistoricalMetric, TeamMember } from './types';

export const MOCK_IDEAS: VideoIdea[] = [
  {
    id: '1',
    title: '10 Apps de Productividad que Realmente Uso',
    description: 'Una inmersión profunda en mi flujo de trabajo diario usando Notion, Todoist y otros.',
    tags: ['Tecnología', 'Productividad'],
    priority: 'High',
    createdAt: '2023-10-25',
  },
  {
    id: '2',
    title: 'Por qué me cambié a Cámaras Mirrorless',
    description: 'Comparativa DSLR vs Mirrorless en 2024.',
    tags: ['Equipo', 'Tecnología'],
    priority: 'Medium',
    createdAt: '2023-10-20',
  },
  {
    id: '3',
    title: 'Mi Rutina Mañanera (Irreal)',
    description: 'Un video satírico sobre las rutinas de la "cultura del esfuerzo".',
    tags: ['Vlog', 'Comedia'],
    priority: 'Low',
    createdAt: '2023-10-18',
  },
];

export const MOCK_PRODUCTIONS: VideoProduction[] = [
  {
    id: 'p1',
    title: 'El Setup de Escritorio Definitivo 2024',
    publishDate: '2023-11-05',
    status: 'Recording',
    checklist: { script: true, recording: false, editing: false, thumbnail: true },
    assignedTo: 'Juan Pérez',
  },
  {
    id: 'p2',
    title: 'iPhone 15 Pro: Un Mes Después',
    publishDate: '2023-11-12',
    status: 'Scripting',
    checklist: { script: true, recording: false, editing: false, thumbnail: false },
    sponsorshipId: 's1',
  },
  {
    id: 'p3',
    title: 'Cómo Escalar tu Canal de YouTube',
    publishDate: '2023-10-30',
    status: 'Ready',
    checklist: { script: true, recording: true, editing: true, thumbnail: true },
  },
];

export const MOCK_SPONSORSHIPS: Sponsorship[] = [
  {
    id: 's1',
    brand: 'ExpressVPN',
    amount: 1500,
    currency: 'USD',
    deadline: '2023-11-10',
    status: 'Contract Signed',
    deliverables: ['Anuncio integrado de 60s', 'Enlace en descripción'],
  },
  {
    id: 's2',
    brand: 'Squarespace',
    amount: 2200,
    currency: 'USD',
    deadline: '2023-11-20',
    status: 'Negotiating',
    deliverables: ['Video dedicado', 'Comentario fijado'],
  },
];

export const MOCK_METRICS: ChannelMetrics = {
  subscribers: 124500,
  viewsLast30Days: 850400,
  revenueLast30Days: 4230,
  watchTimeHours: 12500,
  growthRate: 12.5,
};

export const MOCK_HISTORY: HistoricalMetric[] = [
  { date: '2023-05', views: 400000, revenue: 1800 },
  { date: '2023-06', views: 450000, revenue: 2100 },
  { date: '2023-07', views: 600000, revenue: 2800 },
  { date: '2023-08', views: 720000, revenue: 3500 },
  { date: '2023-09', views: 800000, revenue: 3900 },
  { date: '2023-10', views: 850400, revenue: 4230 },
];

export const MOCK_TEAM: TeamMember[] = [
  { id: '1', name: 'Juan Pérez', role: 'Creador Principal', avatar: 'https://picsum.photos/seed/john/100' },
  { id: '2', name: 'Juana Smith', role: 'Editora de Video', avatar: 'https://picsum.photos/seed/jane/100' },
  { id: '3', name: 'Miguel Ross', role: 'Diseñador de Miniaturas', avatar: 'https://picsum.photos/seed/mike/100' },
];
