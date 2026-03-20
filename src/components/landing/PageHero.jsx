import React from "react";
import { motion } from "framer-motion";

export default function PageHero({ badge, title, highlight, description }) {
  return (
    <section className="relative pt-36 pb-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary/8 rounded-full blur-3xl" />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {badge && (
            <span className="font-inter text-sm font-semibold text-primary tracking-widest uppercase">{badge}</span>
          )}
          <h1 className="font-inter font-bold text-4xl md:text-6xl text-foreground mt-3 tracking-tight leading-tight">
            {title}
            {highlight && (
              <>
                <br />
                <span className="text-primary">{highlight}</span>
              </>
            )}
          </h1>
          {description && (
            <p className="font-inter text-lg text-muted-foreground mt-6 max-w-2xl mx-auto leading-relaxed">{description}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
