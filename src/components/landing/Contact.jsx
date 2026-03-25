import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { submitContactForm } from "@/lib/submitContactForm";

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setSending(true);

    try {
      const result = await submitContactForm(form);

      if (result.ok) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you shortly.",
        });

        setForm({
          name: "",
          email: "",
          service: "",
          message: "",
        });
      } else {
        toast({
          title: "Submission failed",
          description: result.error,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Network error",
        description: "Unable to send your message right now. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-28 px-6 bg-card">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-inter text-sm font-semibold text-secondary tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="font-inter font-bold text-4xl md:text-5xl text-foreground mt-3 tracking-tight">
            Start a Conversation
          </h2>
          <p className="font-inter text-muted-foreground mt-4 max-w-md mx-auto leading-relaxed">
            Tell us about your project or idea and we'll get back to you within
            24 hours.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          onSubmit={handleSubmit}
          className="bg-background rounded-2xl border border-border p-8 md:p-10 space-y-6 shadow-sm"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                Name *
              </label>
              <Input
                name="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your full name"
                className="font-inter rounded-xl"
                required
              />
            </div>

            <div>
              <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                Email *
              </label>
              <Input
                type="email"
                name="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                className="font-inter rounded-xl"
                required
              />
            </div>
          </div>

          <div>
            <label className="font-inter text-sm font-medium text-foreground mb-2 block">
              Service Interest
            </label>
            <Select
              value={form.service}
              onValueChange={(val) => setForm({ ...form, service: val })}
            >
              <SelectTrigger className="font-inter rounded-xl">
                <SelectValue placeholder="Select a service" />
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

            <input type="hidden" name="service" value={form.service} />
          </div>

          <div>
            <label className="font-inter text-sm font-medium text-foreground mb-2 block">
              Message *
            </label>
            <Textarea
              name="message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell us about your project, goals, or how we can help..."
              className="font-inter rounded-xl min-h-[140px]"
              required
            />
          </div>

          <Button
            type="submit"
            disabled={sending}
            className="w-full font-inter bg-primary text-primary-foreground hover:bg-primary/90 rounded-full py-6 text-base"
          >
            {sending ? (
              <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
            ) : (
              <>
                Send Message
                <ArrowRight className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
