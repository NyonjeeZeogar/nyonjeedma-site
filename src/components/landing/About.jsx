import React from "react";
import { motion } from "framer-motion";
import { MapPin, Building2, Clock, Target } from "lucide-react";

const facts = [
  { icon: MapPin, label: "Location", value: "Minnesota" },
  { icon: Building2, label: "Entity Type", value: "LLC" },
  { icon: Clock, label: "Commitment", value: "Full-Time" },
  { icon: Target, label: "NAICS Code", value: "54 — Professional Services" },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-inter text-sm font-semibold text-secondary tracking-widest uppercase">About Us</span>
            <h2 className="font-inter font-bold text-4xl md:text-5xl text-foreground mt-3 tracking-tight leading-tight">
              One LLC,
              <br />
              Unlimited Potential
            </h2>
            <p className="font-inter text-muted-foreground mt-6 leading-relaxed text-lg">
              We're a Minnesota-based LLC operating across digital marketing, business consulting, and community development. Our mission is simple — help businesses launch, grow, and make an impact.
            </p>
            <p className="font-inter text-muted-foreground mt-4 leading-relaxed">
              Whether you need a brand-new website, help forming your own LLC, or want to partner on a community workforce program, we bring the expertise and passion to make it happen.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {facts.map((fact, i) => (
              <div key={fact.label} className="bg-background rounded-xl border border-border p-6 hover:shadow-md transition-shadow duration-300">
                <fact.icon className="w-5 h-5 text-secondary mb-3" />
                <p className="font-inter text-xs text-muted-foreground uppercase tracking-wider">{fact.label}</p>
                <p className="font-inter font-semibold text-foreground mt-1 text-sm">{fact.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
