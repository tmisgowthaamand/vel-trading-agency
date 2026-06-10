import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useShop } from "./router-G7_3on1e.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
function ProductCard({ product }) {
  const { format, formatRange, addToCart } = useShop();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group rounded-2xl bg-card border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-0.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products/$productId", params: { productId: product.id }, className: "block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square overflow-hidden bg-secondary/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: product.image,
        alt: product.name,
        loading: "lazy",
        className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: product.category }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products/$productId", params: { productId: product.id }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-display text-lg font-semibold mt-0.5 leading-tight hover:text-primary transition-colors", children: product.name }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-xs text-muted-foreground line-clamp-2", children: product.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-semibold text-primary", children: product.priceRange ? formatRange(product.priceRange) : format(product.priceUSD) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: "per Kg" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/products/$productId",
            params: { productId: product.id },
            className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity",
            children: "View Product"
          }
        )
      ] })
    ] })
  ] });
}
export {
  ProductCard as P
};
