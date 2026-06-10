import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PRODUCTS } from "./products-DineVYN4.mjs";
import { R as Route$5 } from "./router-CU418lDg.mjs";
import { f as ArrowLeft, o as CircleCheck, v as ClipboardList, w as Building2, x as Package, y as Send } from "../_libs/lucide-react.mjs";
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
function Enquiry() {
  const {
    product: preselectedProduct
  } = Route$5.useSearch();
  const [sent, setSent] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: preselectedProduct || "",
    qty: "",
    message: "",
    destination: ""
  });
  const onChange = (k) => (e) => setForm({
    ...form,
    [k]: e.target.value
  });
  const submit = (e) => {
    e.preventDefault();
    const text = `*BULK ENQUIRY / RFQ*

*Business Details:*
Name: ${form.name}
Company: ${form.company}
Location: ${form.destination}

*Requirement:*
Product: ${form.product}
Quantity: ${form.qty}

*Notes:*
${form.message}`;
    window.open(`https://wa.me/918124675463?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-secondary/30 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/products", className: "inline-flex items-center gap-2 text-sm font-semibold text-primary mb-8 hover:opacity-80", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "size-4" }),
      " Return to Catalogue"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-display text-4xl sm:text-5xl font-bold text-foreground", children: "Global Trading Portal" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-muted-foreground max-w-2xl", children: "Submit a Request for Quotation (RFQ). Our export specialists will provide a custom commercial offer within 24 hours." })
    ] }),
    sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border-2 border-primary/20 rounded-[2.5rem] p-12 text-center shadow-2xl relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 p-8 opacity-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-64" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-10 text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-display text-3xl font-bold mb-4", children: "RFQ Successfully Generated" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mb-8 max-w-md mx-auto", children: [
          "Your enquiry for ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-bold", children: form.product }),
          " has been processed. Our team has been notified via our secure trade channel."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-secondary/50 rounded-2xl p-6 text-left mb-8 max-w-sm mx-auto border border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-muted-foreground uppercase mb-3", children: "Enquiry Summary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Product:" }),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: form.product })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Quantity:" }),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: form.qty || "Not specified" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Destination:" }),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: form.destination || "Not specified" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
          setSent(false);
          setForm({
            name: "",
            company: "",
            email: "",
            phone: "",
            product: "",
            qty: "",
            message: "",
            destination: ""
          });
        }, className: "px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold hover:opacity-90 shadow-xl shadow-primary/20 transition-all", children: "Create New Requirement" })
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "bg-card border border-border rounded-[2.5rem] shadow-xl overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 border-b border-border bg-secondary/50 flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "size-6 text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg", children: "Request for Quotation Form" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Fields marked * are mandatory for trade verification." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 sm:p-12 space-y-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-6 text-primary font-bold text-sm uppercase tracking-widest", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "size-4" }),
            " 01. Business Information"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Contact Person *", required: true, value: form.name, onChange: onChange("name"), placeholder: "Your full name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Company / Entity Name", value: form.company, onChange: onChange("company"), placeholder: "Business name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Corporate Email *", type: "email", required: true, value: form.email, onChange: onChange("email"), placeholder: "email@company.com" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone / WhatsApp *", type: "tel", required: true, value: form.phone, onChange: onChange("phone"), placeholder: "+91 ..." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Delivery Destination / Port", value: form.destination, onChange: onChange("destination"), placeholder: "City, Country or Nearest Port" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-6 text-primary font-bold text-sm uppercase tracking-widest", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "size-4" }),
            " 02. Requirement Details"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground/80 mb-2 block", children: "Product Selection *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { required: true, value: form.product, onChange: onChange("product"), className: "w-full h-14 rounded-2xl border-2 border-border bg-background px-4 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Choose a product catalogue item" }),
                PRODUCTS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: p.name, children: p.name }, p.id)),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Custom / Multiple Blends", children: "Custom / Multiple Blends" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Target Quantity (Kg/Tons) *", required: true, value: form.qty, onChange: onChange("qty"), placeholder: "e.g., 500 Kg or 2 Metric Tons" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground/80 mb-2 block", children: "Special Instructions / Grade Requirements" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: form.message, onChange: onChange("message"), rows: 4, placeholder: "Specify moisture levels, packaging types (PP/Jute), or specific botanical grades.", className: "w-full rounded-2xl border-2 border-border bg-background px-4 py-4 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all" })
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground max-w-sm", children: "By submitting this RFQ, you agree to our trade terms and export compliance standards." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-primary text-primary-foreground font-bold hover:opacity-90 shadow-2xl shadow-primary/20 transition-all", children: [
            "Generate Quotation Request ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "size-5" })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
function Field(props) {
  const {
    label,
    ...rest
  } = props;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground/80 mb-2 block", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...rest, className: "w-full h-14 rounded-2xl border-2 border-border bg-background px-4 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all" })
  ] });
}
export {
  Enquiry as component
};
