import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-card hover:bg-accent/50 transition-colors">
      <Icon className="h-12 w-12 text-primary" />
      <h3 className="font-semibold text-center">{title}</h3>
      <p className="text-sm text-muted-foreground text-center">
        {description}
      </p>
    </div>
  );
}