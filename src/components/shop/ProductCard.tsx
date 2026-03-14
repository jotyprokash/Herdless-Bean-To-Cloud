"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/store/useCartStore";

interface ProductVariant {
  id: string;
  name: string;
  priceAdj: number;
}

interface ProductProps {
  product: {
    id: string;
    slug: string;
    name: string;
    shortDesc: string;
    basePrice: number;
    tastingNotes?: string[];
    variants?: ProductVariant[];
  };
}

export function ProductCard({ product }: ProductProps) {
  const { addItem } = useCartStore();

  const handleQuickAdd = () => {
    // For quick add, just grab the base product or first variant
    const variant = product.variants?.[0];
    const itemPrice = product.basePrice + (variant?.priceAdj || 0);
    
    addItem({
      id: variant ? variant.id : product.id,
      productId: product.id,
      name: product.name,
      price: itemPrice,
      quantity: 1,
      size: variant?.name,
    });
  };

  return (
    <div className="flex flex-col group h-full bg-white border border-border/50 hover:border-amber-500/30 hover:shadow-xl transition-all duration-300">
      <Link href={`/shop/${product.slug}`} className="flex-1">
        <div className="aspect-square bg-zinc-100 relative p-6 flex flex-col items-center justify-center overflow-hidden">
          {/* Bag Placeholder */}
          <div className="w-24 h-36 bg-zinc-900 rounded-t-lg rounded-b flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-500 relative z-10">
            <span className="text-zinc-700 font-bold rotate-[-90deg] whitespace-nowrap opacity-50 text-xl tracking-widest">
              HERDLESS
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-200/50 to-transparent z-0" />
        </div>
        
        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-bold text-lg leading-tight uppercase line-clamp-2 mb-2 group-hover:text-amber-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
            {product.shortDesc}
          </p>
          
          {product.tastingNotes && product.tastingNotes.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-4">
              {product.tastingNotes.slice(0, 3).map((note, i) => (
                <span key={i} className="text-[10px] uppercase font-bold tracking-wider bg-zinc-100 px-2 py-1 rounded-sm text-zinc-600">
                  {note}
                </span>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
            <span className="font-black text-lg">৳{product.basePrice}</span>
          </div>
        </div>
      </Link>
      
      <div className="p-5 pt-0 mt-auto">
        <Button 
          className="w-full font-bold uppercase tracking-wider h-12 rounded-none bg-zinc-950 text-white hover:bg-amber-600 transition-colors duration-300"
          onClick={handleQuickAdd}
        >
          Quick Add
        </Button>
      </div>
    </div>
  );
}
