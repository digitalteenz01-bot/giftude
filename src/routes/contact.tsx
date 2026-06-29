import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import cta from "@/assets/cta-gift.jpg";

const searchSchema = z.object({
  product: z.string().optional(),
});

export const Route = createFileRoute("/contact")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Contact — Begin a Brief with Giftitude" },
      { name: "description", content: "Begin a brief with the Giftitude studio. A curator replies within one working day with a tailored corporate gifting proposal." },
      { property: "og:title", content: "Contact — Begin a Brief with Giftitude" },
      { property: "og:description", content: "Begin a corporate gifting brief. We reply within one working day." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const CATEGORIES = [
  { value: "gift-sets", label: "Premium Gift Sets" },
  { value: "diary-power", label: "Diary & Power Banks" },
  { value: "lamps", label: "Lamps" },
  { value: "bottles", label: "Bottles & Mugs" },
  { value: "accessories", label: "Accessories" },
  { value: "custom", label: "Custom / Not sure yet" },
];

function inferCategory(product?: string): string {
  if (!product) return "gift-sets";
  const match = CATEGORIES.find((c) => c.value === product);
  if (match) return match.value;
  if (product.includes("diary") || product.includes("power")) return "diary-power";
  if (product.includes("lamp")) return "lamps";
  if (product.includes("bottle") || product.includes("mug") || product.includes("flask") || product.includes("tumbler")) return "bottles";
  if (product.includes("card") || product.includes("key") || product.includes("tie") || product.includes("tray")) return "accessories";
  return "gift-sets";
}

function ContactPage() {
  const { product } = Route.useSearch();

  return (
    <div className="min-h-screen bg-white text-ink">
      <Nav />
      <main className="pt-24 lg:pt-28">
        <div className="grid lg:min-h-[calc(100vh-7rem)] lg:grid-cols-5">
          <ContactPanel />
          <EnquiryForm productSlug={product} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

function ContactPanel() {
  return (
    <aside className="relative overflow-hidden bg-navy px-6 py-16 text-ivory sm:px-10 lg:col-span-2 lg:px-14 lg:py-20">
      <div className="pointer-events-none absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full opacity-50 blur-3xl"
           style={{ background: "radial-gradient(circle, oklch(0.71 0.13 78 / 0.35), transparent 60%)" }} />
      <div className="relative lg:sticky lg:top-32">
        <div className="text-[11px] uppercase tracking-[0.3em] text-gold">Begin a brief</div>
        <h1 className="mt-5 font-display text-5xl leading-[1.05] sm:text-6xl">
          Let's design <br />
          <span className="italic">something memorable</span>.
        </h1>

        <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-gold/40 px-4 py-2 text-xs uppercase tracking-[0.2em] text-gold">
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
          Reply within 1 working day
        </div>

        <dl className="mt-12 space-y-6 text-sm">
          <div>
            <dt className="text-[10px] uppercase tracking-[0.25em] text-ivory/55">Email</dt>
            <dd className="mt-1 font-display text-xl"><a href="mailto:hello@giftitude.in" className="hover:text-gold">hello@giftitude.in</a></dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-[0.25em] text-ivory/55">Phone</dt>
            <dd className="mt-1 font-display text-xl"><a href="tel:+912200000000" className="hover:text-gold">+91 22 0000 0000</a></dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-[0.25em] text-ivory/55">Studio</dt>
            <dd className="mt-1 text-ivory/85">Unit 4, Mathuradas Mill,<br />Lower Parel, Mumbai 400013</dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-[0.25em] text-ivory/55">Hours</dt>
            <dd className="mt-1 text-ivory/85">Mon — Sat · 10:00 to 19:00 IST</dd>
          </div>
        </dl>

        <div className="mt-10 flex items-center gap-5 text-xs uppercase tracking-[0.2em] text-ivory/60">
          <a href="#" className="hover:text-gold">Instagram</a>
          <span className="h-px w-6 bg-ivory/30" />
          <a href="#" className="hover:text-gold">LinkedIn</a>
        </div>

        <div className="mt-14 hidden lg:block">
          <div className="ml-auto h-40 w-40 overflow-hidden rounded-2xl shadow-luxury animate-float">
            <img src={cta} alt="Navy gift box" loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </aside>
  );
}

function EnquiryForm({ productSlug }: { productSlug?: string }) {
  const [category, setCategory] = useState(inferCategory(productSlug));
  const [qty, setQty] = useState(100);
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "");
    const company = String(f.get("company") || "");
    const email = String(f.get("email") || "");
    const phone = String(f.get("phone") || "");
    const message = String(f.get("message") || "");
    const catLabel = CATEGORIES.find((c) => c.value === category)?.label ?? category;
    const subject = `New enquiry — ${catLabel}`;
    const body = [
      `Name: ${name}`,
      `Company: ${company}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Category: ${catLabel}`,
      `Quantity: ~${qty}`,
      productSlug ? `Interested in: ${productSlug}` : null,
      "",
      "Message:",
      message,
    ].filter(Boolean).join("\n");
    window.location.href = `mailto:hello@giftitude.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section className="bg-ivory px-6 py-16 sm:px-10 lg:col-span-3 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-xl">
        <div className="text-[11px] uppercase tracking-[0.3em] text-gold">Enquiry · 01</div>
        <h2 className="mt-3 font-display text-3xl text-navy sm:text-4xl">Tell us about the brief.</h2>
        <p className="mt-3 text-sm text-navy/70">
          A few details are enough. A curator will reply with a tailored proposal.
        </p>

        {productSlug && (
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1.5 text-xs text-navy hairline">
            Interested in <span className="font-semibold">{productSlug}</span>
          </div>
        )}

        <form onSubmit={onSubmit} className="mt-8 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Your name" name="name" required />
            <Field label="Company" name="company" required />
            <Field label="Work email" name="email" type="email" required />
            <Field label="Phone" name="phone" type="tel" />
          </div>

          <div>
            <Label>Category</Label>
            <div className="mt-2 flex flex-wrap gap-2">
              {CATEGORIES.map((c) => {
                const active = c.value === category;
                return (
                  <button
                    type="button"
                    key={c.value}
                    onClick={() => setCategory(c.value)}
                    className={`rounded-full border px-4 py-2 text-xs transition-colors hairline ${
                      active ? "border-navy bg-navy text-ivory" : "bg-white text-navy hover:border-gold"
                    }`}
                  >
                    {c.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <Label>Approximate quantity · {qty}</Label>
            <input
              type="range"
              min={25}
              max={2500}
              step={25}
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
              className="mt-3 w-full accent-[var(--gold)]"
            />
            <div className="mt-1 flex justify-between text-[10px] uppercase tracking-[0.2em] text-navy/55">
              <span>25</span><span>2,500+</span>
            </div>
          </div>

          <div>
            <Label>Message</Label>
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Occasion, timeline, recipients, any thoughts on tone…"
              className="mt-2 w-full rounded-2xl border bg-white px-4 py-3 text-sm text-navy placeholder:text-navy/40 focus:border-gold focus:outline-none hairline"
            />
          </div>

          <button
            type="submit"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-navy px-8 py-4 text-sm font-semibold text-ivory transition-all hover:bg-navy-soft sm:w-auto"
          >
            {sent ? "Re-open mail draft" : "Send enquiry"}
            <span className="grid h-7 w-7 place-items-center rounded-full bg-gold text-navy transition-transform group-hover:rotate-45">↗</span>
          </button>

          <p className="text-[11px] text-navy/55">
            We don't store form inputs. Submitting opens your mail client with the brief pre-filled.
          </p>
        </form>
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <div className="text-[10px] uppercase tracking-[0.25em] text-navy/60">{children}</div>;
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <Label>{label}{required && <span className="text-gold"> *</span>}</Label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-full border bg-white px-4 py-3 text-sm text-navy placeholder:text-navy/40 focus:border-gold focus:outline-none hairline"
      />
    </label>
  );
}
