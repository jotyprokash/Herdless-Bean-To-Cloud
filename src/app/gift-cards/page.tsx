"use client";

import { useState } from "react";
import { Gift, Mail, Calendar, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCartStore } from "@/lib/store/useCartStore";
import { toast } from "sonner";
import Image from "next/image";

const PRESET_AMOUNTS = [500, 1000, 2000, 5000];

export default function GiftCardsPage() {
  const [amount, setAmount] = useState<number>(1000);
  const [recipient, setRecipient] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const { addItem } = useCartStore();

  const handleAddToCart = () => {
    if (!recipient || !email) {
      toast.error("Please fill in recipient details");
      return;
    }
    
    addItem({
      id: `giftcard-${amount}-${Date.now()}`,
      productId: "digital-gift-card",
      name: "Digital Gift Card",
      price: amount,
      quantity: 1,
      size: `৳${amount}`,
      grind: "Digital Delivery",
    });
    
    toast.success("Gift Card Added", {
      description: `৳${amount} gift card for ${recipient}`
    });
    
    setRecipient("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-zinc-50 pb-20">
      
      {/* Header */}
      <div className="bg-zinc-950 text-white py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="w-16 h-16 bg-amber-600/20 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Gift size={32} />
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            Give The Gift Of Caffeine.
          </h1>
          <p className="text-zinc-400 max-w-xl mx-auto text-lg">
            Digital gift cards delivered instantly via email. The perfect last-minute gift for the coffee addict in your life.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Card Preview */}
          <div className="w-full md:w-1/2">
            <div className="sticky top-24">
              <div className="aspect-[1.586/1] w-full bg-zinc-900 rounded-2xl relative overflow-hidden shadow-2xl p-8 flex flex-col justify-between">
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-zinc-600/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
                
                <div className="relative z-10 flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-amber-500 rounded flex items-center justify-center text-zinc-950 font-black tracking-tighter shadow-sm">
                      HC
                    </div>
                    <span className="text-2xl font-black uppercase text-white tracking-tight">
                      Herdless
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-white/60 text-xs font-bold uppercase tracking-widest block mb-1">Gift Card</span>
                    <span className="text-3xl font-black text-white tracking-tighter">৳{amount}</span>
                  </div>
                </div>
                
                <div className="relative z-10 flex justify-between items-end">
                  <div>
                    <span className="text-white/50 text-[10px] uppercase tracking-widest block mb-1">To</span>
                    <span className="text-white font-medium text-lg capitalize">{recipient || "Recipient Name"}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-white/50 text-[10px] uppercase tracking-widest block mb-1">From</span>
                    <span className="text-white font-medium">You</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white border border-border/50 rounded-lg">
                  <Mail className="text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm uppercase">Instant Digital Delivery</h4>
                    <p className="text-sm text-muted-foreground mt-1">Cards are emailed directly to the recipient immediately after checkout.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white border border-border/50 rounded-lg">
                  <CreditCard className="text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm uppercase">Redeemable Online & In-Store</h4>
                    <p className="text-sm text-muted-foreground mt-1">Can be used for any beans, merch, or drinks at our cafes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Configuration Form */}
          <div className="w-full md:w-1/2 bg-white p-6 md:p-8 border border-border/50">
            <h2 className="text-2xl font-black uppercase tracking-tight mb-6">Configure Your Gift</h2>
            
            <div className="space-y-8">
              {/* Amount Selection */}
              <div>
                <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 block">Select Amount (BDT)</Label>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {PRESET_AMOUNTS.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setAmount(preset)}
                      className={`py-3 text-center border font-bold transition-all ${
                        amount === preset
                          ? "border-amber-600 bg-amber-50 text-amber-900"
                          : "border-border hover:border-amber-600/50"
                      }`}
                    >
                      ৳{preset}
                    </button>
                  ))}
                </div>
              </div>

              {/* Recipient Details */}
              <div className="space-y-4 pt-6 border-t border-border/50">
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Recipient Details</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="recipient">Recipient's Name *</Label>
                  <Input 
                    id="recipient" 
                    placeholder="E.g. Sarah" 
                    className="h-12 bg-zinc-50 border-zinc-200"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Recipient's Email *</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="sarah@example.com" 
                    className="h-12 bg-zinc-50 border-zinc-200"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Personal Message (Optional)</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Happy Birthday! Have a coffee on me." 
                    className="resize-none h-24 bg-zinc-50 border-zinc-200"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
              </div>

              {/* Add to Cart */}
              <div className="pt-6 border-t border-border/50">
                <Button 
                  className="w-full h-14 bg-zinc-950 hover:bg-amber-600 text-white font-bold text-lg uppercase tracking-wider rounded-none transition-colors"
                  onClick={handleAddToCart}
                >
                  Add To Cart - ৳{amount}
                </Button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
