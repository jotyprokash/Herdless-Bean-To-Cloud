import { PrismaClient } from "@prisma/client";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const prisma = new PrismaClient();

export const dynamic = 'force-dynamic';

export default async function CareersPage() {
  const jobs = await prisma.careerJob.findMany({
    where: { isActive: true },
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="min-h-screen bg-white pb-20">
      
      {/* Header */}
      <section className="bg-zinc-950 text-white py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
            Join The Herd.
          </h1>
          <p className="text-xl text-zinc-400 font-light mx-auto max-w-2xl">
            We're building the most energetic, premium coffee brand in Bangladesh. We want individuals who are passionate, fast-moving, and obsessed with quality.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-zinc-50 border-b border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-5xl mx-auto">
            <div>
              <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center mx-auto mb-4 font-black text-xl">1</div>
              <h3 className="font-black uppercase tracking-wider mb-2">Obsess Over Quality</h3>
              <p className="text-muted-foreground text-sm">From sourcing to dialing in the espresso machine, we don't take shortcuts.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center mx-auto mb-4 font-black text-xl">2</div>
              <h3 className="font-black uppercase tracking-wider mb-2">Move Fast</h3>
              <p className="text-muted-foreground text-sm">The urban rush is our habitat. We operate with intense speed and precision.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center mx-auto mb-4 font-black text-xl">3</div>
              <h3 className="font-black uppercase tracking-wider mb-2">Think Different</h3>
              <p className="text-muted-foreground text-sm">We're Herdless. We innovate on products, operations, and community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl font-black uppercase tracking-tight mb-8">Open Positions</h2>
          
          {jobs.length === 0 ? (
            <div className="p-12 text-center border border-dashed border-zinc-300 bg-zinc-50 text-muted-foreground">
              No open positions right now. Check back later!
            </div>
          ) : (
            <div className="space-y-4">
              {jobs.map((job) => (
                <div key={job.id} className="border border-border hover:border-amber-600 transition-colors p-6 group flex flex-col md:flex-row justify-between md:items-center gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-2 py-1">
                        {job.department}
                      </span>
                    </div>
                    <h3 className="text-xl font-black uppercase mb-2 group-hover:text-amber-600 transition-colors">{job.title}</h3>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><MapPin size={14}/> {job.location}</span>
                      <span className="flex items-center gap-1"><Clock size={14}/> {job.type}</span>
                    </div>
                  </div>
                  <div>
                    <Button variant="outline" className="font-bold rounded-none border-zinc-300 group-hover:border-amber-600 group-hover:text-amber-600">
                      Apply Now <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
