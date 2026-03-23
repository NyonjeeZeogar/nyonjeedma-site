import React from "react";
import { motion } from "framer-motion";
import { Megaphone, Rocket, Heart } from "lucide-react";
import ServicePillar from "./ServicePillar";

const pillars = [
  {
    icon: Megaphone,
    title: "Digital Marketing Agency",
    description: "Full-service digital presence — from brand identity to performance-driven ad campaigns that deliver measurable results.",
    services: ["Ad Campaigns (Google, Meta, Social)", "Branding & Visual Identity", "Website Design & Development", "SEO & Content Strategy", "Google Business Profile Setup", "Web Development"],
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Rocket,
    title: "Business Launch Services",
    description: "Expert guidance to help entrepreneurs and changemakers get their ventures off the ground with confidence.",
    services: ["LLC Formation Assistance", "Nonprofit Startup Help", "Startup Mentorship", "Business Consulting", "Nonprofit Consulting"],
    color: "bg-secondary/20 text-secondary-foreground",
  },
  {
    icon: Heart,
    title: "Community Impact Programs",
    description: "Investing in people and communities through education, workforce development, and strategic partnerships.",
    services: ["Youth Workforce Training", "Digital Literacy Programs", "Nonprofit Partnerships", "Government Contract Support"],
    color: "bg-chart-3/15 text-foreground",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-inter text-sm font-semibold text-secondary tracking-widest uppercase">What We Do</span>
          <h2 className="font-inter font-bold text-4xl md:text-5xl text-foreground mt-3 tracking-tight">
            Three Pillars of Service
          </h2>
          <p className="font-inter text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
            All operating under one LLC — professional, scientific, and technical services designed to elevate businesses and communities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <ServicePillar key={pillar.title} {...pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
