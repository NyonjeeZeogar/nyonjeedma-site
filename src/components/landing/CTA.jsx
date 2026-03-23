import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-28 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto relative overflow-hidden rounded-3xl bg-primary p-12 md:p-16 text-center"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/5 rounded-full blur-3xl" />

        <div className="relative z-10">
          <h2 className="font-inter font-bold text-3xl md:text-5xl text-primary-foreground tracking-tight">
            Ready to Elevate?
          </h2>
          <p className="font-inter text-primary-foreground/70 mt-4 max-w-lg mx-auto leading-relaxed">
            Whether you're starting a business, growing your brand, or building community — let's make it happen together.
          </p>
          <Button
            onClick={() => scrollTo("contact")}
            className="mt-8 font-inter bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-8 py-6 text-base shadow-lg"
          >
            Let's Talk
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
