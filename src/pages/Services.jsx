import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Megaphone, Rocket, Heart, ArrowRight } from "lucide-react";
import PageHero from "@/components/landing/PageHero";

const pillars = [
  {
    icon: Megaphone,
    title: "Digital Marketing Agency",
    description: "Your business has a story worth telling. We help you tell it — through brands people remember, websites that feel alive, and campaigns that move real people to take real action.",
    services: ["Ad Campaigns (Google, Meta, Social)", "Branding & Visual Identity", "Website Design & Development", "SEO & Content Strategy", "Google Business Profile Setup", "Web Development"],
    path: "/DigitalMarketing",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Rocket,
    title: "Business Launch Services",
    description: "Starting something from nothing is one of the most human things you can do. We sit beside you through every step — from your first LLC filing to your first real client.",
    services: ["LLC Formation Assistance", "Nonprofit Startup Help", "Startup Mentorship", "Business Consulting", "Nonprofit Consulting"],
    path: "/BusinessLaunch",
    color: "bg-secondary/10 text-secondary-foreground",
  },
  {
    icon: Heart,
    title: "Community Impact Programs",
    description: "We believe in the power of community to transform lives. These programs are for the neighborhoods, the young people, and the organizations doing the work that matters most.",
    services: ["Youth Workforce Training", "Digital Literacy Programs", "Nonprofit Partnerships", "Government Contract Support"],
    path: "/CommunityImpact",
    color: "bg-primary/5 text-primary",
  },
];

export default function Services() {
  return (
    <>
      <PageHero
        badge="Our Services"
        title="We don't just offer services."
        highlight="We offer partnership."
        description="Three pillars, one purpose — to be genuinely useful to the people, businesses, and communities we serve."
      />

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-card rounded-2xl border border-border p-8 md:p-10 flex flex-col md:flex-row gap-8 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="flex-1">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${p.color}`}>
                  <p.icon className="w-7 h-7" />
                </div>
                <h3 className="font-inter font-bold text-2xl text-foreground mb-3">{p.title}</h3>
                <p className="font-inter text-muted-foreground leading-relaxed mb-6 text-[1.0625rem]">{p.description}</p>
                <Link to={p.path} className="inline-flex items-center gap-2 font-inter text-sm font-semibold text-primary hover:gap-3 transition-all">
                  Learn more about this <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="md:w-64 space-y-3">
                <p className="font-inter text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">What's included</p>
                {p.services.map((s) => (
                  <div key={s} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span className="font-inter text-sm text-foreground">{s}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
