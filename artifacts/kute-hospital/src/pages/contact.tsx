import { FadeIn, PageTransition } from "@/components/fade-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Phone, Mail, MapPin, Clock, ArrowRight, Ambulance } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Enter a valid phone number"),
  department: z.string().min(1, "Please select a department"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const departments = [
  "Critical Care", "Minimally Invasive Surgery", "Oncology", "Laparoscopy",
  "General Surgery", "Orthopedics", "Gynecology", "Urology",
  "Gastroenterology", "Cardiology", "Neurology", "Pediatrics",
  "ENT", "Dermatology", "Physiotherapy",
];

const contactCards = [
  { label: "General Enquiry", value: "+91 8888882225", icon: Phone, href: "tel:+918888882225", sub: "Mon–Fri, 8am–9pm" },
  { label: "Medical Helpline", value: "+91 8888732225", icon: Phone, href: "tel:+918888732225", sub: "Expert advice available" },
  { label: "Ambulance Service", value: "+91 8888372225", icon: Ambulance, href: "tel:+918888372225", sub: "24/7 Emergency" },
  { label: "Email Us", value: "support@kutehospital.com", icon: Mail, href: "mailto:support@kutehospital.com", sub: "Reply within 24 hours" },
];

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", department: "", message: "" },
  });

  const onSubmit = (_data: FormValues) => {
    toast({
      title: "Appointment Requested",
      description: "Our team will contact you shortly to confirm your appointment.",
    });
    form.reset();
  };

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative py-20 sm:py-28 gradient-dark overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(hsl(185 80% 60%) 1px, transparent 1px), linear-gradient(90deg, hsl(185 80% 60%) 1px, transparent 1px)", backgroundSize: "60px 60px" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Contact</p>
            <h1 className="font-heading text-5xl sm:text-6xl font-extrabold text-white leading-tight mb-5">
              Get in <span className="text-gradient">Touch</span> With Us
            </h1>
            <p className="text-white/55 text-xl max-w-xl mx-auto">
              We are available 24/7 for emergencies, consultations and general enquiries.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-14 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactCards.map((card, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <a
                  href={card.href}
                  className="group flex items-start gap-4 p-5 rounded-2xl border border-border bg-white hover:border-primary/30 hover:shadow-lg transition-all duration-300 card-hover"
                >
                  <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <card.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-0.5">{card.label}</p>
                    <p className="font-heading font-bold text-secondary text-sm leading-snug group-hover:text-primary transition-colors">
                      {card.value}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">{card.sub}</p>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 sm:py-28 gradient-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Sidebar Info */}
            <FadeIn direction="left" className="lg:col-span-2">
              <div className="space-y-6">
                <div>
                  <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Visit Us</p>
                  <h2 className="font-heading text-3xl font-extrabold text-secondary mb-5">
                    Find Us Here
                  </h2>
                </div>

                <div className="bg-white rounded-2xl border border-border p-6 space-y-5">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                      <MapPin className="text-white" size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-0.5">Address</p>
                      <p className="font-semibold text-secondary text-sm leading-relaxed">
                        Kute Hospital & Laparoscopy Centre,<br />Sangamner, Ahmednagar,<br />Maharashtra
                      </p>
                    </div>
                  </div>

                  <div className="h-px bg-border" />

                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                      <Clock className="text-white" size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-2">Working Hours</p>
                      <div className="space-y-1.5 text-sm">
                        {[
                          { day: "Monday – Friday", hours: "8:00 AM – 9:00 PM" },
                          { day: "Saturday", hours: "8:00 AM – 5:00 PM" },
                          { day: "Emergency", hours: "24 / 7", highlight: true },
                        ].map((row, i) => (
                          <div key={i} className="flex justify-between">
                            <span className="text-muted-foreground">{row.day}</span>
                            <span className={`font-semibold ${row.highlight ? "text-primary" : "text-secondary"}`}>{row.hours}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick contacts */}
                <div className="bg-secondary rounded-2xl p-6 text-white">
                  <p className="font-heading font-bold text-lg mb-4">Quick Contacts</p>
                  <div className="space-y-4">
                    {[
                      { label: "Ambulance", number: "+91 8888372225", urgent: true },
                      { label: "Medical Helpline", number: "+91 8888732225", urgent: false },
                      { label: "General Enquiry", number: "+91 8888882225", urgent: false },
                    ].map((c, i) => (
                      <a key={i} href={`tel:${c.number.replace(/\s/g, "")}`} className="flex items-center justify-between group">
                        <span className="text-white/60 text-sm">{c.label}</span>
                        <span className={`font-semibold text-sm ${c.urgent ? "text-primary" : "text-white"} group-hover:text-primary transition-colors`}>
                          {c.number}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Appointment Form */}
            <FadeIn direction="right" delay={0.1} className="lg:col-span-3">
              <div className="bg-white rounded-3xl border border-border shadow-sm p-8 sm:p-10">
                <h3 className="font-heading text-2xl font-extrabold text-secondary mb-1.5">Book an Appointment</h3>
                <p className="text-muted-foreground text-sm mb-8">
                  Fill out the form below and we will confirm your appointment within the hour.
                </p>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-secondary font-semibold text-sm">Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your full name" className="h-11 bg-background rounded-xl" {...field} />
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
                            <FormLabel className="text-secondary font-semibold text-sm">Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="+91 98765 43210" className="h-11 bg-background rounded-xl" {...field} />
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
                          <FormLabel className="text-secondary font-semibold text-sm">Department</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-11 bg-background rounded-xl">
                                <SelectValue placeholder="Select a department" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {departments.map((dept) => (
                                <SelectItem key={dept} value={dept}>{dept}</SelectItem>
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
                          <FormLabel className="text-secondary font-semibold text-sm">Message (Optional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Briefly describe your symptoms or reason for visit..."
                              className="min-h-[110px] bg-background rounded-xl resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full gradient-primary text-white font-bold h-12 rounded-xl text-base hover:opacity-90 transition-opacity"
                    >
                      Submit Appointment Request
                      <ArrowRight size={18} className="ml-2" />
                    </Button>
                  </form>
                </Form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
