import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const studioLinks = [
  { label: "About Us",   to: "/about"   as const },
  { label: "Catalogue",  to: "/products" as const },
  { label: "Contact",    to: "/contact"  as const },
];

const catalogueLinks = [
  { label: "Gift Sets",        slug: "gift-sets"    },
  { label: "Diary & Power",    slug: "diary-power"  },
  { label: "Lamps",            slug: "lamps"        },
  { label: "Bottles & Mugs",   slug: "bottles"      },
  { label: "Accessories",      slug: "accessories"  },
];

export function Footer() {
  return (
    <footer className="bg-navy text-ivory">

      {/* ── Main grid ── */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-20">
        <motion.div
          className="grid gap-12 lg:grid-cols-12 lg:gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-5% 0px" }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        >

          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link to="/" className="group inline-flex items-center">
              <img
                src={logo}
                alt="Giftitude"
                className="h-10 w-auto transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
              Corporate gifting solutions that strengthen relationships and
              create lasting impressions since 2017.
            </p>

            {/* Social icons */}
            <div className="mt-8 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 hover:border-gold/50 hover:text-gold hover:scale-110 hover:bg-gold/10 hover:shadow-[0_0_12px_2px] hover:shadow-gold/20"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 hover:border-gold/50 hover:text-gold hover:scale-110 hover:bg-gold/10 hover:shadow-[0_0_12px_2px] hover:shadow-gold/20"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 hover:border-gold/50 hover:text-gold hover:scale-110 hover:bg-gold/10 hover:shadow-[0_0_12px_2px] hover:shadow-gold/20"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-5 lg:col-start-6 lg:grid-cols-2">

            {/* Studio */}
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-gold/70">
                Explore
              </div>
              <ul className="mt-5 space-y-3">
                {studioLinks.map((l, i) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="hover-underline inline-block text-sm text-white/60 transition-all duration-300 hover:text-gold hover:translate-x-1"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Catalogue */}
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-gold/70">
                Catalogue
              </div>
              <ul className="mt-5 space-y-3">
                {catalogueLinks.map((l, i) => (
                  <li key={l.slug}>
                    <Link
                      to="/products/$category"
                      params={{ category: l.slug }}
                      className="hover-underline inline-block text-sm text-white/60 transition-all duration-300 hover:text-gold hover:translate-x-1"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Contact column */}
          <div className="lg:col-span-3 lg:col-start-11">
            <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-gold/70">
              Contact
            </div>
            <ul className="mt-5 space-y-3">
              <li>
                <a href="mailto:hello@giftitude.in"
                  className="hover-underline inline-block text-sm text-white/60 transition-all duration-300 hover:text-gold hover:translate-x-1">
                  hello@giftitude.in
                </a>
              </li>
              <li>
                <a href="tel:+912200000000"
                  className="hover-underline inline-block text-sm text-white/60 transition-all duration-300 hover:text-gold hover:translate-x-1">
                  +91 22 0000 0000
                </a>
              </li>
              <li className="text-sm leading-relaxed text-white/60">
                Lower Parel, Mumbai,<br />Maharashtra, India
              </li>
            </ul>
          </div>

        </motion.div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-5 text-[11px] text-white/30 sm:flex-row sm:items-center lg:px-12">
          <span>© {new Date().getFullYear()} Giftitude Studio Pvt. Ltd. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <a href="#" className="transition-all duration-300 hover:text-gold hover:translate-x-0.5">Privacy Policy</a>
            <span className="h-3 w-px bg-white/15" />
            <a href="#" className="transition-all duration-300 hover:text-gold hover:translate-x-0.5">Terms & Conditions</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
