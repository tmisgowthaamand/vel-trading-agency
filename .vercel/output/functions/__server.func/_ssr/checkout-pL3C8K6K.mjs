import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useShop } from "./router-G7_3on1e.mjs";
import { o as CircleCheck, f as ArrowLeft, I as CreditCard, t as Smartphone, m as ShieldCheck } from "../_libs/lucide-react.mjs";
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
function CheckoutPage() {
  const {
    cart,
    cartTotal,
    format,
    clearCart
  } = useShop();
  const navigate = useNavigate();
  const [method, setMethod] = reactExports.useState("credit");
  const [placed, setPlaced] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: ""
  });
  if (cart.length === 0 && !placed) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-lg px-4 py-20 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-4", children: "Your cart is empty" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", className: "text-primary font-bold hover:underline", children: "Go back to products" })
    ] });
  }
  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setPlaced(true);
  };
  if (placed) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl px-4 py-20 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-10" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-display text-4xl font-semibold mb-4", children: "Order Placed Successfully!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mb-10 max-w-md mx-auto", children: [
        "Thank you for choosing Vel Trading Agency. Your order summary has been generated for your selected payment method: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold border-b border-primary text-foreground uppercase", children: method }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-3xl p-8 text-left shadow-xl mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-6 border-b border-border pb-4", children: "Order Summary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 mb-8", children: cart.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            item.product.name,
            " (x",
            item.qty,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: format(item.product.priceUSD * item.qty) })
        ] }, item.product.id)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-xl font-bold border-t border-border pt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total Amount" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: format(cartTotal) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 pt-6 border-t border-dashed border-border flex items-center justify-between opacity-70", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: "Customer" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: form.name || "Global Trader" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-mono text-[10px]", children: form.phone })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: "Payment Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-green-600", children: [
              "Authorized via ",
              method.toUpperCase()
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        clearCart();
        navigate({
          to: "/"
        });
      }, className: "px-10 py-4 bg-primary text-primary-foreground rounded-full font-bold shadow-lg hover:opacity-90 transition-all", children: "Return to Home" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-display text-4xl font-semibold", children: "Secure Checkout" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/products", className: "text-sm font-semibold text-muted-foreground hover:text-primary flex items-center gap-2 transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "size-4" }),
        " Cancel"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-card border border-border rounded-3xl p-8 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-semibold mb-6 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm", children: "1" }),
            "Shipping Information"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { id: "checkout-form", className: "grid sm:grid-cols-6 gap-6", onSubmit: handlePlaceOrder, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 sm:col-span-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground", children: "Full Name *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, placeholder: "Enter your full name", value: form.name, onChange: (e) => setForm({
                ...form,
                name: e.target.value
              }), className: "w-full h-12 bg-secondary/50 border border-border rounded-xl px-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 sm:col-span-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground", children: "Email *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "email", placeholder: "your@email.com", value: form.email, onChange: (e) => setForm({
                ...form,
                email: e.target.value
              }), className: "w-full h-12 bg-secondary/50 border border-border rounded-xl px-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 sm:col-span-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground", children: "Phone *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, placeholder: "+91 XXXXX XXXXX", value: form.phone, onChange: (e) => setForm({
                ...form,
                phone: e.target.value
              }), className: "w-full h-12 bg-secondary/50 border border-border rounded-xl px-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 sm:col-span-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground", children: "Address *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, placeholder: "House no., Street, Area", value: form.address, onChange: (e) => setForm({
                ...form,
                address: e.target.value
              }), className: "w-full h-24 bg-secondary/50 border border-border rounded-xl p-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 sm:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground", children: "City *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, value: form.city, onChange: (e) => setForm({
                ...form,
                city: e.target.value
              }), className: "w-full h-12 bg-secondary/50 border border-border rounded-xl px-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 sm:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground", children: "State *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, value: form.state, onChange: (e) => setForm({
                ...form,
                state: e.target.value
              }), className: "w-full h-12 bg-secondary/50 border border-border rounded-xl px-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 sm:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground", children: "Pincode *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, value: form.pincode, onChange: (e) => setForm({
                ...form,
                pincode: e.target.value
              }), className: "w-full h-12 bg-secondary/50 border border-border rounded-xl px-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-card border border-border rounded-3xl p-8 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-semibold mb-6 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm", children: "2" }),
            "Payment Method"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(PaymentBtn, { active: method === "credit", onClick: () => setMethod("credit"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "size-5" }), label: "Credit Card" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(PaymentBtn, { active: method === "debit", onClick: () => setMethod("debit"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "size-5" }), label: "Debit Card" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(PaymentBtn, { active: method === "upi", onClick: () => setMethod("upi"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "size-5" }), label: "UPI / Apps" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 p-4 bg-muted/50 rounded-2xl border border-border/50 text-xs text-muted-foreground flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-4 text-primary" }),
            "Selected: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground uppercase tracking-tight ml-1", children: method })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-3xl p-8 sticky top-24 shadow-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-6", children: "Order Total" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Subtotal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: format(cartTotal) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Shipping" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-green-600", children: "FREE" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xl font-bold border-t border-border pt-4 mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: format(cartTotal) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { form: "checkout-form", type: "submit", className: "w-full py-4 bg-primary text-primary-foreground rounded-2xl font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all flex items-center justify-center gap-2", children: [
          "Place Order via ",
          method.toUpperCase()
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-[10px] text-center text-muted-foreground uppercase tracking-widest font-bold", children: "Secured by Global Herbal Network" })
      ] }) })
    ] })
  ] });
}
function PaymentBtn({
  active,
  onClick,
  icon,
  label
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick, className: `flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border-2 transition-all ${active ? "bg-primary/5 border-primary shadow-inner" : "bg-card border-border hover:bg-secondary"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${active ? "text-primary" : "text-muted-foreground"}`, children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[11px] font-bold uppercase tracking-widest ${active ? "text-primary" : "text-muted-foreground"}`, children: label })
  ] });
}
export {
  CheckoutPage as component
};
