import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 mb-8 shadow-sm">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="font-inter text-sm font-medium text-muted-foreground">Professional, Scientific & Technical Services</span>
          </div>

          <h1 className="font-inter font-900 text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.95] tracking-tight mb-6">
            Build. Brand.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
              Elevate.
            </span>
          </h1>

          <p className="font-inter text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            From digital marketing and web development to LLC formation and community impact programs — we help businesses and communities thrive across Minnesota.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={() => scrollTo("contact")}
              className="font-inter bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base shadow-lg shadow-primary/20"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              onClick={() => scrollTo("services")}
              variant="outline"
              className="font-inter rounded-full px-8 py-6 text-base border-border"
            >
              View Services
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-md mx-auto"
        >
          {[
            { label: "Services", value: "12+" },
            { label: "Based in", value: "MN" },
            { label: "Focus", value: "Impact" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-inter font-bold text-2xl text-foreground">{stat.value}</p>
              <p className="font-inter text-xs text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
