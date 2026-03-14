import { Coffee, Star, Gift, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RewardsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 pb-20">
      
      {/* Hero Section */}
      <section className="bg-zinc-950 text-white py-24 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500 via-zinc-950 to-zinc-950"></div>
        <div className="container mx-auto relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-sm text-amber-500 backdrop-blur-sm mb-6 uppercase tracking-widest font-bold">
            Herdless Rewards
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 relative">
            Drink Coffee. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Earn Respect.</span>
          </h1>
          <p className="text-xl text-zinc-400 font-light mb-8 max-w-xl mx-auto">
            Join the Herd. Earn points for every Taka spent. Redeem for free drinks, beans, and exclusive merchandise.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white font-bold h-14 px-8 text-lg rounded-none">
              Join Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black font-bold h-14 px-8 text-lg rounded-none transition-colors">
              Sign In
            </Button>
          </div>
        </div>
      </section>

      {/* Tiers Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">The Hierarchy</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-16">
            Our rewards program has three tiers. As you drink more coffee, your status elevates, unlocking greater benefits.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            <div className="border border-border p-8 relative flex flex-col items-center group hover:border-zinc-400 transition-colors">
              <div className="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center mb-6 text-zinc-600">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-black uppercase tracking-widest text-zinc-600 mb-2">Member</h3>
              <p className="text-sm font-bold text-muted-foreground mb-6 uppercase tracking-wider">0 - 5,000 Points</p>
              <ul className="text-left space-y-3 text-sm text-zinc-600 w-full mb-8">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zinc-400" /> 1 Point per ৳10 spent</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zinc-400" /> Free Birthday Drink</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zinc-400" /> Order Ahead in App</li>
              </ul>
            </div>

            <div className="border-2 border-amber-600 p-8 relative flex flex-col items-center shadow-lg -mt-4 mb-4 bg-zinc-950 text-white">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600"></div>
              <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mb-6 text-amber-500">
                <Star size={32} className="fill-amber-500/20" />
              </div>
              <h3 className="text-xl font-black uppercase tracking-widest text-amber-500 mb-2">Gold Status</h3>
              <p className="text-sm font-bold text-zinc-400 mb-6 uppercase tracking-wider">5,000 - 15,000 Points</p>
              <ul className="text-left space-y-3 text-sm text-zinc-300 w-full mb-8">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500" /> 1.5 Points per ৳10 spent</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Free Extra Shots / Milk Alts</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Early Access to New Roasts</li>
              </ul>
            </div>

            <div className="border border-border p-8 relative flex flex-col items-center group hover:border-indigo-400 transition-colors">
              <div className="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center mb-6 text-indigo-900">
                <Star size={32} className="fill-indigo-900" />
              </div>
              <h3 className="text-xl font-black uppercase tracking-widest text-indigo-950 mb-2">Black Card</h3>
              <p className="text-sm font-bold text-muted-foreground mb-6 uppercase tracking-wider">15,000+ Points</p>
              <ul className="text-left space-y-3 text-sm text-zinc-600 w-full mb-8">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400" /> 2 Points per ৳10 spent</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400" /> Free Shipping on Everything</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400" /> Invite to Cupping Sessions</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
      
      {/* Rewards Catalog */}
      <section className="py-20 bg-zinc-100 border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tight mb-2">Reward Catalog</h2>
              <p className="text-muted-foreground">What your points can buy.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { pts: 500, label: "Free Add-on (Shot/Syrup)" },
              { pts: 1500, label: "Any Standard Drink" },
              { pts: 2500, label: "Signature Waffle" },
              { pts: 5000, label: "250g Bag of Beans" }
            ].map((reward, i) => (
              <div key={i} className="bg-white p-6 border border-border flex flex-col items-center text-center hover:border-amber-500/50 transition-colors">
                <Gift className="mb-4 text-amber-600" size={32} />
                <span className="font-black text-xl text-amber-600 mb-1">{reward.pts}</span>
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Points</span>
                <p className="font-bold text-sm">{reward.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
