import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as Phone, z as MessageCircle, b as Mail, a as MapPin, w as Building2 } from "../_libs/lucide-react.mjs";
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "text-center max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-display text-4xl sm:text-5xl font-semibold", children: "Get in touch" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "We're happy to answer questions about pricing, availability, and shipping — for both Indian and overseas buyers." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ContactCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-5" }), title: "Phone", body: "+91 81246 75463", href: "tel:+918124675463" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ContactCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-5" }), title: "WhatsApp", body: "Chat with our sales team", href: "https://wa.me/918124675463" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ContactCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "size-5" }), title: "Email", body: "veltradingagency@gmail.com", href: "mailto:veltradingagency@gmail.com" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ContactCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-5" }), title: "Address", body: "102/103, Velar Street, Arapalayam, Madurai, Tamil Nadu – 625016" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-2xl bg-card border border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "size-5 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "Company details" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "mt-4 text-sm space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "Company type", v: "Partnership Firm" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "GST No", v: "33ABCFV1505G1ZM" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "MSME No", v: "UDYAM-TN-12-0182473" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "Business PAN", v: "ABCFV1505G" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "Partner 1", v: "R. Seetharaman" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "Partner 2", v: "Ramadoss Madhusudhanan" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl overflow-hidden border border-border min-h-[300px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "Vel Trading Agency — Madurai", src: "https://www.google.com/maps?q=Velar+Street,+Arapalayam,+Madurai,+Tamil+Nadu+625016&output=embed", className: "w-full h-full min-h-[300px]", loading: "lazy" }) })
    ] })
  ] });
}
function ContactCard({
  icon,
  title,
  body,
  href
}) {
  const inner = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-2xl bg-card border border-border h-full hover:border-primary transition-colors", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-full bg-primary/10 text-primary grid place-items-center", children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-semibold", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm text-muted-foreground", children: body })
  ] });
  return href ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href, target: href.startsWith("http") ? "_blank" : void 0, rel: "noopener noreferrer", children: inner }) : inner;
}
function Row({
  k,
  v
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between gap-4 border-b border-border/60 pb-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-muted-foreground", children: k }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "font-medium text-right", children: v })
  ] });
}
export {
  Contact as component
};
