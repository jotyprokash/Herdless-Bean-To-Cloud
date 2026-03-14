import { PrismaClient } from "@prisma/client";
import { CopyPlus, MapPin, Search, Clock, Motorbike, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ProductCard } from "@/components/shop/ProductCard";

const prisma = new PrismaClient();

export const dynamic = 'force-dynamic';

export default async function OrderDeliveryPage() {
  const stores = await prisma.storeLocation.findMany({
    where: { hasDelivery: true },
    orderBy: { city: 'asc' }
  });

  const products = await prisma.product.findMany({
    where: {
      category: {
        slug: { in: ['coffee-beans', 'snacks-waffles', 'capsules'] } // Simulating a delivery menu
      }
    },
    include: {
      variants: true
    },
    take: 8
  });

  return (
    <div className="min-h-screen bg-zinc-50 pb-20">
      
      {/* Header */}
      <div className="bg-amber-600 text-white py-12 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <MapPin size={24} />
            </div>
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
              Order Delivery
            </h1>
          </div>
          <p className="text-amber-100 max-w-xl text-lg font-medium">
            Get your coffee fix delivered right to your desk or door. Hot, fresh, and uncompromising.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8">
        
        {/* Delivery Location selector */}
        <section className="bg-white p-6 md:p-8 border border-border/50 shadow-sm mb-12">
          <h2 className="text-xl font-bold uppercase tracking-tight mb-6">1. Where are we going?</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input 
                placeholder="Enter your delivery address in Dhaka or Chattogram..." 
                className="pl-12 h-14 bg-zinc-50 border-zinc-200 text-lg"
              />
            </div>
            <Button className="h-14 bg-zinc-950 text-white px-8 rounded-none uppercase font-bold tracking-wider">
              Check Stores
            </Button>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border">
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">Available Delivery Hubs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {stores.map(store => (
                <div key={store.id} className="border border-border p-4 hover:border-amber-600 cursor-pointer transition-colors group">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold">{store.name}</h4>
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-1.5 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{store.city}</p>
                  <div className="flex items-center gap-2 text-xs font-medium text-amber-700 bg-amber-50 w-fit px-2 py-1 rounded">
                    <Clock size={14} /> ~35 min delivery
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-black uppercase tracking-tight mb-2">2. Build Your Order</h2>
            <div className="flex gap-2">
              <span className="px-4 py-2 bg-zinc-950 text-white text-sm font-bold uppercase">Drinks</span>
              <span className="px-4 py-2 bg-white border border-border text-zinc-600 text-sm font-bold uppercase hidden md:block">Food</span>
              <span className="px-4 py-2 bg-white border border-border text-zinc-600 text-sm font-bold uppercase hidden md:block">Beans</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
        
      </div>
    </div>
  );
}
