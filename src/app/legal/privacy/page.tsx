import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Herdless Coffee BD',
  description: 'Our privacy policy detailing how we manage and protect your data.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white pb-20 pt-16">
      <div className="container mx-auto max-w-3xl px-4 md:px-6">
        <h1 className="text-4xl font-black uppercase tracking-tighter mb-8 mt-12">Privacy Policy</h1>
        
        <div className="prose prose-zinc max-w-none text-muted-foreground">
          <p className="font-bold text-foreground">Last updated: October 2024</p>
          
          <h2 className="text-xl font-bold uppercase text-foreground mt-8 mb-4">1. Information We Collect</h2>
          <p>We collect information you provide directly to us when you create an account, make a purchase, or communicate with us. This includes your name, email address, postal address, phone number, and payment information (processed securely through our partners like SSLCommerz/bKash/Nagad).</p>
          
          <h2 className="text-xl font-bold uppercase text-foreground mt-8 mb-4">2. How We Use Your Information</h2>
          <p>We use the information we collect to process transactions, deliver products in Bangladesh, manage your Herdless Rewards account, and send marketing communications (if you've opted in).</p>

          <h2 className="text-xl font-bold uppercase text-foreground mt-8 mb-4">3. Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information against unauthorized access or alteration. However, no internet transmission is ever completely secure.</p>
          
          <h2 className="text-xl font-bold uppercase text-foreground mt-8 mb-4">4. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@herdless.com.bd" className="text-amber-600 hover:underline">privacy@herdless.com.bd</a>.</p>
        </div>
      </div>
    </div>
  );
}
