import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Megaphone, BarChart2, Globe, Search, Star, Palette, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/landing/PageHero";

const services = [
  { icon: BarChart2, title: "Ad Campaigns", desc: "Google, Meta, and social media campaigns built for ROI — targeted, tracked, and optimized for your audience." },
  { icon: Palette, title: "Branding & Identity", desc: "Logo design, color systems, typography, and brand guidelines that make you memorable and professional." },
  { icon: Globe, title: "Website Design & Development", desc: "Custom, mobile-first websites that look great and convert visitors into customers." },
  { icon: Search, title: "SEO & Content Strategy", desc: "Organic growth through keyword research, on-page optimization, and content that ranks." },
  { icon: Star, title: "Google Business Profile", desc: "Setup, optimization, and management of your GBP so local customers can find you first." },
  { icon: Megaphone, title: "Web Development", desc: "Full-stack development for custom web applications, portals, and business tools." },
];

export default function DigitalMarketing() {
  return (
    <>
      <PageHero
        badge="Digital Marketing Agency"
        title="Grow Your Brand"
        highlight="Online & Beyond"
        description="Performance-driven digital marketing that builds your brand, drives traffic, and turns clicks into customers — all from one agency."
      />

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-card rounded-2xl border border-border p-7 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-inter font-bold text-lg text-foreground mb-2">{s.title}</h3>
                <p className="font-inter text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-card">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-inter font-bold text-3xl text-foreground">Ready to grow your digital presence?</h2>
          <p className="font-inter text-muted-foreground mt-4 leading-relaxed">Let's build a strategy tailored to your business goals.</p>
          <Button asChild className="mt-8 font-inter bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6">
            <Link to="/Contact">Get a Free Consultation <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
