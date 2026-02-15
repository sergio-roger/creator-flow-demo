
export type Priority = 'Low' | 'Medium' | 'High';
export type VideoStatus = 'Idea' | 'Scripting' | 'Recording' | 'Editing' | 'Ready' | 'Published';
export type SponsorshipStatus = 'Negotiating' | 'Contract Signed' | 'Draft Sent' | 'Approved' | 'Live' | 'Paid';

export interface VideoIdea {
  id: string;
  title: string;
  description: string;
  tags: string[];
  priority: Priority;
  createdAt: string;
}

export interface VideoProduction {
  id: string;
  title: string;
  publishDate: string;
  status: VideoStatus;
  checklist: {
    script: boolean;
    recording: boolean;
    editing: boolean;
    thumbnail: boolean;
  };
  assignedTo?: string;
  sponsorshipId?: string;
}

export interface Sponsorship {
  id: string;
  brand: string;
  amount: number;
  currency: string;
  deadline: string;
  status: SponsorshipStatus;
  deliverables: string[];
  contractUrl?: string;
}

export interface ChannelMetrics {
  subscribers: number;
  viewsLast30Days: number;
  revenueLast30Days: number;
  watchTimeHours: number;
  growthRate: number;
}

export interface HistoricalMetric {
  date: string;
  views: number;
  revenue: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
}
