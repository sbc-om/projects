import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import type { Project } from "@/data/projects";
import { useCallback, useMemo, useState } from "react";
import type { MouseEvent, SyntheticEvent } from "react";
import { Sparkles } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const fallbackAccentRgb = useMemo(() => {
    const map: Record<string, string> = {
      "Healthcare & Beauty": "236 72 153", // pink
      "PropTech & Real Estate": "34 197 94", // green
      "E-Commerce & Retail": "59 130 246", // blue
      "Communication & CRM": "168 85 247", // violet
      "Voice & Contact Center": "245 158 11", // amber
      "Voice & Video": "14 165 233", // cyan
      "ERP & Integrations": "99 102 241", // indigo
      "Mobile Apps": "20 184 166", // teal
      "AI & Automation": "239 68 68", // red
      "AI & IoT": "16 185 129", // emerald
      "Blockchain & Web3": "147 51 234", // purple
      "FinTech & Investment": "2 132 199", // sky
      "Monthly Services": "100 116 139" // slate
    };

    return map[project.category] ?? "99 102 241";
  }, [project.category]);

  const [accentRgb, setAccentRgb] = useState<string>(fallbackAccentRgb);
  const [imageFailed, setImageFailed] = useState<boolean>(false);

  const setSpotlightFromMouse = useCallback((e: MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }, []);

  const resetSpotlight = useCallback((e: MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    el.style.setProperty("--mx", "50%");
    el.style.setProperty("--my", "35%");
  }, []);

  const setAccentVar = useCallback(
    (el: HTMLElement) => {
      el.style.setProperty("--accent-rgb", accentRgb);
      if (!el.style.getPropertyValue("--mx")) el.style.setProperty("--mx", "50%");
      if (!el.style.getPropertyValue("--my")) el.style.setProperty("--my", "35%");
    },
    [accentRgb]
  );

  const handleImageLoad = useCallback(
    (e: SyntheticEvent<HTMLImageElement>) => {
      const img = e.currentTarget;
      try {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        if (!ctx) return;

        const w = 24;
        const h = 24;
        canvas.width = w;
        canvas.height = h;
        ctx.drawImage(img, 0, 0, w, h);

        const data = ctx.getImageData(0, 0, w, h).data;
        let r = 0;
        let g = 0;
        let b = 0;
        let count = 0;

        for (let i = 0; i < data.length; i += 4) {
          const a = data[i + 3];
          if (a < 16) continue;
          r += data[i];
          g += data[i + 1];
          b += data[i + 2];
          count++;
        }

        if (count === 0) return;
        r = Math.round(r / count);
        g = Math.round(g / count);
        b = Math.round(b / count);
        const next = `${r} ${g} ${b}`;
        setAccentRgb(next);

        const cardEl = img.closest('[data-slot="card"]') as HTMLElement | null;
        if (cardEl) cardEl.style.setProperty("--accent-rgb", next);
      } catch {
        // Cross-origin images can taint the canvas; fallback accent still looks great.
      }
    },
    []
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: Math.min(index * 0.03, 0.3) }}
      className="h-full"
    >
      <Card
        onMouseEnter={(e) => setAccentVar(e.currentTarget)}
        onMouseMove={setSpotlightFromMouse}
        onMouseLeave={resetSpotlight}
        className="project-card-premium liquid-highlight liquid-border-glow group relative overflow-hidden transition-all duration-300 flex flex-col h-full border hover:border-[rgb(var(--accent-rgb)/0.55)] dark:border-white/10 liquid-glass-card"
      >
        <div
          aria-hidden="true"
          className="project-card-spotlight pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />

        <Link to={`/projects/${project.slug}`} className="block">
          <div className="relative aspect-4/3 overflow-hidden bg-muted">
            {project.heroImage && !imageFailed ? (
              <img
                src={project.heroImage}
                alt={project.title}
                crossOrigin={project.heroImage.startsWith("http") ? "anonymous" : undefined}
                onLoad={handleImageLoad}
                onError={() => setImageFailed(true)}
                className="w-full h-full object-cover transition-transform duration-500 will-change-transform group-hover:scale-110"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full bg-linear-to-br from-fuchsia-500/35 via-rose-500/25 to-indigo-500/25">
                <div className="absolute inset-0 opacity-80 bg-[radial-gradient(900px_circle_at_30%_20%,rgba(255,255,255,0.22),transparent_40%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-1.5 text-white">
                    <Sparkles className="h-4 w-4" />
                    <span className="text-xs font-medium">Premium Design</span>
                  </div>
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-black/40" />
            <div 
              className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 backdrop-blur-sm"
            >
              <h3 className="text-base font-bold text-white line-clamp-2">
                {project.title}
              </h3>
            </div>
          </div>
        </Link>
      
      <Link to={`/projects/${project.slug}`} className="flex-1 flex flex-col">
        <CardHeader className="p-4 pb-3">
          <div className="flex flex-wrap items-center gap-1 mb-2">
            <Badge variant="secondary" className="text-xs px-2 py-0.5">
              {project.category}
            </Badge>
          </div>
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
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs text-muted-foreground">Pricing:</span>
                <Badge variant="secondary" className="text-xs px-2 py-0.5">
                  On request
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
    </motion.div>
  );
}
