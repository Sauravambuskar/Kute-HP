import { Link } from "wouter";
import { motion } from "framer-motion";
import { FadeIn, PageTransition } from "@/components/fade-in";
import { Counter } from "@/components/counter";
import { Button } from "@/components/ui/button";
import {
  HeartPulse, ShieldCheck, Activity, ArrowRight,
  CheckCircle2, Phone, Star, Clock, Users, Award
} from "lucide-react";

const specialities = [
  { name: "Critical Care", icon: HeartPulse, desc: "24/7 intensive care units" },
  { name: "Laparoscopy", icon: Activity, desc: "Minimally invasive surgery" },
  { name: "Oncology", icon: ShieldCheck, desc: "Comprehensive cancer care" },
  { name: "Orthopedics", icon: Activity, desc: "Bone, joint & spine care" },
  { name: "Cardiology", icon: HeartPulse, desc: "Advanced heart care" },
  { name: "Gynecology", icon: Users, desc: "Women's health & maternity" },
];

const stats = [
  { value: 14, suffix: "+", label: "Years Experience", icon: Award },
  { value: 10000, suffix: "+", label: "Patients Treated", icon: Users },
  { value: 30, suffix: "+", label: "Insurance Partners", icon: ShieldCheck },
  { value: 98, suffix: "%", label: "Patient Satisfaction", icon: Star },
];

const whyUs = [
  { title: "24/7 Emergency Care", desc: "Always ready when you need us most", icon: Clock },
  { title: "Expert Specialists", desc: "Led by Dr. Pradeep Kute with 14+ years expertise", icon: Award },
  { title: "Cashless Insurance", desc: "30+ partners, zero paperwork hassle", icon: ShieldCheck },
  { title: "15+ Specialities", desc: "Complete care under one roof", icon: Activity },
];

export default function Home() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 gradient-dark" />
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 60% 40%, hsl(185 80% 38% / 0.6) 0%, transparent 60%)" }}
        />
        {/* Decorative grid */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(hsl(185 80% 60%) 1px, transparent 1px), linear-gradient(90deg, hsl(185 80% 60%) 1px, transparent 1px)", backgroundSize: "60px 60px" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/8 border border-white/12 text-white/80 text-xs font-medium mb-8">
                <HeartPulse size={13} className="text-primary" />
                Trusted Healthcare — Sangamner, Maharashtra
              </div>

              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-6">
                Trusted Name in
                <br />
                <span className="text-gradient">Healthcare</span>
                <br />
                Since 14+ Years
              </h1>

              <p className="text-white/60 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
                Cashless mediclaim with 30+ insurance partners. Quick appointments, affordable treatment, timely solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/services">
                  <Button size="lg" className="gradient-primary text-white font-semibold rounded-full px-8 h-12 text-base shadow-lg hover:opacity-90 transition-opacity w-full sm:w-auto">
                    Our Services
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-white/20 text-white bg-white/8 hover:bg-white/14 font-semibold rounded-full px-8 h-12 text-base backdrop-blur-sm w-full sm:w-auto">
                    Book Appointment
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-px h-10 bg-gradient-to-b from-white/0 to-white/30" />
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="text-center">
                  <div className="font-heading text-4xl sm:text-5xl font-extrabold text-gradient mb-1">
                    <Counter value={stat.value} />{stat.suffix}
                  </div>
                  <p className="text-sm text-muted-foreground font-medium tracking-wide">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-20 sm:py-28 gradient-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <div className="text-center p-10">
                    <div className="w-24 h-24 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6 shadow-xl">
                      <HeartPulse className="text-white" size={48} />
                    </div>
                    <p className="font-heading font-bold text-2xl text-secondary mb-2">Dr. Pradeep Kute</p>
                    <p className="text-muted-foreground text-sm">Chief Surgeon & Founder</p>
                    <p className="text-primary font-semibold text-sm mt-1">14+ Years of Excellence</p>
                  </div>
                </div>
                {/* Floating card */}
                <motion.div
                  className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-border max-w-[200px]"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-1 mb-2">
                    {[1,2,3,4,5].map(n => <Star key={n} size={14} className="fill-amber-400 text-amber-400" />)}
                  </div>
                  <p className="text-xs font-semibold text-secondary leading-snug">
                    "World-class care, every patient, every time."
                  </p>
                </motion.div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.1}>
              <div>
                <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">About Our Hospital</p>
                <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-secondary leading-tight mb-6">
                  Committed to Excellence in Healthcare
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Kute Hospital & Laparoscopy Centre provides world-class healthcare with a patient-centered approach — combining advanced medical technologies with genuine compassion.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Patient-first compassionate care",
                    "Advanced surgical & diagnostic technologies",
                    "Expert team across 15+ specialities",
                    "Affordable, transparent pricing"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground/80">
                      <CheckCircle2 size={20} className="text-primary shrink-0" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/about">
                  <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-accent font-semibold px-6">
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Our Departments</p>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-secondary">
              Complete Care Under One Roof
            </h2>
            <p className="text-muted-foreground text-lg mt-4">
              From emergency care to complex surgeries — 15+ specialities under one roof.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {specialities.map((item, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="group p-6 rounded-2xl border border-border bg-white hover:border-primary/30 hover:shadow-lg transition-all duration-300 card-hover">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="text-white" size={22} />
                  </div>
                  <h3 className="font-heading font-bold text-secondary mb-1.5">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="text-center">
            <Link href="/services">
              <Button className="gradient-primary text-white font-semibold rounded-full px-8 h-11 shadow-sm hover:opacity-90">
                View All 15+ Specialities <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 sm:py-28 gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(hsl(185 80% 60%) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Why Choose Us</p>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-white">
              Healthcare You Can Trust
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyUs.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-6 rounded-2xl bg-white/6 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                    <item.icon className="text-primary" size={22} />
                  </div>
                  <h3 className="font-heading font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="gradient-primary rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: "radial-gradient(circle at 20% 80%, white 0%, transparent 50%), radial-gradient(circle at 80% 20%, white 0%, transparent 50%)" }}
              />
              <div className="relative">
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mb-3">
                  Ready to Get Care?
                </h2>
                <p className="text-white/80 text-lg mb-8 max-w-md mx-auto">
                  Book an appointment today — we'll confirm within the hour.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/contact">
                    <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold rounded-full px-8 h-12 shadow-lg w-full sm:w-auto">
                      Book Appointment
                    </Button>
                  </Link>
                  <a href="tel:+918888882225">
                    <Button size="lg" variant="outline" className="border-white/30 text-white bg-white/10 hover:bg-white/20 font-semibold rounded-full px-8 h-12 w-full sm:w-auto">
                      <Phone size={16} className="mr-2" /> Call Now
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
