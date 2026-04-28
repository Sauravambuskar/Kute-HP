import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import kuteLogo from '../assets/kute-hospital-logo.png';
import './Navbar.css';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { 
    name: 'Services', 
    href: '/services',
    submenu: [
      { name: 'Emergency', href: '/services/emergency-department' },
      { name: 'Laparoscopy', href: '/services/laparoscopic-surgery' },
      { name: 'Plastic Surgery', href: '/services/plastic-surgery' },
      { name: 'Cancer Surgery', href: '/services/cancer-surgery' },
      { name: 'Orthopaedic', href: '/services/orthopaedic-trauma' },
      { name: 'Cardiology', href: '/services/cardiology' },
    ]
  },
  { name: 'Doctors', href: '/doctor' },
  { name: 'Patients', href: '/patients' }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -150, x: '-50%' }}
      animate={{ y: 0, x: '-50%' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container nav-container">
        <Link to="/" className="logo">
          <img src={kuteLogo} alt="Kute Hospital" className="nav-logo-img" />
        </Link>

        <nav className="desktop-nav">
          <ul>
            {navLinks.map((link) => (
              <li 
                key={link.name} 
                className="nav-item"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  to={link.href}
                  className={location.pathname === link.href || (location.pathname.startsWith(link.href) && link.href !== '/') ? 'active-link' : ''}
                >
                  {link.name} {link.submenu && <ChevronDown size={14} className="dropdown-icon" />}
                </Link>

                {link.submenu && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div 
                        className="submenu-dropdown"
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ul>
                          {link.submenu.map((subItem) => (
                            <li key={subItem.name}>
                              <Link 
                                to={subItem.href}
                                className={location.pathname === subItem.href ? 'active-sublink' : ''}
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions desktop-only">
          <a href="tel:+918888882225" className="emergency-btn">
            <Phone size={18} />
            <span>Emergency: +91 8888882225</span>
          </a>
        </div>

        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.href} onClick={() => setMobileOpen(false)} className="mobile-main-link">{link.name}</Link>
              {link.submenu && (
                <ul className="mobile-submenu">
                  {link.submenu.map(subItem => (
                    <li key={subItem.name}>
                      <Link to={subItem.href} onClick={() => setMobileOpen(false)} className="mobile-sub-link">
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li>
             <a href="tel:+918888882225" className="mobile-emergency">Emergency: +91 8888882225</a>
          </li>
        </ul>
      </div>
    </motion.header>
  );
};

export default Navbar;
