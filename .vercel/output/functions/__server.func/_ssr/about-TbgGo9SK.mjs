import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Leaf, J as Users, a as MapPin, K as Award } from "../_libs/lucide-react.mjs";
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-xs font-medium", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "size-3.5 text-primary" }),
        " About us"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 text-display text-4xl sm:text-5xl font-semibold", children: "Rooted in tradition, traded with trust." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-muted-foreground max-w-3xl", children: "Vel Trading Agency is a Madurai-based partnership firm dealing in authentic Siddha and Ayurvedic raw materials — leaves, seeds, roots, dried flowers and spices — sourced directly from farms across Tamil Nadu." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(InfoCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "size-5" }), title: "Partnership firm", lines: ["R. Seetharaman — Partner", "Ramadoss Madhusudhanan — Partner"] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(InfoCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-5" }), title: "Head office", lines: ["102/103, Velar Street", "Arapalayam, Madurai", "Tamil Nadu – 625016"] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(InfoCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "size-5" }), title: "Registrations", lines: ["GST: 33ABCFV1505G1ZM", "FSSAI: Licensed & Approved", "MSME: UDYAM-TN-12-0182473", "Business PAN: ABCFV1505G"] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(InfoCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "size-5" }), title: "What we do", lines: ["Wholesale & retail trade", "Pan-India dispatch", "Export-ready packaging"] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-16 grid md:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Value, { n: "01", t: "Authenticity Above All", b: "We never compromise on the botanical integrity of our products. Every batch is identity-verified before processing." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Value, { n: "02", t: "Farmer-First Sourcing", b: "Our success is tied to our growers. We ensure fair compensation, supporting the farming communities of Tamil Nadu." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Value, { n: "03", t: "Logistical Precision", b: "From our warehouse to your doorstep, we manage every step with precision—ensuring timely delivery across India." })
    ] })
  ] });
}
function InfoCard({
  icon,
  title,
  lines
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-2xl bg-card border border-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-9 rounded-full bg-primary/10 text-primary grid place-items-center", children: icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-1 text-sm text-muted-foreground", children: lines.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: l }, l)) })
  ] });
}
function Value({
  n,
  t,
  b
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-display text-3xl text-accent font-semibold", children: n }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-semibold", children: t }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: b })
  ] });
}
export {
  About as component
};
