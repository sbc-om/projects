import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { CurrencySelector } from "@/components/CurrencySelector";
import { CartButton } from "@/components/CartButton";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { EnhancedHero } from "@/components/EnhancedHero";
import { FadeInView } from "@/components/AnimationWrappers";
import { LiquidBackground } from "@/components/LiquidBackground";
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
import { useMemo, useState, useRef, useEffect } from "react";
import { motion } from "motion/react";

export function ProjectsListPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [scrollY, setScrollY] = useState(0);
  const filterSectionRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
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

  const categories = useMemo(() => {
    const unique = Array.from(new Set(projects.map((p) => p.category)));

    const preferredOrder = [
      "PropTech & Real Estate",
      "E-Commerce & Retail",
      "Communication & CRM",
      "Voice & Contact Center",
      "Voice & Video",
      "ERP & Integrations",
      "Mobile Apps",
      "AI & Automation",
      "AI & IoT",
      "Blockchain & Web3",
      "FinTech & Investment",
      "Healthcare & Beauty",
      "Monthly Services"
    ];

    const ordered = preferredOrder.filter((c) => unique.includes(c));
    const rest = unique.filter((c) => !preferredOrder.includes(c)).sort();
    return [...ordered, ...rest];
  }, []);

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = categoryFilter === "all" || project.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  const showGroupedByCategory =
    searchTerm.trim() === "" && categoryFilter === "all";

  const projectsByCategory = useMemo(() => {
    if (!showGroupedByCategory) return [] as Array<{ category: string; items: typeof projects }>;
    return categories
      .map((category) => ({
        category,
        items: projects.filter((p) => p.category === category),
      }))
      .filter((g) => g.items.length > 0);
  }, [categories, showGroupedByCategory]);

  return (
    <LiquidBackground>
    <div className="min-h-screen bg-background/0 relative z-10">
      {/* Top Navigation */}
      <motion.div
        className="sticky top-0 z-50 border-b border-white/10 dark:border-white/10 liquid-glass-nav"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          boxShadow: scrollY > 50 ? "0 4px 20px rgba(0, 0, 0, 0.1)" : "none",
          transition: "box-shadow 0.3s ease",
        }}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Logo />
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <CurrencySelector />
              <CartButton />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <EnhancedHero className="relative border-b dark:border-white/5 text-slate-900 dark:text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Software Solutions
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {projects.length} ready-to-customize projects for your business
              </motion.p>
            </motion.div>
          </div>
        </div>
      </EnhancedHero>

      {/* Filters Section */}
      <div ref={filterSectionRef} className="border-b border-white/10 dark:border-white/10 liquid-glass-nav relative z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <Input
                type="text"
                placeholder="Search projects, technologies..."
                className="pl-10 h-10 border-muted-foreground/20 bg-white/60 dark:bg-slate-900/30 backdrop-blur-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={(e) => e.preventDefault()}
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[220px] h-10 bg-white/60 dark:bg-slate-900/30 backdrop-blur-md">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {(searchTerm || categoryFilter !== "all") && (
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="h-10"
                  onClick={() => {
                    setSearchTerm("");
                    setCategoryFilter("all");
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
      <Section className="py-8 relative z-10">
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

          {showGroupedByCategory ? (
            <div className="space-y-10">
              {projectsByCategory.map((group, groupIndex) => (
                <FadeInView key={group.category} delay={groupIndex * 0.1}>
                  <div>
                    <div className="flex items-end justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold tracking-tight">{group.category}</h3>
                        <p className="text-sm text-muted-foreground">{group.items.length} items</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {group.items.map((project, index) => (
                        <ProjectCard
                          key={project.id}
                          project={project}
                          index={index}
                        />
                      ))}
                    </div>
                  </div>
                </FadeInView>
              ))}
            </div>
          ) : filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProjects.map((project, index) => (
                <FadeInView key={project.id} delay={index * 0.05}>
                  <ProjectCard project={project} index={index} />
                </FadeInView>
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
                  setCategoryFilter("all");
                }}
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="border-t dark:border-white/5">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-2xl mx-auto text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Have a Custom Project?
            </h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss how we can bring your vision to life
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
              <Button size="lg" asChild>
                <a 
                  href="https://wa.me/96891200634?text=Hello%2C%20I%27m%20interested%20in%20requesting%20a%20custom%20quote%20for%20a%20project." 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Request Quote
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a 
                  href="https://sbc.om" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Services
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
    </LiquidBackground>
  );
}
