import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PRODUCTS, C as CATEGORIES } from "./products-DineVYN4.mjs";
import { P as ProductCard } from "./ProductCard-CYPticKx.mjs";
import { r as Search } from "../_libs/lucide-react.mjs";
import "./router-CU418lDg.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "../_libs/zod.mjs";
function ProductsPage() {
  const [cat, setCat] = reactExports.useState("All");
  const [q, setQ] = reactExports.useState("");
  const filtered = PRODUCTS.filter((p) => (cat === "All" || p.category === cat) && (q === "" || p.name.toLowerCase().includes(q.toLowerCase())));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-display text-4xl sm:text-5xl font-semibold", children: "Our Catalogue" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground max-w-2xl", children: "Every item is sourced and hand-graded in Tamil Nadu. Prices are indicative per kilogram — bulk discounts available on enquiry." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-w-[240px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "size-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Search products...", className: "w-full pl-9 pr-4 h-10 rounded-full bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setCat(c), className: `px-4 h-10 rounded-full text-sm font-medium border transition-colors ${cat === c ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border hover:bg-secondary"}`, children: c }, c)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-bold uppercase tracking-widest text-muted-foreground mr-auto bg-secondary/50 px-3 py-1 rounded-full border border-border/50", children: [
      filtered.length,
      " ",
      filtered.length === 1 ? "Product" : "Products",
      " Found"
    ] }) }),
    filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center py-20 text-muted-foreground", children: "No products match your search." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5", children: filtered.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p }, p.id)) })
  ] });
}
export {
  ProductsPage as component
};
