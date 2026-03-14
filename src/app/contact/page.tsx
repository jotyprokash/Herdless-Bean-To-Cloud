"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent successfully", {
        description: "We'll get back to you within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-zinc-50 pb-20">
      
      <section className="bg-zinc-950 text-white py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            Get In Touch.
          </h1>
          <p className="text-xl text-zinc-400 font-light mx-auto max-w-2xl">
            Questions about your order? Want to franchise or wholesale? Drop us a line.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            
            {/* Contact Details */}
            <div className="w-full lg:w-1/3 space-y-10">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Support & General Info</h3>
                <div className="space-y-4 text-sm font-medium">
                  <p className="flex items-center gap-3">
                    <Mail size={18} className="text-amber-600" /> support@herdless.com.bd
                  </p>
                  <p className="flex items-center gap-3">
                    <Phone size={18} className="text-amber-600" /> +880 96XX-XXXXXX
                  </p>
                  <p className="flex items-center gap-3 text-muted-foreground">
                    <Clock size={18} className="text-zinc-400" /> Mon-Sat, 9AM-6PM
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">HQ Address</h3>
                <div className="space-y-4 text-sm font-medium">
                  <p className="flex items-start gap-3">
                    <MapPin size={18} className="text-amber-600 mt-1" />
                    <span>
                      Herdless Roasters Ltd.<br />
                      Level 4, XYZ Tower,<br />
                      Gulshan Avenue, Dhaka 1212<br />
                      Bangladesh
                    </span>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Wholesale/B2B</h3>
                <p className="text-sm font-medium text-muted-foreground">
                  Interested in serving Herdless Coffee at your cafe or office? Contact <strong className="text-foreground">b2b@herdless.com.bd</strong> for wholesale accounts.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="w-full lg:w-2/3 bg-white p-6 md:p-10 border border-border mt-0 lg:-mt-32 relative z-10 shadow-xl">
              <h2 className="text-2xl font-black uppercase tracking-wide mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" required className="h-12 border-zinc-300 rounded-none focus-visible:ring-amber-600" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" required className="h-12 border-zinc-300 rounded-none focus-visible:ring-amber-600" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="topic">Topic</Label>
                  <Select required>
                    <SelectTrigger id="topic" className="h-12 border-zinc-300 rounded-none focus:ring-amber-600">
                      <SelectValue placeholder="What is this regarding?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="order">Online Order Status</SelectItem>
                      <SelectItem value="feedback">Product/Store Feedback</SelectItem>
                      <SelectItem value="wholesale">Wholesale Enquiry</SelectItem>
                      <SelectItem value="careers">Careers</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" required className="min-h-[150px] border-zinc-300 rounded-none focus-visible:ring-amber-600" placeholder="Type your message here..." />
                </div>
                <Button type="submit" disabled={loading} className="w-full h-14 bg-amber-600 hover:bg-amber-700 text-white font-bold text-lg rounded-none mt-4">
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
