import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Herdless Coffee BD',
  description: 'Terms and conditions for using the Herdless Coffee website and placing orders.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white pb-20 pt-16">
      <div className="container mx-auto max-w-3xl px-4 md:px-6">
        <h1 className="text-4xl font-black uppercase tracking-tighter mb-8 mt-12">Terms of Service</h1>
        
        <div className="prose prose-zinc max-w-none text-muted-foreground">
          <p className="font-bold text-foreground">Last updated: October 2024</p>
          
          <h2 className="text-xl font-bold uppercase text-foreground mt-8 mb-4">1. Introduction</h2>
          <p>Welcome to Herdless Coffee BD. By accessing our website or purchasing our products, you agree to be bound by these Terms of Service.</p>
          
          <h2 className="text-xl font-bold uppercase text-foreground mt-8 mb-4">2. Eligibility</h2>
          <p>You must be at least 18 years old or visiting under the supervision of a parent or guardian to use this website to place orders within Bangladesh.</p>

          <h2 className="text-xl font-bold uppercase text-foreground mt-8 mb-4">3. Products & Pricing</h2>
          <p>All prices are indicated in Bangladeshi Taka (BDT). Prices and availability of products are subject to change without notice. We make every effort to display the colors and images of our products accurately.</p>

          <h2 className="text-xl font-bold uppercase text-foreground mt-8 mb-4">4. Subscription Terms</h2>
          <p>If you purchase a subscription plan, you agree to recurring billing based on the frequency selected (weekly, bi-weekly, or monthly). Subscriptions can be paused or cancelled at any time through your account dashboard.</p>
        </div>
      </div>
    </div>
  );
}
