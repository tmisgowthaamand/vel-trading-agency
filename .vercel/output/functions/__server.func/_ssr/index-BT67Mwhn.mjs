import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PRODUCTS } from "./products-DineVYN4.mjs";
import { P as ProductCard } from "./ProductCard-anu4w9rQ.mjs";
import { L as Leaf, A as ArrowRight, K as Award, l as Truck, g as Scale } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "./router-G7_3on1e.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/zod.mjs";
function Home() {
  const featured = PRODUCTS.slice(0, 8);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-hero-gradient overflow-hidden text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-primary-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "size-3.5 text-primary-foreground" }),
          " Sourced from Tamil Nadu farms"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-5 text-display text-5xl sm:text-6xl font-semibold tracking-tight leading-[1.05] text-white", children: [
          "Pure Herbs.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-secondary italic", children: "Global Standards." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-white/80 max-w-lg leading-relaxed font-light", children: "Vel Trading Agency: Built on honest trade and rooted in tradition. We deliver high-grade Siddha & Ayurvedic raw materials from Tamil Nadu farms to the world." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/products", className: "inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-primary font-bold hover:bg-secondary transition-all shadow-xl shadow-black/20", children: [
            "Browse Collection ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/enquiry", className: "inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/30 bg-white/10 backdrop-blur font-semibold hover:bg-white/20 transition-colors", children: "Send Bulk Enquiry" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex items-center gap-8 border-t border-white/10 pt-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { n: "18+", l: "Premium Grades" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { n: "PAN", l: "India Shipping" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { n: "MSME", l: "Certified Agency" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4 w-full", children: PRODUCTS.slice(0, 4).map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `group relative rounded-3xl overflow-hidden shadow-2xl ${i % 2 ? "translate-y-12" : ""}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.image, alt: p.name, className: "w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white text-xs font-medium", children: p.name }) })
        ] }, p.id)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] aspect-square bg-primary/5 rounded-full blur-3xl" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 border-y border-border/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-3xl mx-auto mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-display text-3xl sm:text-4xl font-semibold", children: "The Vel Commitment" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "We don't just trade; we curate. Every seed, leaf, and root passes through a rigorous quality check in our Madurai facility." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "size-6" }), title: "Graded for Purity", body: "Our herbs are sorted by color, aroma, and moisture content to meet pharmaceutical and export standards." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "size-6" }), title: "Reliable Logistics", body: "From consolidated smaller shipments to full container loads, we ensure timely delivery across India and beyond." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Scale, { className: "size-6" }), title: "Transparent Pricing", body: "We maintain honest margins, ensuring fair pay to farmers while offering competitive rates to our trade partners." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-display text-4xl font-semibold mb-6", children: "Standard of Quality" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground leading-relaxed mb-10", children: "At Vel Trading Agency, we don't just move products — we manage purity. Our multi-stage grading process ensures that every shipment meets the specific phytochemical requirements of our global buyers." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(QualityStep, { number: "01", title: "Botanical Verification", body: "Every batch is cross-checked for species authenticity and regional origin to ensure therapeutic efficacy." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(QualityStep, { number: "02", title: "Manual Sorting & Cleaning", body: "Our experienced team hand-sorts the harvest to remove foreign matter and selects only prime-grade materials." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(QualityStep, { number: "03", title: "Standardized Packing", body: "Moisture-controlled HDPE bags or vacuum-sealed packs are used to preserve freshness during long-haul transit." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1515446134809-993c501ca304?q=80&w=2000", alt: "Herbal quality control", className: "w-full h-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl font-display font-bold mb-2", children: "99%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm uppercase tracking-widest opacity-90 font-semibold", children: "Purity Guarantee" })
        ] }) })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-display text-3xl sm:text-4xl font-semibold", children: "Trade Catalog" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2", children: "Discover our current inventory of premium raw materials." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/products", className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary border border-border text-sm font-semibold hover:bg-background transition-colors", children: [
          "View All Products ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6", children: featured.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p }, p.id)) })
    ] })
  ] });
}
function Stat({
  n,
  l
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-display text-3xl font-semibold", children: n }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1 font-bold", children: l })
  ] });
}
function FeatureCard({
  icon,
  title,
  body
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 rounded-3xl bg-card border border-border hover:border-primary/30 transition-colors group", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-14 rounded-2xl bg-primary/10 text-primary grid place-items-center mb-6 group-hover:scale-110 transition-transform", children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-3", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed text-sm", children: body })
  ] });
}
function QualityStep({
  number,
  title,
  body
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6 group", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-display text-4xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors", children: number }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold mb-1", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: body })
    ] })
  ] });
}
export {
  Home as component
};
