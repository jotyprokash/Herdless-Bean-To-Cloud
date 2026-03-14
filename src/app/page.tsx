import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Coffee, Navigation, PlayCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col w-full pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center bg-zinc-950 overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-900/80 to-transparent z-10" />
          <div className="w-full h-full bg-zinc-800 animate-pulse flex items-center justify-center opacity-30">
            <span className="text-zinc-600 font-mono">HERO_IMAGE_PLACEHOLDER.JPG</span>
          </div>
        </div>
        
        <div className="container relative z-20 px-4 md:px-6">
          <div className="max-w-2xl text-white space-y-6">
            <div className="inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-sm text-amber-500 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-amber-500 mr-2 animate-pulse"></span>
              Newly roasted batch available
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
              Fuel For <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                The Urban Rush.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-300 max-w-lg font-light leading-relaxed">
              Premium specialty coffee sourced globally, roasted locally in Dhaka. Bold flavors for those who refuse to follow the herd.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/shop" className="inline-flex shrink-0 items-center justify-center border border-transparent whitespace-nowrap outline-none select-none bg-amber-600 hover:bg-amber-700 text-white font-bold h-14 px-8 text-lg rounded-none transition-all">
                  Shop Coffee
                  <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/locations" className="inline-flex shrink-0 items-center justify-center whitespace-nowrap outline-none select-none border border-white text-white hover:bg-white hover:text-black font-bold h-14 px-8 text-lg rounded-none transition-colors">
                  <Navigation className="mr-2 h-5 w-5" />
                  Find a Store
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY TEASERS */}
      <section className="py-20 bg-zinc-50 border-b border-zinc-200">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight uppercase">Drink Outside The Lines</h2>
            <p className="text-muted-foreground max-w-2xl">Browse our meticulously crafted categories. Whether you need an extreme caffeine punch or a smooth, balanced morning ritual.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Specialty Beans", desc: "Whole bean & ground", href: "/shop?category=coffee-beans", color: "bg-zinc-900", textColor: "text-white" },
              { title: "House Pods", desc: "Nespresso compatible", href: "/shop?category=capsules", color: "bg-amber-100", textColor: "text-amber-950" },
              { title: "Waffles & Bakes", desc: "The perfect pairing", href: "/shop?category=snacks-waffles", color: "bg-zinc-200", textColor: "text-zinc-900" },
            ].map((cat, i) => (
              <Link key={i} href={cat.href} className={`group relative h-80 overflow-hidden flex flex-col justify-end p-8 ${cat.color} transition-transform hover:-translate-y-2`}>
                <div className={`relative z-10 ${cat.textColor}`}>
                  <h3 className="text-2xl font-black uppercase mb-2">{cat.title}</h3>
                  <p className="font-medium opacity-80 flex items-center gap-2">
                    {cat.desc} <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </p>
                </div>
                {/* Decorative shape */}
                <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BEST SELLERS */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight uppercase mb-2">The Usual Suspects</h2>
              <p className="text-muted-foreground">Our most popular roasts right now.</p>
            </div>
            <Link href="/shop" className="hidden sm:inline-flex shrink-0 items-center justify-center whitespace-nowrap outline-none select-none h-8 px-2.5 text-sm font-medium hover:bg-zinc-100 transition-colors">
              View all <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Mock Products (We will fetch from DB in the real Shop page) */}
            {[1, 2, 3, 4].map((item) => (
              <Card key={item} className="border-border/50 rounded-none overflow-hidden group border transition-shadow hover:shadow-lg">
                <div className="aspect-square bg-zinc-100 relative p-6 flex flex-col items-center justify-center">
                  <div className="absolute top-3 left-3 flex gap-2">
                    {item === 1 && <span className="bg-amber-500 text-white text-[10px] uppercase font-bold px-2 py-1 tracking-wider">Bestseller</span>}
                  </div>
                  {/* Bag Placeholder shape */}
                  <div className="w-24 h-36 bg-zinc-800 rounded-t-lg rounded-b flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform duration-500">
                    <span className="text-zinc-600 font-bold rotate-[-90deg]">HERDLESS</span>
                  </div>
                </div>
                <CardContent className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg leading-tight uppercase line-clamp-2">
                      {item === 1 ? "Dhaka Origin Espresso" : item === 2 ? "Sylhet Mist Reserve" : item === 3 ? "Midnight Oil Dark" : "The Daily Grind"}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-1">
                    {item === 1 ? "Dark Chocolate, Nuts" : "Jasmine, Honey, Citrus"}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">৳{1200 + item * 50}</span>
                    <Button size="sm" variant="outline" className="font-bold rounded-none border-zinc-300">
                      View options
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Link href="/shop" className="w-full mt-6 sm:hidden inline-flex shrink-0 items-center justify-center whitespace-nowrap outline-none select-none h-8 px-2.5 text-sm font-medium border border-zinc-200 transition-colors">
            View all products
          </Link>
        </div>
      </section>

      {/* 4. SUBSCRIPTION PROMO */}
      <section className="py-0 relative overflow-hidden bg-zinc-950 text-white">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 md:p-24 flex flex-col justify-center z-10 relative">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">Never Start The Day Empty.</h2>
            <p className="text-lg text-zinc-400 mb-8 max-w-md">
              Subscribe to Herdless Delivery and get your favorite beans delivered exactly when you need them. Save 15% on every bag, forever.
            </p>
            <ul className="space-y-4 mb-10">
              {['Choose your blend', 'Set your delivery frequency', 'Pause or cancel anytime', 'Free delivery on 500g+'].map((benefit, i) => (
                <li key={i} className="flex items-center text-zinc-300">
                  <Coffee className="mr-3 h-5 w-5 text-amber-500" />
                  <span className="font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
            <Link href="/subscriptions" className="inline-flex shrink-0 items-center justify-center border border-transparent whitespace-nowrap outline-none select-none bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-none w-fit h-14 px-8 text-lg transition-all">
              Build Your Plan
            </Link>
          </div>
          
          <div className="lg:w-1/2 min-h-[400px] lg:min-h-full bg-zinc-900 relative">
            {/* Image Placeholder */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAnIGhlaWdodD0nMTAwJz48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPScjMWYxZjFmJy8+PGxpbmUgeDE9JzAnIHkxPScwJyB4Mj0nMTAwJScgeTI9JzEwMCUnIHN0cm9rZT0nIzI3MjcyNycgc3Ryb2tlLXdpZHRoPScyJy8+PGxpbmUgeDE9JzEwMCUnIHkxPScwJyB4Mj0nMCcgeTI9JzEwMCUnIHN0cm9rZT0nIzI3MjcyNycgc3Ryb2tlLXdpZHRoPScyJy8+PC9zdmc+')] opacity-20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 border-[4px] border-amber-500/30 rounded-full flex items-center justify-center animate-spin-slow">
                <div className="w-48 h-48 border-[2px] border-amber-500/50 rounded-full flex items-center justify-center border-dashed">
                </div>
              </div>
              <div className="absolute text-center">
                <PlayCircle className="h-16 w-16 text-amber-500 mx-auto mb-2 opacity-80" />
                <span className="uppercase font-bold tracking-widest text-xs text-amber-500">Watch Video</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
