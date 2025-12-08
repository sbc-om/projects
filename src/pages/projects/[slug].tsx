import { useParams, useNavigate, Navigate, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { ProjectHero } from "@/components/ProjectHero";
import { ProjectFeature } from "@/components/ProjectFeature";
import { PriceBox } from "@/components/PriceBox";
import { CurrencySelector } from "@/components/CurrencySelector";
import { Section, SectionHeader } from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Clock, Zap, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export function ProjectDetailsPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  // Get related projects (same difficulty level or similar tech)
  const relatedProjects = projects
    .filter((p) => 
      p.id !== project.id && 
      (p.difficultyLevel === project.difficultyLevel || 
       p.technologies.some(tech => project.technologies.includes(tech)))
    )
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="border-b bg-background shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate(-1)}
              className="group transition-all hover:bg-muted"
            >
              <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back
            </Button>
            <CurrencySelector />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <motion.div 
        className="container mx-auto px-4 py-6"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <ProjectHero
          title={project.title}
          description={project.shortDescription}
          technologies={project.technologies}
          heroImage={project.heroImage}
        />
      </motion.div>

      {/* Main Content */}
      <Section>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Details */}
            <motion.div 
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            >
              {/* Overview */}
              <div className="space-y-4">
                <SectionHeader 
                  title="Project Overview"
                  description={project.longDescription}
                />
              </div>

              <Separator />

              {/* Features */}
              <ProjectFeature features={project.features} />

              <Separator />

              {/* Technologies */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Technology Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: idx * 0.05 }}
                    >
                      <Badge variant="secondary" className="text-sm px-3 py-1.5">
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Project Timeline */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Development Timeline
                </h2>
                <Card className="border-2">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold">Estimated Delivery</p>
                          <p className="text-sm text-muted-foreground">
                            Based on project scope and requirements
                          </p>
                        </div>
                        <Badge variant="outline" className="text-lg px-4 py-2">
                          {project.deliveryTime}
                        </Badge>
                      </div>
                      
                      <div className="relative pt-4">
                        <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-muted" />
                        <div className="space-y-4 relative">
                          {[
                            { phase: "Discovery & Planning", time: "Week 1" },
                            { phase: "Design & Architecture", time: "Week 2-3" },
                            { phase: "Development", time: "Week 3-5" },
                            { phase: "Testing & Deployment", time: "Week 6" }
                          ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-4 pl-8">
                              <div className="absolute left-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                              <div className="flex-1">
                                <p className="font-medium">{item.phase}</p>
                                <p className="text-sm text-muted-foreground">{item.time}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Separator />

              {/* Why Choose This Solution */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Why Choose This Solution
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Production-ready architecture",
                    "Scalable & maintainable code",
                    "Modern UI/UX design",
                    "Full documentation included",
                    "Post-launch support",
                    "Security best practices"
                  ].map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                    >
                      <Card className="border hover:border-primary/50 transition-colors">
                        <CardContent className="p-4 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <p className="text-sm font-medium">{benefit}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Pricing */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
            >
              <PriceBox
                price={project.priceEstimate}
                deliveryTime={project.deliveryTime}
                difficultyLevel={project.difficultyLevel}
                features={project.features}
                projectTitle={project.title}
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
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                    <CardContent className="p-6 space-y-3">
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                        {relatedProject.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relatedProject.shortDescription}
                      </p>
                      <div className="flex items-center justify-between pt-2">
                        <Badge variant="secondary">{relatedProject.difficultyLevel}</Badge>
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
      <Section className="bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-slate-200">
              Let's discuss your project requirements and create a custom solution 
              tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" variant="secondary">
                Request Detailed Quote
              </Button>
 
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
