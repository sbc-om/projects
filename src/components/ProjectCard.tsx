import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { PriceDisplay, extractBasePrice } from "@/components/PriceDisplay";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50 flex flex-col h-full border">
        <Link to={`/projects/${project.slug}`} className="block">
          <div className="relative aspect-4/3 overflow-hidden bg-muted">
            <motion.img 
              src={project.heroImage} 
              alt={project.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-black/40" />
            <motion.div 
              className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 backdrop-blur-sm"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-base font-bold text-white line-clamp-2">
                {project.title}
              </h3>
            </motion.div>
          </div>
        </Link>
      
      <Link to={`/projects/${project.slug}`} className="flex-1 flex flex-col">
        <CardHeader className="p-4 pb-3">
          <CardDescription className="line-clamp-2 text-sm min-h-10">
            {project.shortDescription}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="p-4 pt-0 flex-1">
          <div className="space-y-2.5">
            <div className="flex flex-wrap gap-1 min-h-6">
              {project.technologies.slice(0, 3).map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs px-2 py-0.5">
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 3 && (
                <Badge variant="outline" className="text-xs px-2 py-0.5">
                  +{project.technologies.length - 3}
                </Badge>
              )}
            </div>
            
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Timeline:</span>
              <span className="font-medium">{project.deliveryTime}</span>
            </div>
            
            <div className="py-2 border-t">
              <div className="flex items-baseline gap-1">
                <span className="text-xs text-muted-foreground">From</span>
                <p className="text-xl font-bold text-primary">
                  <PriceDisplay basePrice={extractBasePrice(project.priceEstimate)} />
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
    </motion.div>
  );
}
