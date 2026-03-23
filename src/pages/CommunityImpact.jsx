import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, Monitor, Handshake, Building, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/landing/PageHero";

const programs = [
  { icon: Users, title: "Youth Workforce Training", desc: "Job readiness programs that equip young people with the skills, confidence, and opportunities to enter the workforce." },
  { icon: Monitor, title: "Digital Literacy Programs", desc: "Hands-on digital education for community members — from basic computer skills to navigating online tools for work and life." },
  { icon: Handshake, title: "Nonprofit Partnerships", desc: "Collaborative partnerships with nonprofits to co-develop programs, share resources, and amplify community impact." },
  { icon: Building, title: "Government Contracts", desc: "Working with local and state government to deliver community-benefit services and programs at scale." },
];

const values = [
  { step: "01", title: "Equity First", desc: "Every program is designed with equity and accessibility at the center." },
  { step: "02", title: "Community-Led", desc: "We listen to communities and build what they actually need." },
  { step: "03", title: "Lasting Impact", desc: "We focus on sustainable change, not one-off events." },
];

export default function CommunityImpact() {
  return (
    <>
      <PageHero
        badge="Community Impact Programs"
        title="Investing in"
        highlight="People & Communities"
        description="Workforce development, digital education, and strategic partnerships that create real, lasting change in Minnesota communities."
      />

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {programs.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-2xl border border-border p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <p.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-inter font-bold text-xl text-foreground mb-3">{p.title}</h3>
                <p className="font-inter text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-inter font-bold text-3xl md:text-4xl text-foreground">
              Our Values
            </h2>
            <p className="font-inter text-muted-foreground mt-3">
              The principles that guide how we serve communities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary font-inter font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {v.step}
                </div>
                <h4 className="font-inter font-semibold text-foreground mb-2">
                  {v.title}
                </h4>
                <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-inter font-bold text-3xl text-foreground">Partner with us</h2>
          <p className="font-inter text-muted-foreground mt-4">Interested in a partnership, contract, or collaboration? Let's connect.</p>
          <Button asChild className="mt-8 font-inter bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6">
            <Link to="/Contact">Get in Touch <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
