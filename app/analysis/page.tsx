'use client';

import { useState } from 'react';
import { SplitView } from '@/components/ui/split-view';
import { PromptBuilder } from '@/components/analysis/prompt-builder';
import { InsightsDisplay } from '@/components/analysis/insights-display';
import type { AnalysisResponse } from '@/lib/types/civic-data';

export default function AnalysisPage() {
  const [analysis, setAnalysis] = useState<AnalysisResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalysisRequest = async (request: any) => {
    setIsLoading(true);
    // Simulate API call - replace with actual API integration
    setTimeout(() => {
      setAnalysis({
        summary: `Analysis of ${request.analysisType} for query: "${request.query}"\n\nThis analysis focuses on civic projects in the Rwenzori region, examining patterns and opportunities for improved impact.`,
        insights: [
          "Multiple education projects are active in Kasese district with potential for collaboration",
          "Healthcare initiatives show strong community engagement but limited resource sharing",
          "Environmental projects demonstrate successful cross-district coordination"
        ],
        recommendations: [
          "Establish quarterly coordination meetings between education-focused NGOs",
          "Develop shared resource pools for healthcare projects",
          "Scale successful environmental project models to other districts"
        ]
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="container mx-auto p-4">
      <SplitView
        left={
          <div className="flex flex-col h-full">
            <div className="p-4 border-b">
              <h2 className="text-2xl font-bold">Analysis Parameters</h2>
              <p className="text-sm text-muted-foreground">Configure your analysis query</p>
            </div>
            <PromptBuilder onSubmit={handleAnalysisRequest} isLoading={isLoading} />
          </div>
        }
        right={
          <div className="flex flex-col h-full">
            <div className="p-4 border-b">
              <h2 className="text-2xl font-bold">Analysis Results</h2>
              <p className="text-sm text-muted-foreground">AI-generated insights and recommendations</p>
            </div>
            <InsightsDisplay analysis={analysis} />
          </div>
        }
      />
    </div>
  );
}