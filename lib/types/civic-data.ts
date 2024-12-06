export interface CivicProject {
  id: string;
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  status: 'active' | 'completed' | 'planned';
  description: string;
  impact: string;
  beneficiaries: number;
  budget: number;
  sdgGoals: string[];
}

export interface AnalysisRequest {
  query: string;
  projectIds?: string[];
  dateRange?: {
    start: string;
    end: string;
  };
  region?: string;
  analysisType: 'impact' | 'overlap' | 'recommendation' | 'trend';
}

export interface AnalysisResponse {
  summary: string;
  insights: string[];
  recommendations?: string[];
  visualData?: any;
  relatedProjects?: CivicProject[];
}