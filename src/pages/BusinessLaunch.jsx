import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileText, Heart, Lightbulb, Users, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/landing/PageHero";

const services = [
  { icon: FileText, title: "LLC Formation Help", desc: "We guide you through every step of forming your LLC in Minnesota — paperwork, filing, and setup." },
  { icon: Heart, title: "Nonprofit Startup Help", desc: "From 501(c)(3) applications to bylaws and board setup — we help mission-driven organizations get started right." },
  { icon: Lightbulb, title: "Startup Mentorship", desc: "One-on-one mentorship for early-stage founders navigating the challenges of launching a new business." },
  { icon: Users, title: "Business Consulting", desc: "Strategic advice on operations, growth planning, and business model development for small businesses." },
  { icon: Heart, title: "Nonprofit Consulting", desc: "Ongoing consulting for nonprofits on strategy, programming, fundraising, and compliance." },
];

const steps = [
  { step: "01", title: "Initial Consultation", desc: "We learn about your goals, vision, and what you need to launch." },
  { step: "02", title: "Custom Roadmap", desc: "We create a step-by-step plan tailored to your business or nonprofit." },
  { step: "03", title: "Guided Execution", desc: "We walk alongside you through every filing, decision, and milestone." },
  { step: "04", title: "Launch & Beyond", desc: "You're open for business — and we're still here to support your growth." },
];

export default function BusinessLaunch() {
  return (
    <>
      <PageHero
        badge="Business Launch Services"
        title="Launch with"
        highlight="Confidence"
        description="From idea to operating business — we provide the expertise, guidance, and support to help entrepreneurs and nonprofits get off the ground."
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
                className="bg-card rounded-2xl border border-border p-7 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-5">
                  <s.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="font-inter font-bold text-lg text-foreground mb-2">{s.title}</h3>
                <p className="font-inter text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-inter font-bold text-3xl md:text-4xl text-foreground">Our Process</h2>
            <p className="font-inter text-muted-foreground mt-3">How we take you from idea to launched.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div key={s.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary font-inter font-bold text-lg flex items-center justify-center mx-auto mb-4">{s.step}</div>
                <h4 className="font-inter font-semibold text-foreground mb-2">{s.title}</h4>
                <p className="font-inter text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-inter font-bold text-3xl text-foreground">Ready to launch?</h2>
          <p className="font-inter text-muted-foreground mt-4">Let's talk about your business idea or nonprofit vision.</p>
          <Button asChild className="mt-8 font-inter bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6">
            <Link to="/Contact">Start the Conversation <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
