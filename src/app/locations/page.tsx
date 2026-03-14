import { PrismaClient } from "@prisma/client";
import { CopyPlus, MapPin, Phone, Clock, Coffee, Wifi, Car, Utensils, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const prisma = new PrismaClient();

export const dynamic = 'force-dynamic';

export default async function LocationsPage() {
  const stores = await prisma.storeLocation.findMany({
    orderBy: { city: 'asc' }
  });

  return (
    <div className="min-h-screen bg-zinc-50 pb-20">
      
      {/* Header */}
      <div className="bg-zinc-950 text-white py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            Find Your Herd.
          </h1>
          <p className="text-zinc-400 max-w-xl text-lg">
            Visit our roastery and concept stores across Bangladesh. Experience the rush in person.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-5xl px-4 md:px-6 py-12">
        <div className="grid gap-8">
          {stores.map((store) => (
            <Card key={store.id} className="border-border/50 rounded-none overflow-hidden flex flex-col md:flex-row">
              {/* Image Placeholder */}
              <div className="w-full md:w-1/3 bg-zinc-200 min-h-[250px] relative flex flex-col justify-end p-6">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent pointer-events-none z-10"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-30 text-zinc-500 font-bold uppercase tracking-widest text-sm pointer-events-none">
                  STORE IMAGE
                </div>
                <h3 className="text-white text-2xl font-black uppercase relative z-20 mix-blend-overlay">{store.city}</h3>
              </div>
              
              <CardContent className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-black uppercase mb-1">{store.name}</h2>
                    <p className="text-muted-foreground flex items-center gap-2">
                      <MapPin size={16} className="text-amber-600 flex-shrink-0" />
                      {store.address}, {store.city}
                    </p>
                  </div>
                  <Badge variant="outline" className="hidden sm:flex border-amber-600 text-amber-700 bg-amber-50">
                    Open Now
                  </Badge>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 mt-2">
                  <div className="space-y-3">
                    {store.hours && (
                      <div className="flex items-start gap-3 text-sm">
                        <Clock size={18} className="text-zinc-400 flex-shrink-0 mt-0.5" />
                        <span>{store.hours}</span>
                      </div>
                    )}
                    {store.phone && (
                      <div className="flex items-start gap-3 text-sm">
                        <Phone size={18} className="text-zinc-400 flex-shrink-0 mt-0.5" />
                        <span>{store.phone}</span>
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Amenities</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm text-zinc-600">
                      {store.hasDineIn && <span className="flex items-center gap-2"><Utensils size={14}/> Dine-in</span>}
                      {store.hasTakeaway && <span className="flex items-center gap-2"><Coffee size={14}/> Takeaway</span>}
                      {store.hasDelivery && <span className="flex items-center gap-2"><ShoppingBag size={14}/> Delivery</span>}
                      {store.hasWifi && <span className="flex items-center gap-2"><Wifi size={14}/> Free WiFi</span>}
                      {store.hasParking && <span className="flex items-center gap-2"><Car size={14}/> Parking</span>}
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-border flex flex-col sm:flex-row gap-4">
                  <Button variant="outline" className="w-full sm:w-auto font-bold rounded-none border-zinc-300">
                    Get Directions
                  </Button>
                  <Button className="w-full sm:w-auto font-bold rounded-none bg-amber-600 hover:bg-amber-700 text-white">
                    Order Pick-up
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

    </div>
  );
}
