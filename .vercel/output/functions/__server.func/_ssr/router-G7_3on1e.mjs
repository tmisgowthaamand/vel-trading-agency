import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Leaf, S as ShoppingCart, X, M as Menu, a as MapPin, P as Phone, b as Mail, c as ShoppingBag, d as Minus, e as Plus, T as Trash2, A as ArrowRight } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
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
const appCss = "/assets/styles-BuZ6kvhK.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const RATES = {
  USD: { rate: 1, symbol: "$", locale: "en-US", code: "USD" },
  INR: { rate: 83.2, symbol: "₹", locale: "en-IN", code: "INR" },
  EUR: { rate: 0.92, symbol: "€", locale: "de-DE", code: "EUR" }
};
const Ctx = reactExports.createContext(null);
function ShopProvider({ children }) {
  const [currency, setCurrencyState] = reactExports.useState("USD");
  const [cart, setCart] = reactExports.useState([]);
  reactExports.useEffect(() => {
    try {
      const c = localStorage.getItem("vel_currency");
      if (c && RATES[c]) setCurrencyState(c);
      const raw = localStorage.getItem("vel_cart");
      if (raw) setCart(JSON.parse(raw));
    } catch {
    }
  }, []);
  reactExports.useEffect(() => {
    try {
      localStorage.setItem("vel_cart", JSON.stringify(cart));
    } catch {
    }
  }, [cart]);
  const setCurrency = (c) => {
    setCurrencyState(c);
    try {
      localStorage.setItem("vel_currency", c);
    } catch {
    }
  };
  const format = (priceUSD) => {
    const cfg = RATES[currency];
    const value2 = priceUSD * cfg.rate;
    return new Intl.NumberFormat(cfg.locale, {
      style: "currency",
      currency: cfg.code,
      maximumFractionDigits: currency === "INR" ? 0 : 2
    }).format(value2);
  };
  const formatRange = (range) => {
    const cfg = RATES[currency];
    const parts = range.split("-").map((p) => parseFloat(p.trim()));
    if (parts.length !== 2 || parts.some(isNaN)) return format(parseFloat(range) || 0);
    const formattedParts = parts.map((v) => {
      const value2 = v * cfg.rate;
      return new Intl.NumberFormat(cfg.locale, {
        style: "currency",
        currency: cfg.code,
        maximumFractionDigits: currency === "INR" ? 0 : 2
      }).format(value2);
    });
    return `${formattedParts[0]} - ${formattedParts[1]}`;
  };
  const addToCart = (p, qty = 1) => {
    setCart((prev) => {
      const found = prev.find((i) => i.product.id === p.id);
      if (found) return prev.map((i) => i.product.id === p.id ? { ...i, qty: i.qty + qty } : i);
      return [...prev, { product: p, qty }];
    });
  };
  const removeFromCart = (id) => setCart((prev) => prev.filter((i) => i.product.id !== id));
  const updateQty = (id, qty) => setCart((prev) => prev.map((i) => i.product.id === id ? { ...i, qty: Math.max(1, qty) } : i));
  const clearCart = () => setCart([]);
  const value = reactExports.useMemo(() => ({
    currency,
    setCurrency,
    format,
    formatRange,
    cart,
    addToCart,
    removeFromCart,
    updateQty,
    clearCart,
    cartCount: cart.reduce((s, i) => s + i.qty, 0),
    cartTotal: cart.reduce((s, i) => s + i.product.priceUSD * i.qty, 0)
  }), [currency, cart]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Ctx.Provider, { value, children });
}
function useShop() {
  const v = reactExports.useContext(Ctx);
  if (!v) throw new Error("useShop must be used within ShopProvider");
  return v;
}
function CartDrawer({ open, onClose }) {
  const { cart, removeFromCart, updateQty, cartTotal, format, clearCart } = useShop();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `fixed inset-0 z-50 bg-foreground/30 backdrop-blur-sm transition-opacity ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`,
        onClick: onClose
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "aside",
      {
        className: `fixed top-0 right-0 z-50 h-full w-full max-w-md bg-background shadow-2xl transition-transform ${open ? "translate-x-0" : "translate-x-full"} flex flex-col`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-5 border-b border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "size-5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-display text-lg font-semibold", children: "Your Cart" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "size-9 rounded-full hover:bg-secondary grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-5" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto p-5 space-y-4", children: cart.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16 text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "size-10 mx-auto mb-3 opacity-40" }),
            "Your cart is empty."
          ] }) : cart.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 p-3 rounded-xl bg-secondary/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.product.image, alt: item.product.name, className: "size-20 rounded-lg object-cover" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium truncate", children: item.product.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
                format(item.product.priceUSD),
                " / Kg"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => updateQty(item.product.id, item.qty - 1), className: "size-7 grid place-items-center rounded-md border border-border hover:bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "size-3.5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm w-6 text-center", children: item.qty }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => updateQty(item.product.id, item.qty + 1), className: "size-7 grid place-items-center rounded-md border border-border hover:bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "size-3.5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => removeFromCart(item.product.id), className: "ml-auto text-muted-foreground hover:text-destructive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "size-4" }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right text-sm font-semibold whitespace-nowrap", children: format(item.product.priceUSD * item.qty) })
          ] }, item.product.id)) }),
          cart.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border p-5 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Subtotal" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-semibold", children: format(cartTotal) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-snug", children: "Secure checkout available with Credit, Debit, and UPI options." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 pt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/checkout",
                  onClick: onClose,
                  className: "w-full inline-flex items-center justify-center p-4 rounded-2xl text-sm font-bold bg-primary text-primary-foreground hover:opacity-90 shadow-lg shadow-primary/20 transition-all gap-2",
                  children: [
                    "Checkout Now ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: clearCart,
                  className: "w-full py-3 rounded-xl text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors",
                  children: "Clear Cart"
                }
              )
            ] })
          ] })
        ]
      }
    )
  ] });
}
const NAV = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/enquiry", label: "Enquiry" },
  { to: "/contact", label: "Contact" }
];
function Header() {
  const { currency, setCurrency, cartCount } = useShop();
  const [open, setOpen] = reactExports.useState(false);
  const [cartOpen, setCartOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-40 backdrop-blur-md bg-background/85 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-16 items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2 group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-9 rounded-full bg-primary text-primary-foreground grid place-items-center shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "size-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-display text-lg font-semibold", children: "Vel Trading" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.18em] text-muted-foreground", children: "Agency · Madurai" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-7 text-sm font-medium", children: NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: n.to,
            className: "text-foreground/75 hover:text-primary transition-colors",
            activeProps: { className: "text-primary" },
            activeOptions: { exact: n.to === "/" },
            children: n.label
          },
          n.to
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden sm:flex items-center rounded-full border border-border bg-secondary/60 p-0.5 text-xs font-medium", children: ["USD", "INR", "EUR"].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setCurrency(c),
              className: `px-2.5 py-1 rounded-full transition-colors ${currency === c ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`,
              children: c
            },
            c
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setCartOpen(true),
              className: "relative inline-flex items-center justify-center size-10 rounded-full bg-secondary hover:bg-secondary/70 transition-colors",
              "aria-label": "Open cart",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "size-5" }),
                cartCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full bg-accent text-accent-foreground text-[11px] font-semibold grid place-items-center", children: cartCount })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "md:hidden inline-flex items-center justify-center size-10 rounded-full bg-secondary",
              onClick: () => setOpen((v) => !v),
              "aria-label": "Toggle menu",
              children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "size-5" })
            }
          )
        ] })
      ] }),
      open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:hidden pb-4 space-y-1", children: [
        NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: n.to,
            onClick: () => setOpen(false),
            className: "block px-3 py-2 rounded-lg text-sm font-medium hover:bg-secondary",
            activeProps: { className: "bg-secondary text-primary" },
            children: n.label
          },
          n.to
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 px-3 pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground mr-2", children: "Currency:" }),
          ["USD", "INR", "EUR"].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setCurrency(c),
              className: `px-2.5 py-1 rounded-full text-xs ${currency === c ? "bg-primary text-primary-foreground" : "bg-secondary"}`,
              children: c
            },
            c
          ))
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CartDrawer, { open: cartOpen, onClose: () => setCartOpen(false) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-24 border-t border-border bg-secondary/40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-10 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-9 rounded-full bg-primary text-primary-foreground grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "size-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-display text-xl font-semibold", children: "Vel Trading Agency" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground max-w-md", children: "Authentic herbs, seeds, roots & florals sourced from Tamil Nadu's farms. Wholesale & export inquiries welcome." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 text-xs text-muted-foreground space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: "GST:" }),
            " 33ABCFV1505G1ZM"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: "MSME:" }),
            " UDYAM-TN-12-0182473"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: "Business PAN:" }),
            " ABCFV1505G"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold mb-3", children: "Explore" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", className: "hover:text-primary", children: "Products" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "hover:text-primary", children: "About" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/enquiry", className: "hover:text-primary", children: "Bulk Enquiry" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:text-primary", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold mb-3", children: "Reach us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-4 mt-0.5 shrink-0" }),
            " 102/103, Velar Street, Arapalayam, Madurai, Tamil Nadu – 625016"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-4 mt-0.5 shrink-0" }),
            " +91 81246 75463"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "size-4 mt-0.5 shrink-0" }),
            " veltradingagency@gmail.com"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-[10px] sm:text-xs text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-x-6 gap-y-2 order-2 md:order-1 font-medium", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shipping-policy", className: "hover:text-primary transition-colors", children: "Shipping Policy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/refund-policy", className: "hover:text-primary transition-colors", children: "Cancellation & Refund" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/privacy-policy", className: "hover:text-primary transition-colors", children: "Privacy Policy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/terms", className: "hover:text-primary transition-colors", children: "Terms & Conditions" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center md:text-right order-1 md:order-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Vel Trading Agency. Madurai, India."
      ] }) })
    ] }) })
  ] });
}
function Layout({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$c = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Vel Trading Agency — Herbs, Seeds & Roots from Madurai" },
      { name: "description", content: "Vel Trading Agency, Madurai — wholesale and retail supplier of authentic Tamil Nadu herbs, seeds, roots and dried flowers." },
      { name: "author", content: "Vel Trading Agency" },
      { property: "og:title", content: "Vel Trading Agency" },
      { property: "og:description", content: "Authentic herbs, seeds, roots & florals sourced from Tamil Nadu." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", suppressHydrationWarning: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { suppressHydrationWarning: true, children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$c.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShopProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }) }) });
}
const $$splitComponentImporter$a = () => import("./terms-Bl8aNmea.mjs");
const Route$b = createFileRoute("/terms")({
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const BASE_URL = "";
const Route$a = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", priority: "1.0" },
          { path: "/products", priority: "0.9" },
          { path: "/about", priority: "0.7" },
          { path: "/enquiry", priority: "0.8" },
          { path: "/contact", priority: "0.7" }
        ];
        const urls = entries.map((e) => `  <url><loc>${BASE_URL}${e.path}</loc><priority>${e.priority}</priority></url>`).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" }
        });
      }
    }
  }
});
const $$splitComponentImporter$9 = () => import("./shipping-policy-Cg3jZN3z.mjs");
const Route$9 = createFileRoute("/shipping-policy")({
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./refund-policy-kk4bjrCa.mjs");
const Route$8 = createFileRoute("/refund-policy")({
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./products-DU36xI15.mjs");
const Route$7 = createFileRoute("/products")({
  head: () => ({
    meta: [{
      title: "Products — Vel Trading Agency"
    }, {
      name: "description",
      content: "Browse our catalogue of authentic Tamil Nadu herbs, seeds, roots, dried flowers and spices."
    }, {
      property: "og:title",
      content: "Products — Vel Trading Agency"
    }, {
      property: "og:description",
      content: "Browse our catalogue of authentic Tamil Nadu herbs, seeds, roots and dried flowers."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./privacy-policy-EAb-xUYd.mjs");
const Route$6 = createFileRoute("/privacy-policy")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./enquiry-Cv-1cU3h.mjs");
const Route$5 = createFileRoute("/enquiry")({
  validateSearch: (search) => objectType({
    product: stringType().optional()
  }).parse(search),
  head: () => ({
    meta: [{
      title: "Bulk Enquiry & RFQ — Vel Trading Agency"
    }, {
      name: "description",
      content: "Submit a Request for Quotation (RFQ) for wholesale or export orders."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./contact-DkOZZenl.mjs");
const Route$4 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — Vel Trading Agency"
    }, {
      name: "description",
      content: "Get in touch with Vel Trading Agency in Madurai for orders, enquiries and partnerships."
    }, {
      property: "og:title",
      content: "Contact Vel Trading Agency"
    }, {
      property: "og:description",
      content: "Reach Vel Trading Agency in Madurai by phone, email or WhatsApp."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./checkout-pL3C8K6K.mjs");
const Route$3 = createFileRoute("/checkout")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./about-DEVBjISb.mjs");
const Route$2 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — Vel Trading Agency"
    }, {
      name: "description",
      content: "A Madurai-based partnership firm trading in authentic Tamil Nadu herbs, seeds and roots."
    }, {
      property: "og:title",
      content: "About Vel Trading Agency"
    }, {
      property: "og:description",
      content: "Madurai-based partnership firm trading in authentic Tamil Nadu herbs."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-BT67Mwhn.mjs");
const Route$1 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Vel Trading Agency — Authentic Herbs from Madurai"
    }, {
      name: "description",
      content: "Wholesale supplier of senna, moringa, ashwagandha, vettiver, hibiscus and more — direct from Tamil Nadu."
    }, {
      property: "og:title",
      content: "Vel Trading Agency"
    }, {
      property: "og:description",
      content: "Wholesale supplier of authentic Tamil Nadu herbs, seeds, roots and dried flowers."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./products_._productId-Dlh3isDq.mjs");
const Route = createFileRoute("/products_/$productId")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const TermsRoute = Route$b.update({
  id: "/terms",
  path: "/terms",
  getParentRoute: () => Route$c
});
const SitemapDotxmlRoute = Route$a.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$c
});
const ShippingPolicyRoute = Route$9.update({
  id: "/shipping-policy",
  path: "/shipping-policy",
  getParentRoute: () => Route$c
});
const RefundPolicyRoute = Route$8.update({
  id: "/refund-policy",
  path: "/refund-policy",
  getParentRoute: () => Route$c
});
const ProductsRoute = Route$7.update({
  id: "/products",
  path: "/products",
  getParentRoute: () => Route$c
});
const PrivacyPolicyRoute = Route$6.update({
  id: "/privacy-policy",
  path: "/privacy-policy",
  getParentRoute: () => Route$c
});
const EnquiryRoute = Route$5.update({
  id: "/enquiry",
  path: "/enquiry",
  getParentRoute: () => Route$c
});
const ContactRoute = Route$4.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$c
});
const CheckoutRoute = Route$3.update({
  id: "/checkout",
  path: "/checkout",
  getParentRoute: () => Route$c
});
const AboutRoute = Route$2.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$c
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$c
});
const ProductsProductIdRoute = Route.update({
  id: "/products_/$productId",
  path: "/products/$productId",
  getParentRoute: () => Route$c
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  CheckoutRoute,
  ContactRoute,
  EnquiryRoute,
  PrivacyPolicyRoute,
  ProductsRoute,
  RefundPolicyRoute,
  ShippingPolicyRoute,
  SitemapDotxmlRoute,
  TermsRoute,
  ProductsProductIdRoute
};
const routeTree = Route$c._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route$5 as R,
  Route as a,
  router as r,
  useShop as u
};
