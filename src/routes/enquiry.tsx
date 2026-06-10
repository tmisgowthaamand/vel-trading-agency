import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PRODUCTS } from "@/lib/products";
import { Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/enquiry")({
  head: () => ({
    meta: [
      { title: "Bulk Enquiry — Vel Trading Agency" },
      { name: "description", content: "Request a custom quote for wholesale or export orders of herbs, seeds, roots and dried flowers." },
      { property: "og:title", content: "Bulk Enquiry — Vel Trading Agency" },
      { property: "og:description", content: "Request a custom quote for wholesale or export orders." },
    ],
  }),
  component: Enquiry,
});

function Enquiry() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", product: "", qty: "", message: "" });

  const onChange = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `Enquiry from ${form.name}${form.company ? " (" + form.company + ")" : ""}\n` +
      `Email: ${form.email}\nPhone: ${form.phone}\n` +
      `Product: ${form.product}\nQty: ${form.qty}\n\n${form.message}`;
    window.open(`https://wa.me/918124675463?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
  };

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <header className="text-center">
        <h1 className="text-display text-4xl sm:text-5xl font-semibold">Bulk & Export Enquiry</h1>
        <p className="mt-3 text-muted-foreground">Tell us what you need. Our team replies within one business day.</p>
      </header>

      {sent ? (
        <div className="mt-12 p-10 rounded-2xl bg-card border border-border text-center">
          <CheckCircle2 className="size-12 text-primary mx-auto" />
          <h2 className="mt-4 text-display text-2xl font-semibold">Thank you!</h2>
          <p className="mt-2 text-muted-foreground">Your enquiry has been prepared. If WhatsApp didn't open automatically, please email us at <a className="text-primary underline" href="mailto:veltradingagency@gmail.com">veltradingagency@gmail.com</a>.</p>
          <button onClick={() => { setSent(false); setForm({ name: "", company: "", email: "", phone: "", product: "", qty: "", message: "" }); }} className="mt-6 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
            Send another
          </button>
        </div>
      ) : (
        <form onSubmit={submit} className="mt-10 p-6 sm:p-8 rounded-2xl bg-card border border-border space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Full name *" required value={form.name} onChange={onChange("name")} />
            <Field label="Company" value={form.company} onChange={onChange("company")} />
            <Field label="Email *" type="email" required value={form.email} onChange={onChange("email")} />
            <Field label="Phone *" type="tel" required value={form.phone} onChange={onChange("phone")} />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block text-sm">
              <span className="font-medium">Product of interest</span>
              <select value={form.product} onChange={onChange("product")} className="mt-1.5 w-full h-11 rounded-lg border border-border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
                <option value="">Select a product</option>
                {PRODUCTS.map((p) => <option key={p.id} value={p.name}>{p.name}</option>)}
                <option value="Other / Multiple">Other / Multiple</option>
              </select>
            </label>
            <Field label="Quantity (kg / tons)" value={form.qty} onChange={onChange("qty")} placeholder="e.g. 50 kg" />
          </div>
          <label className="block text-sm">
            <span className="font-medium">Message</span>
            <textarea
              value={form.message}
              onChange={onChange("message")}
              rows={5}
              placeholder="Tell us about your grade, packing and shipping requirements."
              className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </label>
          <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90">
            Send enquiry <Send className="size-4" />
          </button>
        </form>
      )}
    </div>
  );
}

function Field(props: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  const { label, ...rest } = props;
  return (
    <label className="block text-sm">
      <span className="font-medium">{label}</span>
      <input {...rest} className="mt-1.5 w-full h-11 rounded-lg border border-border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
    </label>
  );
}
