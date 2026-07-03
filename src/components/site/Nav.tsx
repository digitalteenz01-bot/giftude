import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
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
          <Link to="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
            <img
              src={logo}
              alt="Giftitude"
              className="h-10 w-auto transition-all duration-500"
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
                  className="text-sm transition-colors"
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
              className="group hidden items-center gap-3 rounded-full bg-white pl-5 pr-1.5 py-1.5 text-sm font-semibold text-navy transition-all hover:bg-white/90 md:inline-flex"
            >
              Get a quote
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gold text-navy transition-transform group-hover:translate-x-0.5 font-bold">
                <ArrowRight strokeWidth={2.5} size={14} />
              </span>
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors md:hidden ${
                scrolled
                  ? "border-white/20 text-white hover:bg-white/10"
                  : variant === "light"
                    ? "border-navy/15 text-navy hover:bg-navy/5"
                    : "border-white/20 text-white hover:bg-white/10"
              }`}
            >
              {menuOpen
                ? <X size={18} strokeWidth={2} />
                : <Menu size={18} strokeWidth={2} />
              }
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile drawer ── */}
      {/* backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-navy/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* slide-down panel */}
      <div
        className={`fixed inset-x-0 top-0 z-40 bg-navy px-6 pt-24 pb-10 transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* nav links */}
        <ul className="space-y-1">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.exact }}
                activeProps={{ className: "text-white" }}
                inactiveProps={{ className: "text-white/55" }}
                className="block rounded-2xl px-4 py-4 font-display text-2xl transition-colors hover:bg-white/5 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* divider */}
        <div className="my-6 h-px bg-white/10" />

        {/* CTA */}
        <Link
          to="/contact"
          onClick={() => setMenuOpen(false)}
          className="group inline-flex items-center gap-4 rounded-full bg-gold pl-7 pr-2 py-2 text-sm font-semibold text-navy transition-all hover:bg-gold-soft"
        >
          Get a quote
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-navy text-gold font-bold transition-transform group-hover:translate-x-1">
            <ArrowRight strokeWidth={2.5} size={16} />
          </span>
        </Link>

        {/* contact strip */}
        <div className="mt-8 space-y-2 border-t border-white/10 pt-6">
          <a href="mailto:hello@giftitude.in" className="block text-sm text-white/40 hover:text-white transition-colors">
            hello@giftitude.in
          </a>
          <a href="tel:+912200000000" className="block text-sm text-white/40 hover:text-white transition-colors">
            +91 22 0000 0000
          </a>
        </div>
      </div>
    </>
  );
}
