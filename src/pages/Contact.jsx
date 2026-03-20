import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import PageHero from "@/components/landing/PageHero";

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    setSending(true);
    await new Promise((r) => setTimeout(r, 1000));
    toast({ title: "Message received!", description: "A real human will get back to you within 24 hours." });
    setForm({ name: "", email: "", service: "", message: "" });
    setSending(false);
  };

  return (
    <>
      <PageHero
        badge="Let's Connect"
        title="We'd love to hear"
        highlight="from you."
        description="No bots. No automated replies. Just a real conversation with real people who want to help."
      />

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
          {/* Human touch info */}
          <div className="space-y-8">
            <div>
              <p className="font-inter font-semibold text-foreground mb-5">How we work</p>
              <div className="space-y-5">
                {[
                  { icon: MapPin, label: "We're in Minnesota", value: "Rooted in the community we serve." },
                  { icon: Mail, label: "Real responses", value: "Every message is read by a real person." },
                  { icon: Clock, label: "Within 24 hours", value: "We respect your time as much as our own." },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-inter text-sm font-semibold text-foreground">{item.label}</p>
                      <p className="font-inter text-xs text-muted-foreground mt-0.5">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-secondary text-secondary-foreground rounded-2xl p-6">
              <p className="font-inter text-sm text-secondary-foreground/70 italic leading-relaxed">
                "You don't need to have it all figured out. Just reach out — we'll figure it out together."
              </p>
              <p className="font-inter text-xs font-semibold text-primary mt-4">— Nyonjee, Founder</p>
            </div>
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="md:col-span-2 bg-card rounded-2xl border border-border p-8 space-y-5 shadow-sm"
          >
            <div>
              <h3 className="font-inter font-bold text-xl text-foreground mb-1">Tell us about yourself</h3>
              <p className="font-inter text-sm text-muted-foreground">We read every message personally.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="font-inter text-sm font-medium text-foreground mb-2 block">Your name *</label>
                <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="What do people call you?" className="font-inter rounded-xl" />
              </div>
              <div>
                <label className="font-inter text-sm font-medium text-foreground mb-2 block">Your email *</label>
                <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" className="font-inter rounded-xl" />
              </div>
            </div>

            <div>
              <label className="font-inter text-sm font-medium text-foreground mb-2 block">What can we help with?</label>
              <Select value={form.service} onValueChange={(val) => setForm({ ...form, service: val })}>
                <SelectTrigger className="font-inter rounded-xl">
                  <SelectValue placeholder="Pick what feels closest" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="digital_marketing">Digital Marketing</SelectItem>
                  <SelectItem value="web_design">Website Design & Development</SelectItem>
                  <SelectItem value="branding">Branding</SelectItem>
                  <SelectItem value="seo">SEO & Ad Campaigns</SelectItem>
                  <SelectItem value="llc_formation">LLC Formation Help</SelectItem>
                  <SelectItem value="nonprofit">Nonprofit Startup Help</SelectItem>
                  <SelectItem value="consulting">Business Consulting</SelectItem>
                  <SelectItem value="youth_programs">Youth Workforce Programs</SelectItem>
                  <SelectItem value="digital_literacy">Digital Literacy Programs</SelectItem>
                  <SelectItem value="other">I'm not sure yet</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="font-inter text-sm font-medium text-foreground mb-2 block">Your message *</label>
              <Textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Share whatever's on your mind — your idea, your challenge, your dream. There's no wrong answer here."
                className="font-inter rounded-xl min-h-[140px]"
              />
            </div>

            <Button type="submit" disabled={sending} className="w-full font-inter bg-primary text-primary-foreground hover:bg-primary/90 rounded-full py-6 text-base">
              {sending ? (
                <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              ) : (
                <>Send my message <ArrowRight className="w-4 h-4 ml-2" /></>
              )}
            </Button>
          </motion.form>
        </div>
      </section>
    </>
  );
}
