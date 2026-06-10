import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PRODUCTS } from "./products-DineVYN4.mjs";
import { a as Route, u as useShop } from "./router-G7_3on1e.mjs";
import { P as ProductCard } from "./ProductCard-anu4w9rQ.mjs";
import { f as ArrowLeft, S as ShoppingCart, Z as Zap, N as MessageSquare } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/zod.mjs";
function ProductDetails() {
  const {
    productId
  } = Route.useParams();
  const navigate = useNavigate();
  const {
    format,
    formatRange,
    addToCart
  } = useShop();
  const [qty, setQty] = reactExports.useState(1);
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-20", children: "Product not found." });
  }
  const handleBuyNow = () => {
    addToCart(product, qty);
    navigate({
      to: "/checkout"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/products", className: "inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 mb-8 transition-colors", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "size-4" }),
      " Back to Product Catalogue"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-start mb-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-[3rem] overflow-hidden shadow-2xl border border-border/50 bg-secondary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: product.image, alt: product.name, className: "w-full aspect-square object-cover hover:scale-105 transition-transform duration-700" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 rounded-full bg-primary animate-pulse" }),
          product.category
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-display text-4xl sm:text-6xl font-bold mb-6 leading-tight", children: product.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-3 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-display font-bold text-primary", children: product.priceRange ? formatRange(product.priceRange) : format(product.priceUSD) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground font-semibold", children: "/ Kilogram" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose prose-sm text-muted-foreground mb-10 max-w-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed font-medium text-foreground/80 mb-4", children: product.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Sourced and processed in Tamil Nadu, India. Our materials are verified for botanical purity and packaged in moisture-controlled environments to preserve therapeutic integrity during international transit." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6 mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center border-2 border-border rounded-2xl p-1 bg-card shadow-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQty((q) => Math.max(1, q - 1)), className: "size-12 rounded-xl hover:bg-secondary flex items-center justify-center font-bold text-xl transition-colors", children: "-" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-16 text-center font-bold text-lg", children: qty }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQty((q) => q + 1), className: "size-12 rounded-xl hover:bg-secondary flex items-center justify-center font-bold text-xl transition-colors", children: "+" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-bold text-muted-foreground uppercase tracking-tighter", children: [
            "Unit of Measure",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground text-sm", children: "Kilograms (Kg)" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => addToCart(product, qty), className: "flex items-center justify-center gap-2 px-8 py-5 rounded-2xl bg-secondary border-2 border-border font-bold hover:bg-background transition-all hover:border-primary/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "size-5" }),
            " Add to Cart"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleBuyNow, className: "flex items-center justify-center gap-2 px-8 py-5 rounded-2xl bg-primary text-primary-foreground font-bold hover:opacity-95 shadow-2xl shadow-primary/30 transition-all hover:-translate-y-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "size-5 fill-current" }),
            " Buy Now"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/enquiry", search: {
            product: product.name
          }, className: "sm:col-span-2 flex items-center justify-center gap-2 px-8 py-5 rounded-2xl border-2 border-primary/20 bg-primary/5 text-primary font-bold hover:bg-primary/10 transition-all", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "size-5" }),
            " Bulk Order Enquiry"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "border-t border-border pt-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-display text-3xl font-semibold mb-10", children: "Recommended for You" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6", children: PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p }, p.id)) })
    ] })
  ] });
}
export {
  ProductDetails as component
};
