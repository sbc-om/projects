import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { CurrencySelector } from "@/components/CurrencySelector";
import { CartButton } from "@/components/CartButton";
import { projects } from "@/data/projects";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Search, Filter } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export function ProjectsListPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState<string>("all");
  const filterSectionRef = useRef<HTMLDivElement>(null);
  
  // Prevent auto-scroll when interacting with filters
  useEffect(() => {
    const filterSection = filterSectionRef.current;
    if (!filterSection) return;
    
    const preventScroll = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (filterSection.contains(target)) {
        e.preventDefault();
        // Maintain current scroll position
        const scrollY = window.scrollY;
        requestAnimationFrame(() => {
          window.scrollTo(0, scrollY);
        });
      }
    };
    
    document.addEventListener('focusin', preventScroll, true);
    return () => document.removeEventListener('focusin', preventScroll, true);
  }, []);

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesDifficulty = 
      difficultyFilter === "all" || project.difficultyLevel === difficultyFilter;

    return matchesSearch && matchesDifficulty;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative border-b bg-slate-900 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <motion.div 
            className="max-w-4xl mx-auto text-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-sm mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <span className="font-medium text-white">{projects.length} Projects Available</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Project Portfolio
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto">
              Enterprise-grade solutions across real estate, e-commerce, ERP systems, and custom integrations.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filters Section */}
      <div ref={filterSectionRef} className="border-b bg-background shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <Input
                type="text"
                placeholder="Search projects, technologies..."
                className="pl-10 h-10 border-muted-foreground/20"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={(e) => e.preventDefault()}
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
                <SelectTrigger className="w-[180px] h-10">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="Low">Low</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                  <SelectItem value="Very High">Very High</SelectItem>
                </SelectContent>
              </Select>
              <CurrencySelector />
              <CartButton />
              {(searchTerm || difficultyFilter !== "all") && (
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="h-10"
                  onClick={() => {
                    setSearchTerm("");
                    setDifficultyFilter("all");
                  }}
                >
                  Clear Filters
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <Section className="py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-2xl font-bold tracking-tight">
                {filteredProjects.length} {filteredProjects.length === 1 ? 'Project' : 'Projects'}
              </h2>
            </div>
            <p className="text-muted-foreground">
              Browse our comprehensive collection of successful projects and solutions
            </p>
          </div>
          
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <p className="text-lg font-medium mb-2">
                No projects found
              </p>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search or filter criteria
              </p>
              <Button 
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setDifficultyFilter("all");
                }}
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="border-t bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="border rounded-xl p-8 md:p-12 bg-card shadow-sm">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Have a Custom Project in Mind?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  We specialize in building tailored solutions for your unique business needs. 
                  Let's discuss how we can bring your vision to life.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                  <Button size="lg" className="h-12 px-8" asChild>
                    <a 
                      href="https://wa.me/96891200634?text=Hello%2C%20I%27m%20interested%20in%20requesting%20a%20custom%20quote%20for%20a%20project.%20Could%20you%20please%20provide%20more%20information%3F" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Request Custom Quote
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="h-12 px-8" asChild>
                    <a 
                      href="https://sbc.om" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      View All Services
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
