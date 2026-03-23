import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Users, Rocket, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Your story deserves to be heard. We amplify your voice through branding, ads, and web design that actually connects.",
    path: "/DigitalMarketing",
  },
  {
    icon: Rocket,
    title: "Business Launch",
    desc: "Every dream needs a structure. We help you build the foundation — LLC formation, mentorship, and strategy to get you moving.",
    path: "/BusinessLaunch",
  },
  {
    icon: Heart,
    title: "Community Impact",
    desc: "People first, always. We invest in communities through workforce training, digital literacy, and programs that uplift real lives.",
    path: "/CommunityImpact",
  },
];

const values = [
  { word: "Seen.", detail: "We listen before we speak. Your story shapes everything we do." },
  { word: "Supported.", detail: "You're never alone in the process. We walk with you, every step." },
  { word: "Elevated.", detail: "We don't just deliver services — we deliver transformation." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69bb52a56a6e106ff967ea92/abcc1f107_NDMAHERO.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 mb-10 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-inter text-sm font-medium text-white/80">
                <em>Nyonjee</em> — to be human · Minnesota
              </span>
            </div>

            <h1 className="font-inter font-bold text-5xl md:text-7xl lg:text-8xl text-white leading-[0.92] tracking-tight mb-8">
              Business is personal.
              <br />
              <span className="text-primary">We treat it that way.</span>
            </h1>

            <p className="font-inter text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-12 leading-relaxed">
              NJ Elevate LLC was built on a simple belief — that every person behind a business deserves to feel seen, supported, and empowered to grow.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild className="font-inter bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base shadow-lg shadow-primary/20">
                <Link to="/Contact">Let's Talk <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
              <Button asChild variant="outline" className="font-inter rounded-full px-8 py-6 text-base border-border">
                <Link to="/Services">See What We Do</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }} className="mt-20 grid grid-cols-3 gap-8 max-w-sm mx-auto">
            {[{ label: "Real People", value: "Always" }, { label: "Based in", value: "MN" }, { label: "Mission", value: "Human" }].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-inter font-bold text-2xl text-white">{stat.value}</p>
                <p className="font-inter text-xs text-white/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Human Manifesto */}
      <section className="py-24 px-6 bg-secondary text-secondary-foreground">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p className="font-inter text-sm font-semibold text-primary tracking-widest uppercase mb-6">Our Name. Our Promise.</p>
            <h2 className="font-inter font-bold text-4xl md:text-6xl text-secondary-foreground leading-tight mb-6">
              "Nyonjee" means<br />
              <span className="text-primary">to be human.</span>
            </h2>
            <p className="font-inter text-lg text-secondary-foreground/70 max-w-2xl leading-relaxed mb-16">
              In a world full of algorithms, automation, and cold transactions — we chose a different path. Every service we offer starts with a conversation. Every strategy is built around real people and real goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.word}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="border-l-2 border-primary pl-6"
              >
                <h3 className="font-inter font-bold text-3xl text-secondary-foreground mb-3">{v.word}</h3>
                <p className="font-inter text-secondary-foreground/60 leading-relaxed">{v.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Pillars */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="font-inter text-sm font-semibold text-primary/70 tracking-widest uppercase">How We Serve You</span>
            <h2 className="font-inter font-bold text-4xl md:text-5xl text-foreground mt-3 tracking-tight">Three ways we show up for you</h2>
            <p className="font-inter text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
              Whether you're launching a dream, growing a brand, or building a community — there's a place for you here.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}>
                <Link to={p.path} className="group block bg-card rounded-2xl border border-border p-8 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                    <p.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-inter font-bold text-xl text-foreground mb-3">{p.title}</h3>
                  <p className="font-inter text-sm text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
                  <span className="font-inter text-sm font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Human Touch Quote */}
      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto relative overflow-hidden rounded-3xl bg-primary p-12 md:p-16 text-center"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-white/5 rounded-full blur-2xl" />
          <div className="relative z-10">
            <Users className="w-10 h-10 text-primary-foreground/40 mx-auto mb-6" />
            <h2 className="font-inter font-bold text-3xl md:text-5xl text-primary-foreground tracking-tight leading-tight">
              You're not just a client.<br />You're the reason we exist.
            </h2>
            <p className="font-inter text-primary-foreground/70 mt-6 max-w-lg mx-auto leading-relaxed text-lg">
              Every meeting, every strategy, every design — rooted in real relationships and genuine care for your success.
            </p>
            <Button asChild className="mt-10 font-inter bg-white text-secondary hover:bg-white/90 rounded-full px-8 py-6 text-base shadow-lg font-semibold">
              <Link to="/Contact">Start the Conversation <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </>
  );
}
