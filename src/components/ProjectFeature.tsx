import { CheckCircle2 } from "lucide-react";

interface ProjectFeatureProps {
  features: string[];
}

export function ProjectFeature({ features }: ProjectFeatureProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Key Features</h2>
      <div className="grid gap-3">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
          >
            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <span className="text-sm md:text-base">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
