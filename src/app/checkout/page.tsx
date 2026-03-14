"use client";

import { useCartStore } from "@/lib/store/useCartStore";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";
import { ShoppingBag, ShieldCheck, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { items, clearCart } = useCartStore();
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = subtotal > 1500 ? 0 : 80;
  const grandTotal = subtotal + deliveryFee;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate API delay
    setTimeout(() => {
      clearCart();
      toast.success("Order Placed Successfully!", {
        description: "Your beans are getting ready for the urban rush.",
      });
      router.push("/account"); // or order-success page
    }, 2000);
  };

  if (items.length === 0 && !isProcessing) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center bg-zinc-50">
        <ShoppingBag size={64} className="mb-4 text-zinc-300" />
        <h2 className="text-2xl font-black uppercase mb-2">Your Cart is Empty</h2>
        <p className="text-muted-foreground mb-8 text-lg">Let's find you some great coffee.</p>
        <Link href="/shop" className="inline-flex items-center justify-center h-14 px-8 font-bold text-lg bg-amber-600 hover:bg-amber-700 text-white rounded-none transition-colors">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-zinc-50 min-h-screen">
      <div className="border-b border-border/50 bg-white">
        <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-black text-2xl tracking-tighter uppercase">
            Herdless<span className="text-amber-600">.</span>
          </Link>
          <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
            <span>Cart</span> <ChevronRight size={14} /> <span className="text-foreground">Checkout</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Checkout Form */}
          <div className="w-full lg:w-2/3">
            <form id="checkout-form" onSubmit={handleCheckout} className="space-y-12">
              
              {/* Contact Element */}
              <section className="bg-white p-6 md:p-8 border border-border/50">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold uppercase tracking-wider">Contact Information</h2>
                  <p className="text-sm text-muted-foreground">Already have an account? <Link href="/login" className="text-amber-600 hover:underline">Log in</Link></p>
                </div>
                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@example.com" required className="h-12 border-zinc-300 rounded-none focus-visible:ring-amber-600" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone Number (Bangladesh)</Label>
                    <Input id="phone" type="tel" placeholder="+880 1XXXXXXXXX" required className="h-12 border-zinc-300 rounded-none focus-visible:ring-amber-600" />
                  </div>
                  <div className="flex items-center space-x-2 pt-2">
                    <Checkbox id="marketing" className="border-zinc-300 data-[state=checked]:bg-amber-600 data-[state=checked]:border-amber-600" />
                    <Label htmlFor="marketing" className="text-sm font-normal text-muted-foreground">Email me with news and offers</Label>
                  </div>
                </div>
              </section>

              {/* Delivery info */}
              <section className="bg-white p-6 md:p-8 border border-border/50">
                <h2 className="text-xl font-bold uppercase tracking-wider mb-6">Delivery Address</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input id="firstName" required className="h-12 border-zinc-300 rounded-none focus-visible:ring-amber-600" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input id="lastName" required className="h-12 border-zinc-300 rounded-none focus-visible:ring-amber-600" />
                  </div>
                  <div className="grid gap-2 md:col-span-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" placeholder="House/Flat No, Road, Block" required className="h-12 border-zinc-300 rounded-none focus-visible:ring-amber-600" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" defaultValue="Dhaka" required className="h-12 border-zinc-300 rounded-none focus-visible:ring-amber-600" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="postalCode">Postal code</Label>
                    <Input id="postalCode" required className="h-12 border-zinc-300 rounded-none focus-visible:ring-amber-600" />
                  </div>
                </div>
              </section>

              {/* Payment Methods */}
              <section className="bg-white p-6 md:p-8 border border-border/50">
                <h2 className="text-xl font-bold uppercase tracking-wider mb-2">Payment</h2>
                <p className="text-sm text-muted-foreground mb-6">All transactions are secure and encrypted.</p>
                
                <RadioGroup defaultValue="card" className="flex flex-col gap-4">
                  <div className="flex items-start space-x-3 p-4 border border-zinc-200 cursor-pointer hover:bg-zinc-50 transition-colors">
                    <RadioGroupItem value="card" id="r1" className="mt-1" />
                    <Label htmlFor="r1" className="flex-1 cursor-pointer">
                      <div className="font-bold mb-1">Credit/Debit Card</div>
                      <div className="text-sm text-muted-foreground flex gap-1 mb-2">Secure payment via SSLCommerz</div>
                      <div className="flex gap-2">
                        <div className="w-10 h-6 bg-zinc-800 rounded text-[8px] text-white flex items-center justify-center font-bold">VISA</div>
                        <div className="w-10 h-6 bg-zinc-800 rounded text-[8px] text-white flex items-center justify-center font-bold">MC</div>
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-start space-x-3 p-4 border border-zinc-200 cursor-pointer hover:bg-zinc-50 transition-colors">
                    <RadioGroupItem value="mobile" id="r2" className="mt-1" />
                    <Label htmlFor="r2" className="flex-1 cursor-pointer">
                      <div className="font-bold mb-1">Mobile Banking</div>
                      <div className="text-sm text-muted-foreground mb-2">Pay securely using bKash, Nagad, or Upay.</div>
                      <div className="flex gap-2">
                        <div className="px-2 py-1 bg-pink-100 text-pink-700 font-bold text-xs rounded border border-pink-200">bKash</div>
                        <div className="px-2 py-1 bg-orange-100 text-orange-700 font-bold text-xs rounded border border-orange-200">Nagad</div>
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-start space-x-3 p-4 border border-zinc-200 cursor-pointer hover:bg-zinc-50 transition-colors">
                    <RadioGroupItem value="cod" id="r3" className="mt-1" />
                    <Label htmlFor="r3" className="flex-1 cursor-pointer">
                      <div className="font-bold mb-1">Cash on Delivery</div>
                      <div className="text-sm text-muted-foreground">Pay with cash upon delivery.</div>
                    </Label>
                  </div>
                </RadioGroup>
              </section>

              <div className="hidden lg:block">
                <Button 
                  type="submit" 
                  disabled={isProcessing}
                  className="w-full h-16 text-lg font-bold bg-amber-600 hover:bg-amber-700 text-white rounded-none"
                >
                  {isProcessing ? "Processing..." : `Pay ৳${grandTotal}`}
                </Button>
                <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
                  <ShieldCheck size={16} className="text-amber-600" />
                  Your payment information is encrypted and secure.
                </div>
              </div>

            </form>
          </div>

          {/* Order Summary Sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="bg-zinc-950 text-white p-6 md:p-8 sticky top-6">
              <h2 className="text-xl font-bold uppercase tracking-wider mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                {items.map(item => (
                  <div key={item.id} className="flex justify-between items-start">
                    <div className="flex gap-3">
                      <div className="w-16 h-16 bg-zinc-800 flex items-center justify-center flex-shrink-0 relative">
                        <span className="absolute -top-2 -right-2 bg-amber-600/90 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold">
                          {item.quantity}
                        </span>
                        <span className="text-[8px] text-zinc-500 tracking-widest uppercase">HDLS</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-sm line-clamp-2">{item.name}</span>
                        {(item.size || item.grind) && (
                          <span className="text-xs text-zinc-400 mt-1">{item.size} {item.size && item.grind && "·"} {item.grind}</span>
                        )}
                      </div>
                    </div>
                    <span className="font-bold text-sm whitespace-nowrap">৳{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-zinc-800 pt-6 space-y-3 text-sm">
                <div className="flex justify-between text-zinc-300">
                  <span>Subtotal</span>
                  <span>৳{subtotal}</span>
                </div>
                <div className="flex justify-between text-zinc-300">
                  <span>Delivery (Dhaka)</span>
                  <span>{deliveryFee === 0 ? "Free" : `৳${deliveryFee}`}</span>
                </div>
                <div className="flex justify-between font-black text-xl text-white pt-4 border-t border-zinc-800 mt-4">
                  <span>Total</span>
                  <span>৳{grandTotal}</span>
                </div>
              </div>

              <div className="lg:hidden mt-8">
                <Button 
                  type="submit" 
                  form="checkout-form"
                  disabled={isProcessing}
                  className="w-full h-14 text-lg font-bold bg-amber-600 hover:bg-amber-700 text-white rounded-none"
                >
                  {isProcessing ? "Processing..." : `Pay ৳${grandTotal}`}
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
