import { Badge } from "@/components/ui/badge";

interface ProjectHeroProps {
  title: string;
  description: string;
  technologies: string[];
  heroImage: string;
}

export function ProjectHero({ title, description, technologies, heroImage }: ProjectHeroProps) {
  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-lg border">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6 py-12 z-10">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
            {title}
          </h1>
          
          <p className="text-base md:text-lg text-slate-200 max-w-2xl mx-auto">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2 justify-center pt-2">
            {technologies.slice(0, 6).map((tech) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm"
              >
                {tech}
              </Badge>
            ))}
            {technologies.length > 6 && (
              <Badge 
                variant="secondary" 
                className="bg-white/10 text-white border-white/20"
              >
                +{technologies.length - 6} more
              </Badge>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
