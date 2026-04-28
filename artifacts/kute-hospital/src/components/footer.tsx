import { Link } from "wouter";
import { Plus, Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Insurance", href: "/insurance" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
                <Plus className="text-white" size={20} strokeWidth={2.5} />
              </div>
              <div>
                <span className="font-heading font-bold text-lg leading-none">Kute Hospital</span>
                <p className="text-[10px] text-white/50 leading-none mt-0.5">& Laparoscopy Centre</p>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              The trusted healthcare anchor of Sangamner — where compassion meets surgical precision for 14+ years.
            </p>
            <div className="flex items-center gap-3">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Instagram, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center text-white/50 hover:bg-primary hover:text-white transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-white/40 mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-white/40 mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm leading-relaxed">
                  Kute Hospital, Sangamner, Ahmednagar, Maharashtra
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={16} className="text-primary shrink-0" />
                <a href="tel:+918888882225" className="text-white/60 hover:text-primary text-sm transition-colors">
                  +91 8888882225
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={16} className="text-primary shrink-0" />
                <a href="mailto:support@kutehospital.com" className="text-white/60 hover:text-primary text-sm transition-colors">
                  support@kutehospital.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-white/40 mb-5">
              Working Hours
            </h4>
            <div className="space-y-3">
              {[
                { day: "Monday – Friday", hours: "8:00 AM – 9:00 PM" },
                { day: "Saturday", hours: "8:00 AM – 5:00 PM" },
                { day: "Emergency", hours: "24 / 7", highlight: true },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center py-2.5 border-b border-white/8 last:border-0">
                  <span className="text-white/50 text-sm flex items-center gap-1.5">
                    <Clock size={13} className={item.highlight ? "text-primary" : ""} />
                    {item.day}
                  </span>
                  <span className={`text-sm font-semibold ${item.highlight ? "text-primary" : "text-white"}`}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} Kute Hospital & Laparoscopy Centre. All rights reserved.</p>
          <p>Sangamner, Ahmednagar, Maharashtra</p>
        </div>
      </div>
    </footer>
  );
}
