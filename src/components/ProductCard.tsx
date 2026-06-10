import { Plus } from "lucide-react";
import type { Product } from "@/lib/products";
import { useShop } from "@/context/ShopContext";

export default function ProductCard({ product }: { product: Product }) {
  const { format, addToCart } = useShop();
  return (
    <div className="group rounded-2xl bg-card border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-0.5">
      <div className="aspect-square overflow-hidden bg-secondary/50">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{product.category}</div>
        <h3 className="text-display text-lg font-semibold mt-0.5 leading-tight">{product.name}</h3>
        <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2">{product.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <div>
            <div className="text-base font-semibold text-primary">{format(product.priceINR)}</div>
            <div className="text-[10px] text-muted-foreground">per Kg</div>
          </div>
          <button
            onClick={() => addToCart(product)}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity"
          >
            <Plus className="size-3.5" /> Add
          </button>
        </div>
      </div>
    </div>
  );
}
