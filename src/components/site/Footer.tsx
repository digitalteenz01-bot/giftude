import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-ivory px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-navy text-xs font-semibold text-gold">G</span>
              <span className="font-display text-2xl text-navy">Giftitude</span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-navy/70">
              A premium corporate gifting house, curating considered objects
              for India's most discerning brands since 2017.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-7 lg:grid-cols-3">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-navy/55">Studio</div>
              <ul className="mt-5 space-y-3 text-sm text-navy">
                <li><Link to="/about" className="hover:text-gold">About us</Link></li>
                <li><Link to="/products" className="hover:text-gold">Catalogue</Link></li>
                <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
              </ul>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-navy/55">Catalogue</div>
              <ul className="mt-5 space-y-3 text-sm text-navy">
                <li><Link to="/products" hash="gift-sets" className="hover:text-gold">Gift sets</Link></li>
                <li><Link to="/products" hash="diary-power" className="hover:text-gold">Diary & Power</Link></li>
                <li><Link to="/products" hash="lamps" className="hover:text-gold">Lamps</Link></li>
                <li><Link to="/products" hash="bottles" className="hover:text-gold">Bottles & Mugs</Link></li>
                <li><Link to="/products" hash="accessories" className="hover:text-gold">Accessories</Link></li>
              </ul>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-navy/55">Contact</div>
              <ul className="mt-5 space-y-3 text-sm text-navy">
                <li>hello@giftitude.in</li>
                <li>+91 22 0000 0000</li>
                <li>Lower Parel, Mumbai</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t pt-6 text-xs text-navy/55 sm:flex-row sm:items-center hairline">
          <div>© {new Date().getFullYear()} Giftitude Studio Pvt. Ltd.</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-navy">Instagram</a>
            <a href="#" className="hover:text-navy">LinkedIn</a>
            <a href="#" className="hover:text-navy">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
