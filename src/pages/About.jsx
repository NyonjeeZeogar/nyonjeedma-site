import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Heart, Handshake, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/landing/PageHero";

const beliefs = [
  {
    icon: Heart,
    title: "People Before Profit",
    desc: "Every decision we make starts with a simple question: does this actually help the person in front of us?",
  },
  {
    icon: Handshake,
    title: "Partnership, Not Transactions",
    desc: "We don't clock out when the project ends. We're here for the long run — your wins are our wins.",
  },
  {
    icon: Star,
    title: "Excellence with Empathy",
    desc: "High standards don't have to feel cold. We deliver world-class work while keeping it warm and personal.",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        badge="Our Story"
        title="Built by a human."
        highlight="Built for humans."
        description="NJ Elevate LLC was created from lived experience — the struggle, the grind, and the belief that everyone deserves a real shot."
      />

      {/* Founder Story */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="font-inter text-sm font-semibold text-primary tracking-widest uppercase">The Name Behind the Brand</span>
              <h2 className="font-inter font-bold text-3xl md:text-4xl text-foreground tracking-tight leading-tight mt-3 mb-6">
                "Nyonjee" — to be human
              </h2>
              <p className="font-inter text-muted-foreground leading-relaxed text-lg mb-5">
                The name of our founder, Nyonjee, isn't just a name — it's a philosophy. To be human means to show up fully, to care deeply, and to recognize the dignity in every person you work with.
              </p>
              <p className="font-inter text-muted-foreground leading-relaxed mb-5">
                NJ Elevate was born from that philosophy. We started this company because we saw too many businesses, nonprofits, and entrepreneurs being underserved — getting cookie-cutter solutions when what they really needed was someone who actually cared.
              </p>
              <p className="font-inter text-muted-foreground leading-relaxed">
                So we built something different. A Minnesota-based LLC that brings together digital marketing, business consulting, and community impact — all with one thread running through everything: <strong className="text-foreground">genuine human connection.</strong>
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="bg-secondary text-secondary-foreground rounded-3xl p-10">
                <p className="font-inter text-2xl font-light italic text-secondary-foreground/80 leading-relaxed mb-6">
                  "I wanted to build a company where people come first. Not just in our marketing — in our actual practice. Every call, every email, every late-night strategy session."
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-secondary-foreground/10">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <span className="font-inter font-bold text-primary-foreground text-lg">N</span>
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-secondary-foreground">Nyonjee</p>
                    <p className="font-inter text-sm text-secondary-foreground/60">Founder, NJ Elevate LLC</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3 bg-card rounded-xl border border-border p-5">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <p className="font-inter text-xs text-muted-foreground">Proudly rooted in</p>
                  <p className="font-inter font-semibold text-foreground">Minnesota, USA</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Beliefs */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14">
            <span className="font-inter text-sm font-semibold text-primary tracking-widest uppercase">What We Stand For</span>
            <h2 className="font-inter font-bold text-3xl md:text-4xl text-foreground mt-3 tracking-tight">The beliefs that guide us</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {beliefs.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-background rounded-2xl border border-border p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <b.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-inter font-bold text-lg text-foreground mb-3">{b.title}</h3>
                <p className="font-inter text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-inter font-bold text-3xl md:text-4xl text-foreground tracking-tight">
              Ready to work with people who care?
            </h2>
            <p className="font-inter text-muted-foreground mt-4 leading-relaxed max-w-lg mx-auto">
              Whether you have a clear vision or just a feeling — we're here to help you find your path and walk it with you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button asChild className="font-inter bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6">
                <Link to="/Contact">Get in Touch <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
              <Button asChild variant="outline" className="font-inter rounded-full px-8 py-6">
                <Link to="/Services">Explore Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
