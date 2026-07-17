import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
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

  const navBg = scrolled
    ? "bg-navy/90 border-white/10 backdrop-blur-md shadow-lg px-5 py-2.5"
    : variant === "light"
      ? "bg-white border-navy/10 shadow-soft px-6 py-3.5"
      : "bg-white/5 border-white/10 backdrop-blur-sm px-6 py-3.5";

  const logoColor = scrolled
    ? "text-white"
    : variant === "light" ? "text-navy" : "text-white";

  const linkActive = scrolled
    ? "text-white font-medium"
    : variant === "light" ? "text-navy font-medium" : "text-white font-medium";

  const linkInactive = scrolled
    ? "text-white/70 hover:text-white"
    : variant === "light" ? "text-navy/55 hover:text-navy" : "text-white/70 hover:text-white";

  // Hamburger icon color
  const iconColor = scrolled
    ? "text-white"
    : variant === "light" ? "text-navy" : "text-white";

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-6">
        <nav
          className={`flex w-full max-w-6xl items-center justify-between rounded-full border transition-all duration-500 ${navBg}`}
        >
          {/* Logo */}
          <Link to="/" className="group flex items-center" onClick={() => setMenuOpen(false)}>
            <img
              src={logo}
              alt="Giftitude"
              className="h-16 w-auto transition-all duration-500 group-hover:scale-105"
              style={{
                filter: scrolled || variant === "dark"
                  ? "brightness(0) invert(1)"   // white on dark bg
                  : "none",                      // natural on light bg
              }}
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  activeOptions={{ exact: l.exact }}
                  activeProps={{ className: linkActive }}
                  inactiveProps={{ className: linkInactive }}
                  className="hover-underline text-sm transition-colors duration-300"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <Link
              to="/contact"
              className="group hidden items-center gap-3 rounded-full bg-white pl-5 pr-1.5 py-1.5 text-sm font-semibold text-navy transition-all duration-300 hover:bg-white/90 hover:shadow-soft hover:scale-105 active:scale-[0.98] md:inline-flex"
            >
              Get a quote
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gold text-navy transition-all duration-300 group-hover:translate-x-0.5 group-hover:bg-navy group-hover:text-gold font-bold">
                <ArrowRight strokeWidth={2.5} size={14} />
              </span>
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 md:hidden ${
                scrolled
                  ? "border-white/20 text-white hover:bg-white/10 hover:scale-110"
                  : variant === "light"
                    ? "border-navy/15 text-navy hover:bg-navy/5 hover:scale-110"
                    : "border-white/20 text-white hover:bg-white/10 hover:scale-110"
              }`}
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
                    <X size={18} strokeWidth={2} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={18} strokeWidth={2} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
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
              className="fixed inset-x-0 top-0 z-40 bg-navy px-6 pt-24 pb-10 md:hidden"
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
                      activeProps={{ className: "text-white" }}
                      inactiveProps={{ className: "text-white/55" }}
                      className="block rounded-2xl px-4 py-4 font-display text-2xl transition-all duration-300 hover:bg-white/5 hover:text-white hover:translate-x-2"
                      onClick={() => setMenuOpen(false)}
                    >
                      {l.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* divider */}
              <motion.div
                className="my-6 h-px bg-white/10"
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
                  className="group inline-flex items-center gap-4 rounded-full bg-gold pl-7 pr-2 py-2 text-sm font-semibold text-navy transition-all duration-300 hover:bg-gold-soft hover:scale-[1.02] active:scale-[0.98]"
                >
                  Get a quote
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-navy text-gold font-bold transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight strokeWidth={2.5} size={16} />
                  </span>
                </Link>
              </motion.div>

              {/* contact strip */}
              <motion.div
                className="mt-8 space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.3 }}
              >
                <a href="tel:+9178080255492" className="block text-sm text-white/40 transition-all duration-300 hover:text-white hover:translate-x-1">
                  +91 78080255492
                </a>
                <a href="mailto:hello@giftitude.in" className="block text-sm text-white/40 transition-all duration-300 hover:text-white hover:translate-x-1">
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
