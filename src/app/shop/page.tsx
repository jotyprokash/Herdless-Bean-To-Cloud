import { PrismaClient } from "@prisma/client";
import { ProductCard } from "@/components/shop/ProductCard";
import { Filter } from "lucide-react";

// In real app, avoid instantiating Prisma inside the file
const prisma = new PrismaClient();

export const dynamic = 'force-dynamic';

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category: categorySlug } = await searchParams;

  const products = await prisma.product.findMany({
    where: categorySlug ? { category: { slug: categorySlug } } : undefined,
    include: {
      category: true,
      variants: true,
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  const categories = await prisma.productCategory.findMany();

  return (
    <div className="min-h-screen bg-zinc-50 pb-20">
      
      {/* HEADER */}
      <div className="bg-zinc-950 text-white py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            {categorySlug 
              ? categories.find(c => c.slug === categorySlug)?.name || "Shop"
              : "All Products"
            }
          </h1>
          <p className="text-zinc-400 max-w-xl text-lg">
            Sourced for maximum impact. Roasted for the urban rush. Browse our collection of specialty coffees, capsules, and bakes.
          </p>
        </div>
      </div>

      {/* SHOP BODY */}
      <div className="container mx-auto px-4 md:px-6 py-12 flex flex-col md:flex-row gap-8">
        
        {/* SIDEBAR FILTERS */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-24 bg-white p-6 border border-border/50">
            <h2 className="font-bold flex items-center gap-2 uppercase tracking-wide mb-6">
              <Filter size={18} /> Filters
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/shop" className={`text-sm ${!categorySlug ? 'font-bold text-amber-600' : 'hover:text-amber-600'}`}>
                      All Products
                    </a>
                  </li>
                  {categories.map(cat => (
                    <li key={cat.id}>
                      <a 
                        href={`/shop?category=${cat.slug}`} 
                        className={`text-sm ${categorySlug === cat.slug ? 'font-bold text-amber-600' : 'hover:text-amber-600'}`}
                      >
                        {cat.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </aside>

        {/* PRODUCT GRID */}
        <main className="flex-1">
          {products.length === 0 ? (
            <div className="bg-white p-12 text-center border border-border/50">
              <h3 className="text-xl font-bold mb-2">No products found</h3>
              <p className="text-muted-foreground">Try selecting a different category from the filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
