import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, Truck, ShieldCheck, Globe2 } from "lucide-react";
import { PRODUCTS } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vel Trading Agency — Authentic Herbs from Madurai" },
      { name: "description", content: "Wholesale supplier of senna, moringa, ashwagandha, vettiver, hibiscus and more — direct from Tamil Nadu." },
      { property: "og:title", content: "Vel Trading Agency" },
      { property: "og:description", content: "Wholesale supplier of authentic Tamil Nadu herbs, seeds, roots and dried flowers." },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = PRODUCTS.slice(0, 8);
  return (
    <>
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-xs font-medium">
              <Leaf className="size-3.5 text-primary" /> Sourced from Tamil Nadu farms
            </div>
            <h1 className="mt-5 text-display text-5xl sm:text-6xl font-semibold tracking-tight leading-[1.05]">
              Pure herbs.<br />
              <span className="text-primary">Honest trade.</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-lg">
              Vel Trading Agency supplies authentic Siddha & Ayurvedic herbs, seeds, roots and dried flowers — graded by hand, packed with care.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/products" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90">
                Shop Catalogue <ArrowRight className="size-4" />
              </Link>
              <Link to="/enquiry" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-background/60 backdrop-blur font-semibold hover:bg-secondary">
                Bulk Enquiry
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              <Stat n="18+" l="Products" />
              <Stat n="GST" l="Registered" />
              <Stat n="MSME" l="Certified" />
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {PRODUCTS.slice(0, 4).map((p, i) => (
                <div key={p.id} className={`rounded-2xl overflow-hidden shadow-lg ${i % 2 ? "translate-y-8" : ""}`}>
                  <img src={p.image} alt={p.name} className="w-full aspect-square object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-3 gap-6">
          <Feature icon={<ShieldCheck className="size-5" />} title="Authentic & graded" body="Hand-sorted by experienced traders for purity and consistency." />
          <Feature icon={<Truck className="size-5" />} title="Bulk & retail" body="From a single kilo to container loads — we serve both." />
          <Feature icon={<Globe2 className="size-5" />} title="Pan-India & export" body="Pricing available in INR, USD and EUR for global buyers." />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-display text-3xl sm:text-4xl font-semibold">Featured products</h2>
            <p className="text-muted-foreground mt-1">A taste of our most-loved herbs and seeds.</p>
          </div>
          <Link to="/products" className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
            View all <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {featured.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-3xl bg-primary text-primary-foreground p-10 sm:p-14 grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h3 className="text-display text-3xl sm:text-4xl font-semibold">Need a custom quote?</h3>
            <p className="mt-3 opacity-85 max-w-xl">Tell us the herbs, grades and quantities you need — our team replies with availability and best-in-trade pricing within one business day.</p>
          </div>
          <div className="md:text-right">
            <Link to="/enquiry" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background text-foreground font-semibold hover:opacity-90">
              Send enquiry <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="text-display text-2xl font-semibold">{n}</div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground mt-0.5">{l}</div>
    </div>
  );
}

function Feature({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="p-6 rounded-2xl bg-card border border-border">
      <div className="size-10 rounded-full bg-primary/10 text-primary grid place-items-center">{icon}</div>
      <div className="mt-4 font-semibold">{title}</div>
      <p className="mt-1 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}
