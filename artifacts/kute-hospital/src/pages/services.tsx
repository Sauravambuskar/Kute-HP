import { Link } from "wouter";
import { FadeIn, PageTransition } from "@/components/fade-in";
import { Button } from "@/components/ui/button";
import { Counter } from "@/components/counter";
import {
  HeartPulse, Activity, Shield, Users, Brain, Bone, Baby, Eye, Ear, Microscope,
  Zap, Stethoscope, Syringe, FlaskConical, Dumbbell, ArrowRight, Phone
} from "lucide-react";

const specialities = [
  { name: "Critical Care", icon: HeartPulse, desc: "Advanced 24/7 intensive care with experienced critical care specialists and modern monitoring systems.", tag: "Emergency" },
  { name: "Minimally Invasive Surgery", icon: Microscope, desc: "Cutting-edge laparoscopic techniques for shorter recovery times and minimal scarring.", tag: "Surgery" },
  { name: "Oncology", icon: Shield, desc: "Comprehensive cancer diagnosis, treatment and care including surgical and medical oncology.", tag: "Cancer Care" },
  { name: "Laparoscopy", icon: Zap, desc: "Specialized keyhole procedures for abdominal and pelvic conditions by expert laparoscopic surgeons.", tag: "Surgery" },
  { name: "General Surgery", icon: Stethoscope, desc: "A wide range of surgical procedures — from routine to complex abdominal surgeries.", tag: "Surgery" },
  { name: "Orthopedics", icon: Bone, desc: "Comprehensive bone, joint, and spine care including joint replacements and sports injuries.", tag: "Orthopedic" },
  { name: "Gynecology", icon: Users, desc: "Complete women's health services including maternity, gynecological surgery, and reproductive care.", tag: "Women's Health" },
  { name: "Urology", icon: Activity, desc: "Expert diagnosis and treatment of urinary tract and male reproductive system conditions.", tag: "Urology" },
  { name: "Gastroenterology", icon: FlaskConical, desc: "Specialized care for digestive system disorders including endoscopy and liver diseases.", tag: "Digestive" },
  { name: "Cardiology", icon: HeartPulse, desc: "Advanced heart diagnostics and treatment including ECG, echocardiography and cardiac care.", tag: "Heart Care" },
  { name: "Neurology", icon: Brain, desc: "Expert management of brain and nervous system conditions with advanced neurological care.", tag: "Neurology" },
  { name: "Pediatrics", icon: Baby, desc: "Specialized healthcare for infants, children and adolescents by dedicated pediatric specialists.", tag: "Child Care" },
  { name: "ENT", icon: Ear, desc: "Comprehensive ear, nose and throat care — from routine checkups to complex ENT surgeries.", tag: "ENT" },
  { name: "Dermatology", icon: Eye, desc: "Expert treatment of skin, hair and nail conditions including cosmetic and medical dermatology.", tag: "Skin Care" },
  { name: "Physiotherapy", icon: Dumbbell, desc: "Evidence-based rehabilitation programs to restore movement, function and quality of life.", tag: "Rehab" },
];

const stats = [
  { value: 15, suffix: "+", label: "Medical Specialities" },
  { value: 10000, suffix: "+", label: "Patients Treated" },
  { value: 24, suffix: "/7", label: "Emergency Care" },
  { value: 98, suffix: "%", label: "Satisfaction Rate" },
  { value: 14, suffix: "+", label: "Years Experience" },
  { value: 30, suffix: "+", label: "Insurance Partners" },
];

const tagColors: Record<string, string> = {
  "Emergency": "bg-rose-50 text-rose-600",
  "Surgery": "bg-violet-50 text-violet-600",
  "Cancer Care": "bg-amber-50 text-amber-600",
  "Orthopedic": "bg-blue-50 text-blue-600",
  "Women's Health": "bg-pink-50 text-pink-600",
  "Heart Care": "bg-red-50 text-red-600",
  "Neurology": "bg-indigo-50 text-indigo-600",
  "Child Care": "bg-green-50 text-green-600",
};

export default function Services() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative py-20 sm:py-28 gradient-dark overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(hsl(185 80% 60%) 1px, transparent 1px), linear-gradient(90deg, hsl(185 80% 60%) 1px, transparent 1px)", backgroundSize: "60px 60px" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Our Services</p>
            <h1 className="font-heading text-5xl sm:text-6xl font-extrabold text-white leading-tight mb-5">
              Our <span className="text-gradient">Medical</span> Services
            </h1>
            <p className="text-white/55 text-xl max-w-2xl mx-auto">
              World-class treatment across 15+ specialities — led by Dr. Pradeep Kute with 14+ years of surgical expertise.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Stats Row */}
      <section className="py-12 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="text-center">
                  <div className="font-heading text-3xl font-extrabold text-gradient">
                    <Counter value={stat.value} />{stat.suffix}
                  </div>
                  <p className="text-xs text-muted-foreground font-medium mt-1 tracking-wide">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Specialities Grid */}
      <section className="py-20 sm:py-28 gradient-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">All Departments</p>
            <h2 className="font-heading text-4xl font-extrabold text-secondary mb-4">
              All Medical Specialities
            </h2>
            <p className="text-muted-foreground">
              From emergency care to complex super-speciality surgeries — Kute Hospital covers every aspect of your health.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {specialities.map((item, i) => (
              <FadeIn key={i} delay={(i % 6) * 0.07}>
                <div className="group bg-white rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 card-hover h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="text-white" size={22} />
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tagColors[item.tag] || "bg-accent text-primary"}`}>
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <FadeIn direction="left">
              <div>
                <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Emergency Services</p>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mb-3">
                  24/7 Emergency Care — Always Ready
                </h2>
                <p className="text-white/55 text-lg max-w-xl">
                  Our emergency unit is staffed round-the-clock with less than 5 minutes response time. Call our ambulance service anytime.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.1} className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a href="tel:+918888372225">
                <Button size="lg" className="gradient-primary text-white font-bold rounded-full px-8 h-12 hover:opacity-90 w-full sm:w-auto">
                  <Phone size={18} className="mr-2" /> Ambulance: +91 8888372225
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white/20 text-white bg-white/8 hover:bg-white/14 font-semibold rounded-full px-8 h-12 w-full sm:w-auto">
                  Book Appointment <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
