import React from "react";
import { motion } from "framer-motion";

export default function ServicePillar({ icon: Icon, title, description, services, color, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative bg-card rounded-2xl border border-border p-8 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1"
    >
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${color}`}>
        <Icon className="w-7 h-7" />
      </div>

      <h3 className="font-inter font-bold text-xl text-foreground mb-3">{title}</h3>
      <p className="font-inter text-sm text-muted-foreground mb-6 leading-relaxed">{description}</p>

      <div className="space-y-3">
        {services.map((service) => (
          <div key={service} className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
            <span className="font-inter text-sm text-foreground">{service}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
