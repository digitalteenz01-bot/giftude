import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const links = [
  { label: "Home", to: "/" as const, exact: true },
  { label: "About", to: "/about" as const, exact: false },
  { label: "Products", to: "/products" as const, exact: false },
  { label: "Contact", to: "/contact" as const, exact: false },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-6">
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-full border bg-white/90 backdrop-blur-md transition-all duration-500 hairline ${
          scrolled ? "px-5 py-2.5 shadow-soft" : "px-6 py-3.5"
        }`}
      >
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-navy text-[10px] font-semibold tracking-widest text-gold">G</span>
          <span className="font-display text-xl font-medium text-navy">Giftitude</span>
        </Link>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.exact }}
                activeProps={{ className: "text-navy font-semibold" }}
                inactiveProps={{ className: "text-navy/70 hover:text-navy" }}
                className="text-sm transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="/contact"
          className="group inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition-all hover:bg-gold-soft"
        >
          Get a quote
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </Link>
      </nav>
    </header>
  );
}
