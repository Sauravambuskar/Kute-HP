import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight, HeartPulse, Activity, ShieldCheck, ArrowRight, CheckCircle2, Phone, Mail, MapPin, Clock, Plus } from "lucide-react";
import { Counter } from "@/components/counter";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const appointmentSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  department: z.string().min(1, "Please select a department"),
  message: z.string().optional(),
});

type AppointmentFormValues = z.infer<typeof appointmentSchema>;

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const { toast } = useToast();
  const form = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      name: "",
      phone: "",
      department: "",
      message: "",
    },
  });

  const onSubmit = (data: AppointmentFormValues) => {
    toast({
      title: "Appointment Requested",
      description: "We will contact you shortly to confirm your appointment.",
    });
    form.reset();
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const specialities = [
    { name: "Critical Care", desc: "Advanced 24/7 intensive care units" },
    { name: "Minimally Invasive", desc: "Advanced surgical techniques" },
    { name: "Oncology", desc: "Comprehensive cancer treatment" },
    { name: "Laparoscopy", desc: "Keyhole surgical procedures" },
    { name: "General Surgery", desc: "Routine to complex operations" },
    { name: "Orthopedics", desc: "Bone, joint & spine care" },
    { name: "Gynecology", desc: "Women's health & maternity" },
    { name: "Urology", desc: "Urinary tract treatments" },
    { name: "Gastroenterology", desc: "Digestive system care" },
    { name: "Cardiology", desc: "Advanced heart care" },
    { name: "Neurology", desc: "Brain & nervous system" },
    { name: "Pediatrics", desc: "Specialized childcare" },
    { name: "ENT", desc: "Ear, nose & throat care" },
    { name: "Dermatology", desc: "Skin, hair & nail care" },
    { name: "Physiotherapy", desc: "Rehabilitation services" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-[100dvh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hospital-hero.png" 
            alt="Kute Hospital Exterior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/30"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-3xl text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground text-sm font-medium mb-6">
                <HeartPulse size={16} /> <span>Trusted Healthcare Anchor</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-heading font-extrabold leading-tight mb-6">
                Trusted Name in Healthcare Since <span className="text-primary">14+ Years</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-medium">
                Cashless mediclaim with 30+ insurance partners. Quick appointments, affordable treatment, timely solutions. Compassion meets surgical precision.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => scrollTo('services')} size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-8 h-14 rounded-full text-lg shadow-lg hover:shadow-xl transition-all">
                  Our Services
                </Button>
                <Button onClick={() => scrollTo('insurance')} variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-white/30 font-bold px-8 h-14 rounded-full text-lg backdrop-blur-sm">
                  Cashless Mediclaim
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary py-12 relative z-20 -mt-10 mx-4 md:mx-10 rounded-2xl shadow-2xl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/20">
            {[
              { num: 14, suffix: "+", label: "YEARS EXPERIENCE" },
              { num: 10000, suffix: "+", label: "PATIENTS TREATED" },
              { num: 24, suffix: "/7", label: "EMERGENCY CARE" },
              { num: 30, suffix: "+", label: "INSURANCE PARTNERS" },
            ].map((stat, i) => (
              <div key={i} className="text-center px-4">
                <div className="text-3xl md:text-5xl font-heading font-extrabold text-white mb-2 flex items-center justify-center">
                  <Counter value={stat.num} /><span className="text-white/80">{stat.suffix}</span>
                </div>
                <div className="text-xs md:text-sm font-bold text-white/90 tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative">
                <div className="absolute -inset-4 bg-gray-100 rounded-3xl transform -rotate-3 z-0"></div>
                <img 
                  src="/images/doctor-portrait.png" 
                  alt="Dr. Pradeep Kute" 
                  className="relative z-10 rounded-2xl shadow-xl w-full object-cover aspect-[3/4]"
                />
                <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[240px]">
                  <div className="flex gap-2 text-primary mb-2">
                    {[1, 2, 3, 4, 5].map(i => <HeartPulse key={i} size={20} className="fill-current" />)}
                  </div>
                  <p className="font-heading font-bold text-lg leading-tight text-secondary">
                    "Every patient deserves world-class care."
                  </p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="text-primary font-bold tracking-wider text-sm uppercase mb-4">About Our Hospital</div>
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-secondary mb-6 leading-tight">
                Committed to Excellence in Healthcare
              </h2>
              <div className="space-y-6 text-gray-600 text-lg">
                <p>
                  Kute Hospital & Laparoscopy Centre is dedicated to providing world-class healthcare with a patient-centered approach. We combine advanced medical technologies with compassionate care.
                </p>
                <p>
                  Led by <strong>Dr. Pradeep Kute</strong>, bringing over 14+ years of surgical expertise, our institution stands as a pillar of trust in Sangamner for complex procedures and everyday wellness alike.
                </p>
                <ul className="space-y-3 mt-8">
                  {[
                    "Patient-first compassionate approach",
                    "Advanced surgical & medical technologies",
                    "Experienced team of specialist doctors",
                    "Affordable & transparent pricing"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="text-primary flex-shrink-0" size={24} />
                      <span className="font-medium text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <div className="text-primary font-bold tracking-wider text-sm uppercase mb-4">Our Departments</div>
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-secondary mb-6">
                Complete Care Under One Roof
              </h2>
              <p className="text-lg text-gray-600">
                A comprehensive range of medical specialities equipped with modern technology and staffed by expert professionals.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {specialities.map((service, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors mb-4">
                    <Activity size={24} />
                  </div>
                  <h3 className="font-heading font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Insurance */}
      <section id="insurance" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-secondary mb-10">
                Why Choose Us?
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "24/7 Emergency Care", desc: "Always ready when you need us most" },
                  { title: "30+ Insurance Partners", desc: "Cashless facilities available" },
                  { title: "15+ Specialities", desc: "Comprehensive healthcare" },
                  { title: "10,000+ Patients", desc: "Trusted by the community" },
                  { title: "98% Satisfaction", desc: "Patient-first approach" },
                  { title: "<5 Min Response Time", desc: "Quick emergency response" }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 text-primary">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary">{feature.title}</h4>
                      <p className="text-sm text-gray-500 mt-1">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="bg-secondary text-white p-8 md:p-12 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <ShieldCheck size={200} />
              </div>
              <div className="relative z-10">
                <div className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-6">
                  CASHLESS FACILITIES
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-6">
                  Cashless Insurance Accepted
                </h2>
                <p className="text-gray-300 mb-8 text-lg">
                  We aim to make your healing process stress-free with our comprehensive insurance tie-ups and zero paperwork hassle.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="text-3xl font-heading font-bold text-primary mb-1">30+</div>
                    <div className="text-sm font-medium text-gray-400 uppercase tracking-wide">Partners</div>
                  </div>
                  <div>
                    <div className="text-3xl font-heading font-bold text-primary mb-1">15+</div>
                    <div className="text-sm font-medium text-gray-400 uppercase tracking-wide">TPA Partners</div>
                  </div>
                  <div>
                    <div className="text-3xl font-heading font-bold text-primary mb-1">₹5L</div>
                    <div className="text-sm font-medium text-gray-400 uppercase tracking-wide">Govt Coverage</div>
                  </div>
                  <div>
                    <div className="text-3xl font-heading font-bold text-primary mb-1">Zero</div>
                    <div className="text-sm font-medium text-gray-400 uppercase tracking-wide">Paperwork</div>
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <h4 className="font-bold text-white mb-3">Government Schemes Accepted:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Ayushman Bharat", "Mahatma Phule Jan Arogya Yojana", "ESI", "CGHS"].map(scheme => (
                      <span key={scheme} className="bg-white/20 text-xs font-semibold px-3 py-1.5 rounded-full">
                        {scheme}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section id="appointment" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-5">
              <div className="lg:col-span-2 bg-secondary p-10 md:p-12 text-white flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-heading font-extrabold mb-4">Get in Touch</h3>
                  <p className="text-gray-400 mb-10">
                    Need medical assistance? Reach out to us for quick support and appointment booking.
                  </p>

                  <div className="space-y-8">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                        <Phone size={24} />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 font-medium mb-1">Emergency / Ambulance</div>
                        <div className="font-heading font-bold text-xl">+91 8888372225</div>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                        <Phone size={24} />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 font-medium mb-1">Medical Helpline</div>
                        <div className="font-heading font-bold text-xl">+91 8888732225</div>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                        <Phone size={24} />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 font-medium mb-1">General Enquiry</div>
                        <div className="font-heading font-bold text-xl">+91 8888882225</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-3 p-10 md:p-12">
                <h3 className="text-3xl font-heading font-extrabold text-secondary mb-2">Book an Appointment</h3>
                <p className="text-gray-500 mb-8">Fill out the form below and we will confirm your appointment soon.</p>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-secondary font-bold">Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" className="h-12 bg-gray-50" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-secondary font-bold">Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="+91 9876543210" className="h-12 bg-gray-50" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="department"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-secondary font-bold">Department</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12 bg-gray-50">
                                <SelectValue placeholder="Select a department" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {specialities.map((spec) => (
                                <SelectItem key={spec.name} value={spec.name}>{spec.name}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-secondary font-bold">Additional Message (Optional)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Briefly describe your symptoms or reason for visit" 
                              className="min-h-[120px] bg-gray-50 resize-none" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-14 text-lg rounded-xl">
                      Submit Request <ArrowRight className="ml-2" size={20} />
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-secondary text-white pt-20 pb-10 border-t-8 border-primary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-primary text-white p-1.5 rounded flex items-center justify-center">
                  <Plus size={24} strokeWidth={3} />
                </div>
                <span className="font-heading font-extrabold text-2xl tracking-tight">Kute Hospital</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Trusted healthcare anchor of Sangamner, providing world-class medical facilities with compassion and surgical precision.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-heading font-bold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-4">
                {['Home', 'About Us', 'Our Services', 'Insurance', 'Book Appointment'].map((link) => (
                  <li key={link}>
                    <button 
                      onClick={() => scrollTo(link.toLowerCase().replace(' ', '-'))}
                      className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"
                    >
                      <ChevronRight size={16} /> {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-heading font-bold mb-6 text-white">Contact Info</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex gap-3">
                  <MapPin className="text-primary shrink-0 mt-1" size={20} />
                  <span>Kute Hospital & Laparoscopy Centre, Sangamner, Ahmednagar, Maharashtra</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="text-primary shrink-0" size={20} />
                  <span>support@kutehospital.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-primary shrink-0" size={20} />
                  <span>+91 8888882225</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-heading font-bold mb-6 text-white">Working Hours</h4>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <ul className="space-y-3">
                  <li className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-gray-400">Mon - Friday</span>
                    <span className="font-semibold text-white">08:00 AM - 09:00 PM</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-white/10 pb-3 pt-1">
                    <span className="text-gray-400">Saturday</span>
                    <span className="font-semibold text-white">08:00 AM - 05:00 PM</span>
                  </li>
                  <li className="flex justify-between items-center pt-1">
                    <span className="text-gray-400">Emergency</span>
                    <span className="font-bold text-primary">24 / 7</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Kute Hospital & Laparoscopy Centre. All rights reserved.
            </p>
            <div className="flex gap-4">
              {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-current" style={{ maskImage: `url(https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/${social.toLowerCase()}.svg)`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center' }} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
