import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-900 w-full">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-amber-500 rounded flex items-center justify-center text-zinc-950 font-black text-xl tracking-tighter">
                HC
              </div>
              <span className="text-2xl font-black uppercase text-white tracking-tight">
                Herdless
              </span>
            </Link>
            <p className="text-sm border-l-2 border-amber-500 pl-4 py-1 leading-relaxed">
              Premium specialty coffee for the urban rush. Roasted fresh in Dhaka, Bangladesh. Break away from the herd.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-amber-500 hover:text-zinc-950 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-amber-500 hover:text-zinc-950 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-amber-500 hover:text-zinc-950 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Shop</h3>
            <ul className="space-y-3">
              {[
                { name: "All Coffee", href: "/shop" },
                { name: "Coffee Beans", href: "/shop?category=beans" },
                { name: "Espresso Pods", href: "/shop?category=pods" },
                { name: "Subscriptions", href: "/subscriptions" },
                { name: "Gift Cards", href: "/gift-cards" },
                { name: "Merchandise", href: "/shop?category=merch" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-amber-500 transition-colors inline-block hover:translate-x-1 transform duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Support</h3>
            <ul className="space-y-3">
              {[
                { name: "My Account", href: "/account" },
                { name: "Track Order", href: "/account/orders" },
                { name: "Contact Us", href: "/contact" },
                { name: "Store Locations", href: "/locations" },
                { name: "Careers", href: "/careers" },
                { name: "FAQ", href: "/contact#faq" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-amber-500 transition-colors inline-block hover:translate-x-1 transform duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-sm">
                <MapPin size={18} className="mr-3 text-amber-500 mt-0.5 shrink-0" />
                <span>House 42, Road 12, Banani<br/>Dhaka 1213, Bangladesh</span>
              </li>
              <li className="flex items-center text-sm">
                <Phone size={18} className="mr-3 text-amber-500 shrink-0" />
                <span>+880 1711 112233</span>
              </li>
              <li className="flex items-center text-sm">
                <Mail size={18} className="mr-3 text-amber-500 shrink-0" />
                <a href="mailto:hello@herdless.com.bd" className="hover:text-amber-500 transition-colors">hello@herdless.com.bd</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-zinc-900 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Herdless Coffee BD. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/legal/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/legal/refunds" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
