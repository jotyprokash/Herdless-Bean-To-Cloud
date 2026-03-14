import { PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";
import { AddToCartForm } from "@/components/shop/AddToCartForm";
import { ArrowLeft, CheckCircle2, ChevronDown } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const prisma = new PrismaClient();

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await prisma.product.findUnique({
    where: { slug },
    include: {
      category: true,
      variants: true,
    },
  });

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen pb-20">
      
      {/* Breadcrumb / Back Navigation */}
      <div className="border-b border-border/50">
        <div className="container mx-auto px-4 md:px-6 py-4 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/shop" className="hover:text-foreground flex items-center gap-1 transition-colors">
            <ArrowLeft size={14} /> Back to Shop
          </Link>
          <span>/</span>
          <Link href={`/shop?category=${product.category.slug}`} className="hover:text-foreground transition-colors">
            {product.category.name}
          </Link>
          <span>/</span>
          <span className="text-foreground font-medium truncate">{product.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          
          {/* Images Section */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div className="aspect-square bg-zinc-100 flex items-center justify-center relative p-12">
               {/* Huge Placeholder Image area */}
               <div className="absolute inset-0 bg-gradient-to-tr from-zinc-200/50 to-transparent pointer-events-none" />
               <div className="w-48 sm:w-64 h-72 sm:h-96 bg-zinc-900 rounded-t-xl rounded-b flex items-center justify-center shadow-2xl relative z-10">
                 <span className="text-zinc-700 font-bold rotate-[-90deg] whitespace-nowrap opacity-50 text-3xl tracking-widest">
                   HERDLESS
                 </span>
               </div>
            </div>
          </div>

          {/* Product Info Section */}
          <div className="w-full md:w-1/2 flex flex-col">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-2">
              {product.name}
            </h1>
            
            <p className="text-lg text-muted-foreground mb-6">
              {product.shortDesc}
            </p>

            <AddToCartForm 
              product={{
                id: product.id,
                name: product.name,
                basePrice: product.basePrice,
                isSubscriptionEligible: product.isSubscriptionEligible
              }} 
              variants={product.variants} 
            />

            <div className="mt-12 space-y-8">
              <div className="prose prose-zinc max-w-none text-muted-foreground">
                <p>{product.description}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 py-6 border-y border-border">
                {product.tastingNotes && product.tastingNotes.length > 0 && (
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider mb-2">Tasting Notes</h4>
                    <p className="text-muted-foreground">{product.tastingNotes.join(" • ")}</p>
                  </div>
                )}
                {product.roastProfile && (
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider mb-2">Roast Profile</h4>
                    <p className="text-muted-foreground">{product.roastProfile}</p>
                  </div>
                )}
              </div>

              <Accordion className="w-full">
                <AccordionItem value="shipping">
                  <AccordionTrigger className="uppercase font-bold tracking-wider text-sm">Shipping & Returns</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-4">
                    <p className="flex items-start gap-2">
                      <CheckCircle2 size={18} className="text-amber-600 mt-0.5 flex-shrink-0" />
                      We roast to order. Orders placed before 12PM are dispatched the next business day.
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 size={18} className="text-amber-600 mt-0.5 flex-shrink-0" />
                      Free standard shipping within Dhaka on orders over ৳1500.
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 size={18} className="text-amber-600 mt-0.5 flex-shrink-0" />
                      If you're not happy with your beans, contact us within 7 days for a replacement.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="brewing">
                  <AccordionTrigger className="uppercase font-bold tracking-wider text-sm">Brewing Guide</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p>For best results, we recommend resting your beans for 7-10 days straight after roasting. Use clean, filtered water just off the boil (93°C / 200°F). Our recommended espresso recipe is 18g in, 36g out, over 28-30 seconds.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
