"use client";

import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/lib/store/useCartStore";
import { Button } from "@/components/ui/button";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, getCartTotal } = useCartStore();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity"
        onClick={closeCart}
      />
      
      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-[450px] bg-zinc-950 border-l border-zinc-800 z-50 flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <ShoppingBag className="text-amber-500" />
            <h2 className="text-xl font-black uppercase text-white tracking-widest">Your Cart</h2>
          </div>
          <button 
            onClick={closeCart}
            className="p-2 text-zinc-400 hover:text-white rounded-full hover:bg-zinc-800 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
              <div className="w-24 h-24 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-700">
                <ShoppingBag size={48} />
              </div>
              <div>
                <p className="text-xl font-bold text-white mb-2 uppercase">Your cart is empty</p>
                <p className="text-zinc-500">Looks like you haven't added any coffee yet.</p>
              </div>
              <Link className="inline-flex items-center justify-center shrink-0 whitespace-nowrap transition-all outline-none select-none h-8 gap-1.5 px-2.5 text-sm font-medium bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-none px-8" href="/shop">Browse Shop</Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 border-b border-zinc-800 pb-6 last:border-0">
                  <div className="w-24 h-24 bg-zinc-900/50 rounded flex-shrink-0 relative overflow-hidden flex items-center justify-center border border-zinc-800">
                    {item.image ? (
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    ) : (
                      <ShoppingBag className="text-zinc-700 w-8 h-8" />
                    )}
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <h3 className="font-bold text-white leading-tight">{item.name}</h3>
                        <p className="text-sm text-zinc-500 mt-1">
                          {item.size} • {item.grind}
                        </p>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-zinc-600 hover:text-red-500 transition-colors p-1"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-zinc-700 rounded-sm">
                        <button 
                          className="px-2 py-1 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors disabled:opacity-50"
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-sm font-medium text-white">{item.quantity}</span>
                        <button 
                          className="px-2 py-1 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className="font-bold text-white">৳{item.price * item.quantity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer / Checkout */}
        {items.length > 0 && (
          <div className="p-6 border-t border-zinc-800 bg-zinc-950/95 backdrop-blur">
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-zinc-400">
                <span>Subtotal</span>
                <span>৳{getCartTotal()}</span>
              </div>
              <div className="flex justify-between text-zinc-400 pb-4 border-b border-zinc-800">
                <span>Estimated Delivery</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between text-white font-bold text-xl pt-2">
                <span>Total</span>
                <span>৳{getCartTotal()}</span>
              </div>
            </div>
            
            <Link 
              className="w-full inline-flex items-center justify-center shrink-0 transition-all outline-none select-none bg-white text-black hover:bg-zinc-200 h-14 text-lg font-bold rounded-none uppercase flex items-center justify-center gap-2"
              onClick={closeCart}
              href="/checkout"
            >
                Proceed to Checkout <ArrowRight size={20} />
            </Link>
            
            <div className="mt-4 flex justify-center space-x-2 opacity-50">
               {/* Placeholders for payment icons */}
               <div className="w-10 h-6 bg-zinc-800 rounded"></div>
               <div className="w-10 h-6 bg-zinc-800 rounded"></div>
               <div className="w-10 h-6 bg-zinc-800 rounded"></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
