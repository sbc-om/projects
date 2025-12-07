import { Badge } from "@/components/ui/badge";

interface ProjectHeroProps {
  title: string;
  description: string;
  technologies: string[];
  heroImage: string;
}

export function ProjectHero({ title, description, technologies, heroImage }: ProjectHeroProps) {
  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-xl shadow-2xl">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/75" />
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6 py-12 z-10">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {title}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2 justify-center pt-4">
            {technologies.map((tech) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="bg-white/10 text-white border-white/20 hover:bg-white/20"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
