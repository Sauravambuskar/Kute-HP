import { Link } from "wouter";
import { FadeIn, PageTransition } from "@/components/fade-in";
import { Button } from "@/components/ui/button";
import { ShieldCheck, CheckCircle2, ArrowRight, Phone, FileCheck, Clock, BadgeCheck } from "lucide-react";

const govSchemes = [
  { name: "Ayushman Bharat (PM-JAY)", desc: "National health scheme offering up to ₹5L coverage per family per year.", coverage: "Up to ₹5 Lakh" },
  { name: "Mahatma Phule Jan Arogya Yojana", desc: "Maharashtra government scheme for below poverty line families.", coverage: "Up to ₹1.5 Lakh" },
  { name: "ESI (Employees' State Insurance)", desc: "Insurance for organized sector employees and their dependents.", coverage: "Full Coverage" },
  { name: "CGHS (Central Govt. Health Scheme)", desc: "Health coverage for central government employees and pensioners.", coverage: "As per scheme" },
];

const tpaPartners = [
  "Medi Assist", "Vipul Medcorp", "Health India TPA", "Paramount TPA",
  "Raksha TPA", "Genins India", "MD India", "Family Health Plan",
  "TTK Healthcare", "East West TPA", "Ericson TPA", "Heritage Health",
  "Anmol Medicare", "Star Health", "Heritage TPA",
];

const privateInsurers = [
  "Star Health Insurance", "HDFC Ergo Health", "New India Assurance",
  "United India Insurance", "National Insurance", "Oriental Insurance",
  "ICICI Lombard", "Bajaj Allianz Health", "Reliance Health",
  "SBI Health Insurance", "Care Health Insurance", "Aditya Birla Health",
  "Niva Bupa", "ManipalCigna", "TATA AIG Health",
];

const processSteps = [
  { step: "01", title: "Admission", desc: "Present your insurance card at our 24/7 insurance desk at admission." },
  { step: "02", title: "Verification", desc: "Our insurance team verifies your policy and pre-authorization in real-time." },
  { step: "03", title: "Treatment", desc: "Receive complete treatment — we handle all paperwork on your behalf." },
  { step: "04", title: "Discharge", desc: "Discharge with zero out-of-pocket for covered procedures. Pure and simple." },
];

const highlights = [
  { value: "30+", label: "Insurance Partners", icon: ShieldCheck },
  { value: "₹5L", label: "Max Govt. Coverage", icon: BadgeCheck },
  { value: "100%", label: "Cashless Process", icon: FileCheck },
  { value: "24/7", label: "Insurance Desk", icon: Clock },
  { value: "4", label: "Govt. Schemes", icon: CheckCircle2 },
  { value: "Zero", label: "Paperwork Hassle", icon: CheckCircle2 },
];

export default function Insurance() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative py-20 sm:py-28 gradient-dark overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(hsl(185 80% 60%) 1px, transparent 1px), linear-gradient(90deg, hsl(185 80% 60%) 1px, transparent 1px)", backgroundSize: "60px 60px" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/8 border border-white/12 text-white/80 text-xs font-medium mb-6">
              <ShieldCheck size={13} className="text-primary" /> Cashless Insurance Accepted
            </div>
            <h1 className="font-heading text-5xl sm:text-6xl font-extrabold text-white leading-tight mb-5">
              Insurance Providers &<br /><span className="text-gradient">Government Schemes</span>
            </h1>
            <p className="text-white/55 text-xl max-w-2xl mx-auto">
              Kute Hospital accepts 30+ insurance companies, all major TPAs and all key government health schemes — so you can focus on recovery, not paperwork.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-14 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {highlights.map((h, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="text-center">
                  <div className="font-heading text-3xl font-extrabold text-gradient mb-1">{h.value}</div>
                  <p className="text-xs text-muted-foreground font-medium tracking-wide">{h.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 sm:py-24 gradient-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-center max-w-xl mx-auto mb-14">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Cashless Process</p>
            <h2 className="font-heading text-4xl font-extrabold text-secondary">How Cashless Works</h2>
            <p className="text-muted-foreground mt-3">Four simple steps — zero hassle.</p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-border card-hover h-full relative overflow-hidden">
                  <div className="absolute top-4 right-4 font-heading font-extrabold text-5xl text-border/50 select-none">
                    {step.step}
                  </div>
                  <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center mb-4 relative z-10">
                    <CheckCircle2 className="text-white" size={22} />
                  </div>
                  <h3 className="font-heading font-bold text-secondary mb-2 relative z-10">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed relative z-10">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Government Schemes */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Empanelled</p>
            <h2 className="font-heading text-4xl font-extrabold text-secondary">Government Health Schemes</h2>
            <p className="text-muted-foreground mt-3">
              We are empanelled under all major government health schemes for cashless treatment.
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-5">
            {govSchemes.map((scheme, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl border border-border p-6 card-hover flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                    <ShieldCheck className="text-white" size={22} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-heading font-bold text-secondary">{scheme.name}</h3>
                      <span className="bg-accent text-primary text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap shrink-0">
                        {scheme.coverage}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{scheme.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TPA Partners */}
      <section className="py-20 sm:py-24 gradient-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Network Partners</p>
            <h2 className="font-heading text-4xl font-extrabold text-secondary mb-4">TPA & Insurance Partners</h2>
            <p className="text-muted-foreground">15+ Third Party Administrators and 15+ private insurers accepted.</p>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12">
            <FadeIn direction="left">
              <h3 className="font-heading font-bold text-secondary text-xl mb-5 flex items-center gap-2">
                <BadgeCheck size={22} className="text-primary" /> TPA Partners (15+)
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {tpaPartners.map((tpa, i) => (
                  <span key={i} className="bg-white border border-border text-sm font-medium text-foreground/80 px-3.5 py-1.5 rounded-full hover:border-primary/40 hover:text-primary transition-colors">
                    {tpa}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.1}>
              <h3 className="font-heading font-bold text-secondary text-xl mb-5 flex items-center gap-2">
                <ShieldCheck size={22} className="text-primary" /> Private Insurers (15+)
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {privateInsurers.map((ins, i) => (
                  <span key={i} className="bg-white border border-border text-sm font-medium text-foreground/80 px-3.5 py-1.5 rounded-full hover:border-primary/40 hover:text-primary transition-colors">
                    {ins}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-dark">
        <FadeIn className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Have Questions About Your Coverage?
          </h2>
          <p className="text-white/55 text-lg mb-8">
            Our insurance desk is available 24/7 to help you understand your benefits.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+918888882225">
              <Button size="lg" className="gradient-primary text-white font-bold rounded-full px-8 h-12 hover:opacity-90 w-full sm:w-auto">
                <Phone size={18} className="mr-2" /> Call Insurance Desk
              </Button>
            </a>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white/20 text-white bg-white/8 hover:bg-white/14 font-semibold rounded-full px-8 h-12 w-full sm:w-auto">
                Book Appointment <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </FadeIn>
      </section>
    </PageTransition>
  );
}
