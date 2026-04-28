import { Link } from "wouter";
import { FadeIn, PageTransition } from "@/components/fade-in";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Award, Users, HeartPulse, Microscope, ArrowRight, Star, Shield } from "lucide-react";

const milestones = [
  { year: "2011", title: "Hospital Founded", desc: "Kute Hospital & Laparoscopy Centre opens in Sangamner." },
  { year: "2014", title: "Laparoscopy Centre", desc: "Dedicated laparoscopy unit added with state-of-the-art equipment." },
  { year: "2017", title: "10+ Specialities", desc: "Expanded to cover more than 10 medical departments." },
  { year: "2019", title: "Insurance Empanelment", desc: "Empanelled with 20+ insurance companies for cashless treatment." },
  { year: "2022", title: "5,000+ Surgeries", desc: "Milestone of over 5,000 successful surgical procedures." },
  { year: "2025", title: "30+ Partners Today", desc: "Growing network of 30+ insurance & government scheme partners." },
];

const values = [
  { icon: HeartPulse, title: "Compassionate Care", desc: "We treat every patient with the dignity and warmth they deserve." },
  { icon: Microscope, title: "Advanced Technology", desc: "State-of-the-art equipment for accurate diagnosis and treatment." },
  { icon: Shield, title: "Safety First", desc: "Stringent protocols and quality checks for patient safety." },
  { icon: Star, title: "Excellence", desc: "Committed to world-class standards in every procedure we perform." },
];

export default function About() {
  return (
    <PageTransition>
      {/* Page Hero */}
      <section className="relative py-20 sm:py-28 gradient-dark overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(hsl(185 80% 60%) 1px, transparent 1px), linear-gradient(90deg, hsl(185 80% 60%) 1px, transparent 1px)", backgroundSize: "60px 60px" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">About Us</p>
            <h1 className="font-heading text-5xl sm:text-6xl font-extrabold text-white leading-tight mb-5">
              About <span className="text-gradient">Kute Hospital</span><br />& Laparoscopy Centre
            </h1>
            <p className="text-white/55 text-xl max-w-2xl mx-auto">
              Trusted healthcare in Sangamner — committed to excellence, compassion and world-class treatment for every patient.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div className="relative">
                <div className="aspect-square rounded-3xl gradient-light flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20"
                    style={{ backgroundImage: "radial-gradient(circle at 30% 70%, hsl(185 80% 38% / 0.4), transparent 60%)" }}
                  />
                  <div className="text-center p-10 relative">
                    <div className="w-28 h-28 rounded-3xl gradient-primary flex items-center justify-center mx-auto mb-6 shadow-2xl">
                      <Award className="text-white" size={56} />
                    </div>
                    <p className="font-heading font-extrabold text-3xl text-secondary mb-1">Dr. Pradeep Kute</p>
                    <p className="text-muted-foreground font-medium">MS (Surgery) — Chief Surgeon & Founder</p>
                    <div className="flex items-center justify-center gap-1 mt-3">
                      {[1,2,3,4,5].map(n => <Star key={n} size={16} className="fill-amber-400 text-amber-400" />)}
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">14+ Years Surgical Expertise</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.1}>
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Who We Are</p>
              <h2 className="font-heading text-4xl font-extrabold text-secondary leading-tight mb-6">
                Committed to Excellence in Healthcare
              </h2>
              <div className="space-y-4 text-muted-foreground text-base leading-relaxed mb-8">
                <p>
                  At Kute Hospital & Laparoscopy Centre, we are dedicated to providing world-class healthcare services. With a commitment to excellence and a focus on patient-centered care, we strive to be the leading healthcare destination in Sangamner.
                </p>
                <p>
                  Our hospital is fully equipped with advanced medical technologies and a team of skilled professionals across multiple specialities — all working together to deliver the best possible outcomes for every patient.
                </p>
                <p>
                  Led by <strong className="text-secondary">Dr. Pradeep Kute</strong>, our institution has grown into a trusted pillar of the community — performing complex procedures with precision and offering everyday wellness with warmth.
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Patient-first compassionate approach",
                  "Advanced surgical & medical technologies",
                  "Experienced team of specialist doctors",
                  "Affordable & transparent pricing",
                  "30+ cashless insurance partners"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground/80">
                    <CheckCircle2 size={19} className="text-primary shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <Button className="gradient-primary text-white font-semibold rounded-full px-7 h-11 shadow-sm hover:opacity-90">
                  Book Appointment <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 sm:py-24 gradient-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-center max-w-xl mx-auto mb-14">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Our Values</p>
            <h2 className="font-heading text-4xl font-extrabold text-secondary">What We Stand For</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6 border border-border card-hover h-full">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                    <val.icon className="text-white" size={22} />
                  </div>
                  <h3 className="font-heading font-bold text-secondary mb-2">{val.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{val.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-center mb-14">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Our Journey</p>
            <h2 className="font-heading text-4xl font-extrabold text-secondary">14+ Years of Growth</h2>
          </FadeIn>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-0.5 top-0 bottom-0 w-px bg-border hidden md:block" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <FadeIn key={i} delay={i * 0.07} direction={i % 2 === 0 ? "left" : "right"}>
                  <div className={`flex items-start gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className={`bg-white border border-border rounded-2xl p-5 shadow-sm card-hover inline-block w-full md:max-w-xs ${i % 2 === 0 ? "md:ml-auto" : ""}`}>
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">{m.year}</span>
                        <h4 className="font-heading font-bold text-secondary mt-1 mb-1">{m.title}</h4>
                        <p className="text-sm text-muted-foreground">{m.desc}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex w-5 h-5 rounded-full gradient-primary border-4 border-white shadow-md shrink-0 mt-4 z-10" />
                    <div className="flex-1 hidden md:block" />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-dark">
        <FadeIn className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-white/55 text-lg mb-8">
            Join 10,000+ patients who trust Kute Hospital for their healthcare needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact">
              <Button className="gradient-primary text-white font-semibold rounded-full px-8 h-12 hover:opacity-90 w-full sm:w-auto">
                Book Appointment
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" className="border-white/20 text-white bg-white/8 hover:bg-white/14 font-semibold rounded-full px-8 h-12 w-full sm:w-auto">
                View Services
              </Button>
            </Link>
          </div>
        </FadeIn>
      </section>
    </PageTransition>
  );
}
