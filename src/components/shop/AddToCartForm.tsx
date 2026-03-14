"use client";

import { useState } from "react";
import { useCartStore } from "@/lib/store/useCartStore";
import { Button } from "@/components/ui/button";
import { CopyPlus, Minus, Plus } from "lucide-react";
import { toast } from "sonner";

interface Variant {
  id: string;
  name: string;
  priceAdj: number;
  size: string | null;
  grind: string | null;
}

interface AddToCartProps {
  product: {
    id: string;
    name: string;
    basePrice: number;
    isSubscriptionEligible: boolean;
  };
  variants: Variant[];
}

export function AddToCartForm({ product, variants }: AddToCartProps) {
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(
    variants.length > 0 ? variants[0] : null
  );
  const [quantity, setQuantity] = useState(1);
  const [purchaseType, setPurchaseType] = useState<"onetime" | "subscribe">("onetime");
  
  const { addItem } = useCartStore();

  const currentPrice = product.basePrice + (selectedVariant?.priceAdj || 0);

  const handleAdd = () => {
    addItem({
      id: selectedVariant ? selectedVariant.id : product.id,
      productId: product.id,
      name: product.name,
      price: currentPrice,
      quantity,
      size: selectedVariant?.size || undefined,
      grind: selectedVariant?.grind || undefined,
    });
    
    toast.success("Added to cart", {
      description: `${quantity}x ${product.name} ${selectedVariant ? `(${selectedVariant.name})` : ''}`,
    });
  };

  return (
    <div className="space-y-8">
      {/* Price */}
      <h2 className="text-3xl font-black">৳{currentPrice}</h2>

      {/* Variants Selection */}
      {variants.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Select Option</h3>
          <div className="flex flex-wrap gap-3">
            {variants.map((v) => (
              <button
                key={v.id}
                onClick={() => setSelectedVariant(v)}
                className={`px-4 py-3 border font-medium text-sm transition-all ${
                  selectedVariant?.id === v.id
                    ? "border-amber-600 bg-amber-50 text-amber-900"
                    : "border-border hover:border-amber-600/50"
                }`}
              >
                {v.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Purchase Options */}
      {product.isSubscriptionEligible && (
        <div className="space-y-4 pt-4 border-t border-border">
          <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Purchase Type</h3>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setPurchaseType("onetime")}
              className={`p-4 border text-left transition-all ${
                purchaseType === "onetime"
                  ? "border-zinc-950 bg-zinc-50"
                  : "border-border hover:border-zinc-400"
              }`}
            >
              <div className="font-bold flex items-center justify-between">
                One-time <div className={`w-4 h-4 rounded-full border ${purchaseType === "onetime" ? "border-4 border-zinc-900" : "border-zinc-300"}`} />
              </div>
              <p className="text-sm text-muted-foreground mt-1">Standard purchase</p>
            </button>
            
            <button
              onClick={() => setPurchaseType("subscribe")}
              className={`p-4 border text-left transition-all relative overflow-hidden ${
                purchaseType === "subscribe"
                  ? "border-amber-600 bg-amber-50"
                  : "border-border hover:border-amber-600/50"
              }`}
            >
              <div className="absolute top-0 right-0 bg-amber-600 text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider">
                Save 15%
              </div>
              <div className="font-bold text-amber-950 flex items-center justify-between">
                Subscribe <div className={`w-4 h-4 rounded-full border ${purchaseType === "subscribe" ? "border-4 border-amber-600 bg-amber-50" : "border-zinc-300"}`} />
              </div>
              <p className="text-sm text-amber-700/80 mt-1">Delivered on your schedule</p>
            </button>
          </div>
        </div>
      )}

      {/* Action Area */}
      <div className="flex gap-4 pt-4">
        {/* Quantiy Selector */}
        <div className="flex items-center border border-border">
          <button 
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-12 h-14 flex items-center justify-center text-muted-foreground hover:bg-zinc-100 transition-colors disabled:opacity-50"
            disabled={quantity <= 1}
          >
            <Minus size={16} />
          </button>
          <span className="w-12 text-center font-bold">{quantity}</span>
          <button 
            onClick={() => setQuantity(quantity + 1)}
            className="w-12 h-14 flex items-center justify-center text-muted-foreground hover:bg-zinc-100 transition-colors"
          >
            <Plus size={16} />
          </button>
        </div>
        
        <Button 
          size="lg" 
          className="flex-1 h-14 text-white font-bold text-lg rounded-none bg-zinc-950 hover:bg-amber-600 transition-colors"
          onClick={handleAdd}
        >
          {purchaseType === "subscribe" ? "Add Subscription to Cart" : "Add to Cart"}
        </Button>
      </div>
      
    </div>
  );
}
