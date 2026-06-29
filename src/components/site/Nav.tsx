import { useEffect, useState } from "react";

const links = [
  { label: "Collections", href: "#categories" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
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
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-navy text-[10px] font-semibold tracking-widest text-gold">G</span>
          <span className="font-display text-xl font-medium text-navy">Giftitude</span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-navy/75 transition-colors hover:text-navy"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition-all hover:bg-gold-soft"
        >
          Get a quote
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </a>
      </nav>
    </header>
  );
}
