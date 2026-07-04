import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { motion } from "framer-motion";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ArrowRight } from "lucide-react";
import testiBanner from "@/assets/testi-banner.webp";

const searchSchema = z.object({
  product: z.string().optional(),
});

export const Route = createFileRoute("/contact")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Contact — Begin a Brief with Giftitude" },
      { name: "description", content: "Begin a brief with the Giftitude studio. A curator replies within one working day with a tailored corporate gifting proposal." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const CATEGORIES = [
  { value: "gift-sets",    label: "Premium Gift Sets" },
  { value: "diary-power", label: "Diary & Power Banks" },
  { value: "lamps",       label: "Lamps" },
  { value: "bottles",     label: "Bottles & Mugs" },
  { value: "accessories", label: "Accessories" },
  { value: "custom",      label: "Custom / Not sure yet" },
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

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.5,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  }),
};

// ─── Page ─────────────────────────────────────────────────────────────────────
function ContactPage() {
  const { product } = Route.useSearch();

  return (
    <div
      className="min-h-screen bg-ivory text-ink"
      style={{
        backgroundImage: `url(${testiBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="min-h-screen bg-white/88">
      <Nav variant="light" />
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-32 lg:px-8 lg:pt-36">

        {/* ── Page header ── */}
        <motion.div
          className="mb-12 border-b border-navy/8 pb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold">
            Begin a brief
          </div>
          <h1 className="mt-4 font-display text-4xl leading-[1.06] text-navy sm:text-5xl">
            Let's design something memorable.
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-navy/55">
            Share the occasion, the count, and a sense of the recipient.
            A curator will reply within one working day with a tailored proposal.
          </p>
          <div className="mt-5 flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-xs text-navy/45">Reply within 1 working day</span>
          </div>
        </motion.div>

        {/* ── Form ── */}
        <ContactForm productSlug={product} />

        {/* ── Contact details strip ── */}
        <motion.div
          className="mt-16 grid gap-6 border-t border-navy/8 pt-10 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {[
            { label: "Email",  value: "hello@giftitude.in",  href: "mailto:hello@giftitude.in" },
            { label: "Phone",  value: "+91 22 0000 0000",     href: "tel:+912200000000" },
            { label: "Studio", value: "Lower Parel, Mumbai",  href: null },
            { label: "Hours",  value: "Mon – Sat · 10–19 IST", href: null },
          ].map(({ label, value, href }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
              className="group"
            >
              <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-navy/35 transition-colors duration-300 group-hover:text-gold">
                {label}
              </div>
              {href ? (
                <a href={href} className="mt-1 block text-sm text-navy/70 transition-all duration-300 hover:text-gold hover:translate-x-0.5">
                  {value}
                </a>
              ) : (
                <p className="mt-1 text-sm text-navy/70">{value}</p>
              )}
            </motion.div>
          ))}
        </motion.div>

      </main>
      </div>
      <Footer />
    </div>
  );
}

// ─── Form ─────────────────────────────────────────────────────────────────────
function ContactForm({ productSlug }: { productSlug?: string }) {
  const [category, setCategory] = useState(inferCategory(productSlug));
  const [qty, setQty] = useState(100);
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f        = new FormData(e.currentTarget);
    const name     = String(f.get("name")    ?? "");
    const company  = String(f.get("company") ?? "");
    const email    = String(f.get("email")   ?? "");
    const phone    = String(f.get("phone")   ?? "");
    const message  = String(f.get("message") ?? "");
    const catLabel = CATEGORIES.find((c) => c.value === category)?.label ?? category;

    const text = [
      `*New Enquiry — Giftitude*`,
      ``,
      `*Name:* ${name}`,
      `*Company:* ${company}`,
      `*Email:* ${email}`,
      `*Phone:* ${phone}`,
      `*Category:* ${catLabel}`,
      `*Quantity:* ~${qty}`,
      productSlug ? `*Interested in:* ${productSlug}` : null,
      ``,
      `*Message:*`,
      message,
    ].filter(Boolean).join("\n");

    // Replace with your WhatsApp business number (digits only, with country code)
    const waNumber = "919200000000";
    window.open(
      `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSent(true);
  }

  return (
    <div>

        {productSlug && (
          <p className="mb-6 text-sm text-navy/60">
            Interested in: <span className="font-semibold text-navy">{productSlug}</span>
          </p>
        )}

        <form onSubmit={onSubmit} className="space-y-6">

          {/* Row 1 */}
          <motion.div
            className="grid gap-6 sm:grid-cols-2"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.15}
          >
            <Field label="Your name *"  name="name"    required />
            <Field label="Company *"    name="company" required />
          </motion.div>

          {/* Row 2 */}
          <motion.div
            className="grid gap-6 sm:grid-cols-2"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.25}
          >
            <Field label="Work email *" name="email" type="email" required />
            <Field label="Phone"        name="phone" type="tel" />
          </motion.div>

          {/* Category */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.35}
          >
            <Label>Category</Label>
            <div className="mt-3 flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c.value}
                  type="button"
                  onClick={() => setCategory(c.value)}
                  className={`rounded-full border px-4 py-2 text-xs font-medium transition-all duration-300 ${
                    c.value === category
                      ? "border-navy bg-navy text-white shadow-soft scale-[1.02]"
                      : "border-navy/12 bg-white text-navy/60 hover:border-navy/30 hover:text-navy hover:scale-[1.04] hover:shadow-sm active:scale-[0.97]"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Quantity */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.45}
          >
            <div className="flex items-center justify-between">
              <Label>Approximate quantity</Label>
              <span className="text-sm font-semibold text-navy">{qty}</span>
            </div>
            <input
              type="range"
              min={25} max={2500} step={25}
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
              className="mt-3 w-full cursor-pointer accent-[var(--gold)]"
            />
            <div className="mt-1.5 flex justify-between text-[10px] text-navy/35">
              <span>25</span>
              <span>2,500+</span>
            </div>
          </motion.div>

          {/* Message */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.55}
          >
            <Label>Message *</Label>
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Occasion, timeline, recipients, any thoughts on tone…"
              className="mt-3 w-full resize-none rounded-2xl border border-navy/12 bg-white px-5 py-4 text-sm text-navy placeholder:text-navy/30 transition-all duration-300 focus:border-gold focus:shadow-[0_0_0_3px] focus:shadow-gold/10 focus:outline-none"
            />
          </motion.div>

          {/* Submit */}
          <motion.div
            className="flex flex-wrap items-center gap-4 pt-2"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.65}
          >
            <button
              type="submit"
              className="group inline-flex items-center gap-4 rounded-full bg-navy pl-7 pr-2 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-navy-soft hover:shadow-luxury hover:scale-[1.02] active:scale-[0.98]"
            >
              {sent ? "Re-open on WhatsApp" : "Send enquiry"}
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold text-navy font-bold transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white group-hover:text-navy">
                <ArrowRight strokeWidth={2.5} size={16} />
              </span>
            </button>
            <Link
              to="/products"
              className="hover-underline text-sm text-navy/45 underline-offset-4 transition-colors duration-300 hover:text-navy"
            >
              or browse the catalogue
            </Link>
          </motion.div>

          <motion.p
            className="text-xs text-navy/35"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.75}
          >
            Submitting opens WhatsApp with the brief pre-filled. We don't store form data.
          </motion.p>

        </form>
    </div>
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-navy/45">
      {children}
    </div>
  );
}

function Field({
  label, name, type = "text", required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block group/field">
      <Label>{label}</Label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2.5 w-full rounded-2xl border border-navy/12 bg-white px-5 py-3.5 text-sm text-navy placeholder:text-navy/30 transition-all duration-300 focus:border-gold focus:shadow-[0_0_0_3px] focus:shadow-gold/10 focus:outline-none hover:border-navy/25"
      />
    </label>
  );
}
