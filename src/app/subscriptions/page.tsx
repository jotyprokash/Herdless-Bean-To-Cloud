import { PrismaClient } from "@prisma/client";
import { Check, Coffee, Package, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const prisma = new PrismaClient();

export const dynamic = 'force-dynamic';

export default async function SubscriptionsPage() {
  const plans = await prisma.subscriptionPlan.findMany({
    orderBy: { discountPct: 'desc' }
  });

  return (
    <div className="min-h-screen bg-zinc-50 pb-20">
      
      {/* Hero Section */}
      <section className="bg-zinc-950 text-white py-20 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-600 via-zinc-950 to-zinc-950"></div>
        <div className="container mx-auto relative z-10 text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
            Never Run Dry.
          </h1>
          <p className="text-xl text-zinc-400 font-light mb-8">
            Subscribe to Herdless Delivery. Choose your beans, set your schedule, and save up to 15% on every bag. Modify or cancel anytime.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white border-b border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-black uppercase text-center mb-12 tracking-wide">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center mb-6 text-amber-600">
                <Coffee size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">1. Pick Your Beans</h3>
              <p className="text-muted-foreground text-sm max-w-xs">Select your preferred single origin, signature blend, or capsules.</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center mb-6 text-amber-600">
                <Package size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">2. Set Frequency</h3>
              <p className="text-muted-foreground text-sm max-w-xs">Choose how often you want your fresh roast delivered right to your door.</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center mb-6 text-amber-600">
                <Truck size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">3. Sip & Enjoy</h3>
              <p className="text-muted-foreground text-sm max-w-xs">Freshly roasted coffee arrives precisely when you need it. Free delivery on orders over ৳1500.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">Choose Your Plan</h2>
            <p className="text-muted-foreground">Select a frequency. You'll pick your specific coffee on the next step.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <Card 
                key={plan.id} 
                className={`flex flex-col relative overflow-hidden transition-all duration-300 ${
                  plan.frequency === 'WEEKLY' 
                    ? 'border-2 border-amber-600 shadow-xl scale-105 z-10' 
                    : 'border-border hover:border-amber-600/50'
                }`}
              >
                {plan.frequency === 'WEEKLY' && (
                  <div className="bg-amber-600 text-white text-xs font-bold uppercase text-center py-1 tracking-wider">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-8 flex-1 flex flex-col">
                  <div className="mb-6">
                    <h3 className="text-2xl font-black uppercase mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm h-10">{plan.description}</p>
                  </div>
                  
                  <div className="mb-8">
                    <span className="text-5xl font-black text-amber-600">{plan.discountPct}%</span>
                    <span className="text-lg font-bold text-muted-foreground ml-2">OFF</span>
                  </div>

                  <ul className="space-y-4 mb-8 flex-1">
                    <li className="flex items-start gap-3 text-sm">
                      <Check size={18} className="text-amber-600 flex-shrink-0" />
                      <span>{plan.discountPct}% discount on every bag</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <Check size={18} className="text-amber-600 flex-shrink-0" />
                      <span>Delivery <strong className="lowercase">{plan.frequency}</strong></span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <Check size={18} className="text-amber-600 flex-shrink-0" />
                      <span>Pause or cancel anytime</span>
                    </li>
                  </ul>

                  <Link 
                    className={`flex items-center justify-center w-full h-12 font-bold uppercase tracking-wider rounded-none transition-colors ${
                      plan.frequency === 'WEEKLY' ? 'bg-amber-600 hover:bg-amber-700 text-white' : 'bg-zinc-950 hover:bg-zinc-800 text-white'
                    }`}
                    href={`/shop?subscribe=true&plan=${plan.id}`}
                  >
                      Select Plan
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
