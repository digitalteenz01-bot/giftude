import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const links = [
  { label: "Home",     to: "/" as const,        exact: true  },
  { label: "About",    to: "/about" as const,    exact: false },
  { label: "Products", to: "/products" as const, exact: false },
  { label: "Contact",  to: "/contact" as const,  exact: false },
];

interface NavProps {
  variant?: "dark" | "light";
}

const mobileMenuVariants = {
  hidden: { y: "-100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.35, ease: [0.23, 1, 0.32, 1] },
  },
  exit: {
    y: "-100%",
    opacity: 0,
    transition: { duration: 0.25, ease: [0.23, 1, 0.32, 1] },
  },
};

const mobileLinkVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1 + i * 0.08,
      duration: 0.35,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  }),
};

export function Nav({ variant = "dark" }: NavProps) {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        {/* Top accent bar */}
        <div className="h-[3px] bg-gradient-to-r from-gold via-gold-soft to-gold" />

        {/* Main nav */}
        <div className={`w-full bg-white transition-all duration-500 ${scrolled ? "shadow-md" : "shadow-sm"}`}>
          <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-3.5 lg:px-8">

            {/* Logo */}
            <Link to="/" className="group flex items-center" onClick={() => setMenuOpen(false)}>
              <img
                src={logo}
                alt="Giftitude"
                className="h-12 w-auto transition-all duration-300 group-hover:opacity-80"
              />
            </Link>

            {/* Desktop links — centered */}
            <ul className="hidden items-center gap-10 md:flex">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    activeOptions={{ exact: l.exact }}
                    activeProps={{ className: "text-navy font-semibold" }}
                    inactiveProps={{ className: "text-navy/50 hover:text-navy" }}
                    className="relative text-[13px] uppercase tracking-[0.08em] transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right side */}
            <div className="flex items-center gap-4">
              {/* Phone number — desktop only */}
              <a
                href="tel:+9178080255492"
                className="hidden items-center gap-2 text-[13px] text-navy/60 transition-colors duration-300 hover:text-gold lg:flex"
              >
                <Phone size={14} strokeWidth={2} />
                <span>+91 78080 25549</span>
              </a>

              {/* Divider */}
              <div className="hidden h-5 w-px bg-navy/10 lg:block" />

              {/* Desktop CTA */}
              <Link
                to="/contact"
                className="group hidden items-center gap-2.5 rounded-full bg-navy px-5 py-2 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-gold hover:text-navy hover:shadow-soft active:scale-[0.97] md:inline-flex"
              >
                Contact
                <ArrowRight size={14} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMenuOpen((o) => !o)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-navy/10 text-navy transition-all duration-300 hover:bg-navy/5 hover:border-navy/20 md:hidden"
              >
                <AnimatePresence mode="wait">
                  {menuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={20} strokeWidth={2} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={20} strokeWidth={2} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* backdrop */}
            <motion.div
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-navy/60 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            />

            {/* slide-down panel */}
            <motion.div
              className="fixed inset-x-0 top-0 z-40 bg-white px-6 pt-24 pb-10 shadow-luxury md:hidden"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* nav links — staggered entrance */}
              <ul className="space-y-1">
                {links.map((l, i) => (
                  <motion.li
                    key={l.to}
                    custom={i}
                    variants={mobileLinkVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      to={l.to}
                      activeOptions={{ exact: l.exact }}
                      activeProps={{ className: "text-navy" }}
                      inactiveProps={{ className: "text-navy/50" }}
                      className="block rounded-xl px-4 py-3.5 font-display text-xl transition-all duration-300 hover:bg-ivory hover:text-navy hover:translate-x-2"
                      onClick={() => setMenuOpen(false)}
                    >
                      {l.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* divider */}
              <motion.div
                className="my-6 h-px bg-navy/10"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              />

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="group inline-flex items-center gap-3 rounded-full bg-navy px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-gold hover:text-navy active:scale-[0.98]"
                >
                  Get a Quote
                  <ArrowRight size={14} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </motion.div>

              {/* contact info */}
              <motion.div
                className="mt-8 space-y-3 border-t border-navy/8 pt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.3 }}
              >
                <a href="tel:+9178080255492" className="flex items-center gap-2 text-sm text-navy/50 transition-colors duration-300 hover:text-gold">
                  <Phone size={14} />
                  +91 78080 25549
                </a>
                <a href="mailto:hello@giftitude.in" className="block text-sm text-navy/50 transition-colors duration-300 hover:text-gold">
                  hello@giftitude.in
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
