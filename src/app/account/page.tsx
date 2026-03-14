"use client";

import { User, Package, MapPin, CreditCard, RefreshCw, Star, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function AccountPage() {
  // Simulating an authenticated user for the demo since auth might not be fully wired up
  // In a real app we'd use useSession() from next-auth
  const user = {
    name: "Ayman Khan",
    email: "ayman@example.com",
    tier: "Gold Status",
    points: 8450
  };

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "orders", label: "Order History", icon: Package },
    { id: "addresses", label: "Addresses", icon: MapPin },
    { id: "subscriptions", label: "Subscriptions", icon: RefreshCw },
    { id: "rewards", label: "Rewards Wallet", icon: Star },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 pb-20">
      
      <div className="bg-zinc-950 text-white py-12 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl flex justify-between items-end">
          <div>
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-2">
              My Account
            </h1>
            <p className="text-zinc-400 font-medium">
              Welcome back, {user.name}
            </p>
          </div>
          <Button variant="outline" className="text-zinc-400 border-zinc-700 hover:text-white hover:bg-zinc-800 hidden sm:flex">
            <LogOut size={16} className="mr-2" /> Sign Out
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white border border-border/50 p-2 rounded-lg sticky top-24">
              <nav className="space-y-1">
                {tabs.map((tab, i) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-bold uppercase tracking-wider rounded-md transition-colors ${
                        i === 0 
                          ? "bg-amber-50 text-amber-700" 
                          : "text-zinc-600 hover:bg-zinc-100"
                      }`}
                    >
                      <Icon size={18} />
                      {tab.label}
                    </button>
                  );
                })}
                <button className="w-full sm:hidden flex items-center gap-3 px-4 py-3 text-sm font-bold uppercase tracking-wider rounded-md text-red-600 hover:bg-red-50 transition-colors mt-4">
                  <LogOut size={18} />
                  Sign Out
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 space-y-8">
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="border-border/50 shadow-sm bg-zinc-950 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 bg-amber-600/20 text-amber-500 rounded-full flex items-center justify-center">
                      <Star size={20} className="fill-amber-500/20" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">{user.tier}</span>
                  </div>
                  <h3 className="text-3xl font-black">{user.points} <span className="text-lg text-amber-500">Pts</span></h3>
                  <Link href="/rewards" className="text-sm text-zinc-400 hover:text-white mt-2 inline-block transition-colors underline underline-offset-4 pointer-events-auto relative z-10">
                    View Rewards Catalog
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 bg-zinc-100 text-zinc-600 rounded-full flex items-center justify-center">
                      <RefreshCw size={20} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-green-600 bg-green-50 px-2 py-1 rounded">Active</span>
                  </div>
                  <h3 className="text-xl font-black mb-1">Weekly Brew</h3>
                  <p className="text-sm text-muted-foreground">Next delivery: Oct 24</p>
                </CardContent>
              </Card>
            </div>

            {/* Profile Info Placeholder */}
            <Card className="border-border/50 shadow-sm">
              <div className="p-6 border-b border-border/50 bg-zinc-50/50 flex justify-between items-center">
                <h2 className="text-lg font-black uppercase tracking-wide">Personal Information</h2>
                <Button variant="outline" size="sm">Edit</Button>
              </div>
              <CardContent className="p-6 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">Full Name</label>
                    <p className="font-medium">{user.name}</p>
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">Email Address</label>
                    <p className="font-medium">{user.email}</p>
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">Phone Number</label>
                    <p className="font-medium">+880 1711 000000</p>
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">Password</label>
                    <p className="font-medium">••••••••</p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
}
