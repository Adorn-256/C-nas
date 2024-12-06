import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Brain, BarChart3, Users, Upload } from 'lucide-react';
import { FeatureCard } from '@/components/home/feature-card';

export default function Home() {
  const features = [
    {
      icon: Brain,
      title: "Smart Analysis",
      description: "AI-powered insights for better decision-making"
    },
    {
      icon: BarChart3,
      title: "Impact Tracking",
      description: "Measure and visualize project outcomes"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Reduce duplication and enhance regional impact"
    }
  ];

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center p-4 bg-gradient-to-b from-background to-muted">
      <div className="text-center space-y-8 max-w-3xl px-4">
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
            Civic Neurula Analytics System 
          By Yawe Foundation
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering NGOs and CSOs in the Rwenzori region through AI-powered data analytics
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 py-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/analysis" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto px-8 bg-primary hover:bg-primary/90">
              <Brain className="mr-2 h-5 w-5" />
              Start Analysis
            </Button>
          </Link>
          <Link href="/upload" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto px-8" variant="outline">
              <Upload className="mr-2 h-5 w-5" />
              Upload Data
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}