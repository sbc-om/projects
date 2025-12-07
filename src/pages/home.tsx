import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CurrencySelector } from "@/components/CurrencySelector";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Zap, Shield, Users } from "lucide-react";
import { motion } from "framer-motion";

export function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20 text-sm px-4 py-1">
                Senior Blockchain LLC
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Building Digital Solutions That Scale
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-slate-200 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              From real estate platforms to AI-powered systems, we deliver enterprise-grade 
              solutions tailored to your business needs.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link to="/projects">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  View Portfolio
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8 text-white border-white hover:bg-white/10">
                Get Started
              </Button>
            </motion.div>
            
            {/* Currency Selector */}
            <motion.div 
              className="flex justify-center pt-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 inline-flex items-center gap-3">
                <span className="text-sm text-slate-200">View prices in:</span>
                <CurrencySelector />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Why Choose Us
            </h2>
            <p className="text-lg text-muted-foreground">
              We combine technical excellence with business insight to deliver solutions that drive results.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Code2,
                title: "Modern Technology",
                description: "Built with React 19, TypeScript, and cutting-edge frameworks"
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized performance and user experience out of the box"
              },
              {
                icon: Shield,
                title: "Secure & Reliable",
                description: "Enterprise-grade security and best practices implemented"
              },
              {
                icon: Users,
                title: "Client-Focused",
                description: "Dedicated support and tailored solutions for your needs"
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="border-2 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] h-full">
                  <CardContent className="pt-6 space-y-3">
                    <motion.div 
                      className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <feature.icon className="h-6 w-6 text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10+", label: "Projects Delivered" },
              { value: "5+", label: "Years Experience" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "24/7", label: "Support Available" }
            ].map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <p className="text-4xl md:text-5xl font-bold text-primary">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <Card className="border-2 shadow-xl">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Let's discuss your requirements and create a custom solution that exceeds your expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link to="/projects">
                  <Button size="lg" className="text-lg px-8">
                    View All Projects
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
 
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
