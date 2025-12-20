import { useParams, useNavigate, Navigate, Link } from "react-router-dom";
import { projects } from "@/data/projects";

import { PriceBox } from "@/components/PriceBox";
import { CurrencySelector } from "@/components/CurrencySelector";
import { CartButton } from "@/components/CartButton";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Section, SectionHeader } from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { ArrowLeft, Clock, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { LiquidBackground } from "@/components/LiquidBackground";

export function ProjectDetailsPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  // Get related projects (similar tech or same category)
  const relatedProjects = projects
    .filter((p) => 
      p.id !== project.id && 
      (p.category === project.category || 
       p.technologies.some(tech => project.technologies.includes(tech)))
    )
    .slice(0, 3);

  return (
    <LiquidBackground>
    <div className="min-h-screen bg-background/0 relative z-10">
      {/* Top Navigation */}
      <div className="sticky top-0 z-50 border-b border-white/10 dark:border-white/10 liquid-glass-nav">
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
      </div>

      {/* Back Button */}
      <div className="border-b border-white/10 dark:border-white/10 liquid-glass-nav">
        <div className="container mx-auto px-4 py-3">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate(-1)}
            className="group transition-all hover:bg-muted"
          >
            <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="border-b dark:border-white/5">
        <motion.div 
          className="container mx-auto px-4 py-12 md:py-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Badge className="mb-4">{project.category}</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {project.shortDescription}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 5).map((tech) => (
                  <Badge key={tech} variant="outline">{tech}</Badge>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <Section>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Details */}
            <motion.div 
              className="lg:col-span-2 space-y-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Overview */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              <div className="border-t dark:border-white/5" />

              {/* Features */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Key Features</h2>
                <div className="grid gap-3">
                  {project.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      className="flex items-start gap-3 p-4 rounded-lg border dark:border-white/5 bg-muted/30"
                    >
                      <div className="shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                        {idx + 1}
                      </div>
                      <p className="text-muted-foreground">{feature}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="border-t dark:border-white/5" />

              {/* Technologies */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Technology Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                    >
                      <Badge variant="secondary" className="text-sm px-3 py-1.5">
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="border-t dark:border-white/5" />

              {/* Project Timeline */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Timeline
                </h2>
                <div className="p-6 rounded-lg border dark:border-white/5 bg-muted/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">Estimated Delivery</p>
                      <p className="text-sm text-muted-foreground">
                        Based on project scope
                      </p>
                    </div>
                    <Badge variant="outline" className="text-lg px-4 py-2">
                      {project.deliveryTime}
                    </Badge>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Pricing */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <PriceBox
                deliveryTime={project.deliveryTime}
                features={project.features}
                projectTitle={project.title}
                projectId={project.id}
                projectSlug={project.slug}
              />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <Section className="bg-muted/30">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Related Projects"
              description="Explore similar solutions that might interest you"
            />
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProjects.map((relatedProject) => (
                <Link 
                  key={relatedProject.id} 
                  to={`/projects/${relatedProject.slug}`}
                  className="group"
                >
                  <Card className="h-full transition-all duration-300 hover:scale-[1.02]">
                    <CardContent className="p-6 space-y-3">
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                        {relatedProject.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relatedProject.shortDescription}
                      </p>
                      <div className="flex items-center justify-between pt-2">
                        <Badge variant="secondary">{relatedProject.category}</Badge>
                        <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Final CTA */}
      <Section className="bg-slate-100 dark:bg-linear-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-slate-900 dark:text-white border-t dark:border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 dark:bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 dark:bg-[radial-gradient(circle_at_70%_60%,rgba(168,85,247,0.12),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-200">
              Let's discuss your project requirements and create a custom solution 
              tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" variant="secondary" asChild>
                <a 
                  href={`https://wa.me/96891200634?text=Hello%2C%20I'm%20interested%20in%20${project ? encodeURIComponent(project.title) : 'this project'}.%20Could%20you%20provide%20more%20details%3F`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request Detailed Quote
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
    </LiquidBackground>
  );
}
