import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, ChevronDown, Calendar } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import kuteLogo from '../assets/kute-hospital-logo.png';
import { useAppointment } from '../context/AppointmentContext';
import './Navbar.css';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Services',
    href: '/services',
    submenu: [
      { name: 'Emergency Department',   href: '/services/emergency-department' },
      { name: 'Laparoscopic Surgery',   href: '/services/laparoscopic-surgery' },
      { name: 'Plastic Surgery',        href: '/services/plastic-surgery' },
      { name: 'Cancer Surgery',         href: '/services/cancer-surgery' },
      { name: 'Orthopaedic & Trauma',   href: '/services/orthopaedic-trauma' },
      { name: 'Cardiology',             href: '/services/cardiology' },
    ],
  },
  { name: 'Doctors',  href: '/doctor' },
  { name: 'Patients', href: '/patients' },
];

const Navbar = () => {
  const [scrolled,        setScrolled]        = useState(false);
  const [mobileOpen,      setMobileOpen]      = useState(false);
  const [activeDropdown,  setActiveDropdown]  = useState<string | null>(null);
  const location    = useLocation();
  const { openModal } = useAppointment();

  // ── Close mobile menu on route change ──
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // ── Body scroll-lock while mobile menu is open ──
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // ── Escape key closes everything ──
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setMobileOpen(false); setActiveDropdown(null); }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // ── Scroll listener (passive for perf) ──
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href: string) =>
    href === '/'
      ? location.pathname === '/'
      : location.pathname === href || location.pathname.startsWith(href + '/');

  return (
    <>
      <motion.header
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -72, x: '-50%', opacity: 0 }}
        animate={{ y: 0,   x: '-50%', opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="nav-container">
          {/* Logo */}
          <Link to="/" className="nav-logo">
            <img src={kuteLogo} alt="Kute Hospital" className="nav-logo-img" />
          </Link>

          {/* Desktop nav links */}
          <nav className="desktop-nav" aria-label="Main navigation">
            <ul>
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  className="nav-item"
                  onMouseEnter={() => link.submenu && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={link.href}
                    className={`nav-link ${isActive(link.href) ? 'active-link' : ''}`}
                  >
                    {link.name}
                    {link.submenu && (
                      <ChevronDown
                        size={13}
                        className={`dropdown-icon ${activeDropdown === link.name ? 'open' : ''}`}
                      />
                    )}
                  </Link>

                  {link.submenu && (
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          className="submenu-dropdown"
                          initial={{ opacity: 0, y: 8,  scale: 0.96 }}
                          animate={{ opacity: 1, y: 0,  scale: 1   }}
                          exit={{    opacity: 0, y: 8,  scale: 0.96 }}
                          transition={{ duration: 0.17 }}
                        >
                          <ul>
                            {link.submenu.map((sub) => (
                              <li key={sub.name}>
                                <Link
                                  to={sub.href}
                                  className={`submenu-link ${location.pathname === sub.href ? 'active-sublink' : ''}`}
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {sub.name}
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

          {/* Desktop CTAs */}
          <div className="nav-ctas">
            <button className="nav-book-btn" onClick={openModal}>
              <Calendar size={15} /> Book Appointment
            </button>
            <a href="tel:+918888882225" className="nav-emergency-btn" aria-label="Emergency">
              <Phone size={15} /> Emergency
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* ── Mobile backdrop ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* ── Mobile slide-down menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -16, scale: 0.97 }}
            animate={{ opacity: 1,  y: 0,   scale: 1    }}
            exit={{    opacity: 0,  y: -16, scale: 0.97 }}
            transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <ul className="mobile-nav-list">
              {navLinks.map((link) => (
                <li key={link.name} className="mobile-nav-item">
                  <Link
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`mobile-main-link ${isActive(link.href) ? 'mobile-active' : ''}`}
                  >
                    {link.name}
                  </Link>

                  {link.submenu && (
                    <ul className="mobile-submenu">
                      {link.submenu.map((sub) => (
                        <li key={sub.name}>
                          <Link
                            to={sub.href}
                            onClick={() => setMobileOpen(false)}
                            className={`mobile-sub-link ${location.pathname === sub.href ? 'mobile-sub-active' : ''}`}
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}

              {/* Mobile CTAs */}
              <li className="mobile-cta-row">
                <button
                  className="mobile-book-btn"
                  onClick={() => { setMobileOpen(false); openModal(); }}
                >
                  <Calendar size={16} /> Book Appointment
                </button>
                <a href="tel:+918888882225" className="mobile-emergency-btn">
                  <Phone size={16} /> Emergency
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
