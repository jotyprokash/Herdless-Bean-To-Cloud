import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy | Herdless Coffee BD',
  description: 'Our policy regarding returns, refunds, and replacements for coffee and merchandise.',
};

export default function RefundsPage() {
  return (
    <div className="min-h-screen bg-white pb-20 pt-16">
      <div className="container mx-auto max-w-3xl px-4 md:px-6">
        <h1 className="text-4xl font-black uppercase tracking-tighter mb-8 mt-12">Refund Policy</h1>
        
        <div className="prose prose-zinc max-w-none text-muted-foreground">
          <h2 className="text-xl font-bold uppercase text-foreground mt-8 mb-4">Coffee Guarantee</h2>
          <p>Coffee is a perishable product, and we roast to order to ensure you receive the freshest beans possible. Therefore, we do not accept returns on roasted coffee beans.</p>
          <p>However, we're obsessed with quality. If you're not satisfied with the quality of your coffee, please contact us within 7 days of receiving your order at <a href="mailto:support@herdless.com.bd" className="text-amber-600 hover:underline">support@herdless.com.bd</a> with your order number. We will either send a replacement bag or issue a store credit/refund at our discretion.</p>
          
          <h2 className="text-xl font-bold uppercase text-foreground mt-8 mb-4">Merchandise & Gear</h2>
          <p>Unused and unopened merchandise, brewing gear, or non-coffee items may be returned within 14 days of delivery. The item must be in its original packaging and in the same condition that you received it.</p>
          
          <h2 className="text-xl font-bold uppercase text-foreground mt-8 mb-4">Refund Process</h2>
          <p>If you are approved for a refund, it will be processed within 5-7 business days. A credit will automatically be applied to your original method of payment (bKash, Nagad, or Credit Card).</p>
        </div>
      </div>
    </div>
  );
}
