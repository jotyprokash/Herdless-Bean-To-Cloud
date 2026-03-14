import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  console.log('Starting seed...');

  // 1. Categories
  const categoryBeans = await prisma.productCategory.upsert({
    where: { slug: 'coffee-beans' },
    update: {},
    create: {
      name: 'Coffee Beans',
      slug: 'coffee-beans',
      description: 'Premium roasted coffee beans sourced from the finest estates.',
    },
  });

  const categoryCapsules = await prisma.productCategory.upsert({
    where: { slug: 'capsules' },
    update: {},
    create: {
      name: 'Capsules',
      slug: 'capsules',
      description: 'Nespresso-compatible specialty pods.',
    },
  });

  const categorySnacks = await prisma.productCategory.upsert({
    where: { slug: 'snacks-waffles' },
    update: {},
    create: {
      name: 'Snacks & Waffles',
      slug: 'snacks-waffles',
      description: 'Delicious pairing for your coffee.',
    },
  });

  // 2. Products
  const originEspresso = await prisma.product.upsert({
    where: { slug: 'dhaka-origin-espresso' },
    update: {},
    create: {
      name: 'Dhaka Origin Espresso',
      slug: 'dhaka-origin-espresso',
      shortDesc: 'A bold, chocolatey blend crafted for the urban rush.',
      description: 'Our signature blend is roasted medium-dark to punch through milk with notes of dark chocolate, toasted nuts, and a hint of molasses. Perfect for your morning flat white or a lively shot of espresso.',
      categoryId: categoryBeans.id,
      basePrice: 1250.0, // BDT
      tastingNotes: ['Dark Chocolate', 'Toasted Nuts', 'Molasses'],
      roastProfile: 'Medium-Dark',
      isSubscriptionEligible: true,
      variants: {
        create: [
          { name: '250g Whole Bean', sku: 'DOE-250-WB', size: '250g', grind: 'Whole Bean', priceAdj: 0, stock: 100 },
          { name: '250g Espresso Grind', sku: 'DOE-250-EG', size: '250g', grind: 'Espresso', priceAdj: 0, stock: 50 },
          { name: '500g Whole Bean', sku: 'DOE-500-WB', size: '500g', grind: 'Whole Bean', priceAdj: 1000, stock: 20 },
        ],
      },
    },
  });

  const syhletReserve = await prisma.product.upsert({
    where: { slug: 'sylhet-mist-reserve' },
    update: {},
    create: {
      name: 'Sylhet Mist Reserve',
      slug: 'sylhet-mist-reserve',
      shortDesc: 'A delicate light roast with floral aromas.',
      description: 'Inspired by the misty hills of Sylhet. This single origin light roast produces a clean, bright cup with notes of jasmine, honey, and citrus zest. Ideal for pour-over and AeroPress.',
      categoryId: categoryBeans.id,
      basePrice: 1450.0,
      tastingNotes: ['Jasmine', 'Honey', 'Citrus Zest'],
      roastProfile: 'Light',
      isSubscriptionEligible: true,
      variants: {
        create: [
          { name: '250g Whole Bean', sku: 'SMR-250-WB', size: '250g', grind: 'Whole Bean', priceAdj: 0, stock: 50 },
          { name: '250g Filter Grind', sku: 'SMR-250-FG', size: '250g', grind: 'Filter', priceAdj: 0, stock: 30 },
        ],
      },
    },
  });

  const pods = await prisma.product.upsert({
    where: { slug: 'herdless-house-pods' },
    update: {},
    create: {
      name: 'Herdless House Pods',
      slug: 'herdless-house-pods',
      shortDesc: 'Convenient specialty coffee in a pod.',
      description: '10x Nespresso compatible aluminum pods packed with our rich House Blend.',
      categoryId: categoryCapsules.id,
      basePrice: 850.0,
      tastingNotes: ['Caramel', 'Cocoa'],
      isSubscriptionEligible: true,
      variants: {
        create: [
          { name: 'Pack of 10', sku: 'HHP-10', priceAdj: 0, stock: 200 }
        ]
      }
    }
  });

  // 3. Store Locations
  const storeGulshan = await prisma.storeLocation.upsert({
    where: { slug: 'herdless-gulshan' },
    update: {},
    create: {
      name: 'Herdless Coffee - Gulshan Avenue',
      slug: 'herdless-gulshan',
      address: 'Plot 4, Road 11, Gulshan 1',
      city: 'Dhaka',
      phone: '+880 1711-xxxxxx',
      hours: 'Mon-Sun: 8:00 AM - 11:30 PM',
      hasDineIn: true,
      hasTakeaway: true,
      hasDelivery: true,
      hasWifi: true,
      hasParking: true,
    },
  });

  const storeBanani = await prisma.storeLocation.upsert({
    where: { slug: 'herdless-banani' },
    update: {},
    create: {
      name: 'Herdless Roastery - Banani',
      slug: 'herdless-banani',
      address: 'Block E, Road 12, Banani',
      city: 'Dhaka',
      phone: '+880 1711-yyyyyy',
      hours: 'Mon-Sun: 7:30 AM - 12:00 AM',
      hasDineIn: true,
      hasTakeaway: true,
      hasDelivery: true,
      hasWifi: true,
      hasParking: false,
    },
  });

  const storeCtg = await prisma.storeLocation.upsert({
    where: { slug: 'herdless-chattogram' },
    update: {},
    create: {
      name: 'Herdless Coffee - Khulshi',
      slug: 'herdless-chattogram',
      address: 'South Khulshi, Chattogram',
      city: 'Chattogram',
      phone: '+880 1811-zzzzzz',
      hours: 'Mon-Sun: 9:00 AM - 11:00 PM',
      hasDineIn: true,
      hasTakeaway: true,
      hasDelivery: true,
      hasWifi: true,
      hasParking: true,
    },
  });

  // 4. Subscription Plans
  await prisma.subscriptionPlan.createMany({
    skipDuplicates: true,
    data: [
      {
        id: 'plan-weekly',
        name: 'Weekly Brew',
        description: 'Fresh coffee delivered every week. Never run out.',
        frequency: 'WEEKLY',
        discountPct: 15,
      },
      {
        id: 'plan-biweekly',
        name: 'Bi-Weekly Discovery',
        description: 'A moderate pace. Delivery every two weeks.',
        frequency: 'BIWEEKLY',
        discountPct: 10,
      },
      {
        id: 'plan-monthly',
        name: 'Monthly Reserve',
        description: 'Bulk delivery once a month.',
        frequency: 'MONTHLY',
        discountPct: 5,
      }
    ]
  });

  // 5. Gift Card Presets (simulated, we will just rely on logic later, no complex presets needed in DB schema, but we can seed one active code)
  await prisma.giftCard.upsert({
    where: { code: 'WELCOME-HERD-500' },
    update: {},
    create: {
      code: 'WELCOME-HERD-500',
      initialValue: 500,
      balance: 500,
      message: 'Welcome to Herdless Coffee!',
    }
  });

  // 6. Career Openings
  await prisma.careerJob.upsert({
    where: { slug: 'senior-barista-dhaka' },
    update: {},
    create: {
      title: 'Senior Barista',
      slug: 'senior-barista-dhaka',
      department: 'Operations',
      location: 'Dhaka',
      type: 'Full-time',
      description: 'Join the Herdless team as a Senior Barista. You will lead the coffee bar, train junior staff, and ensure absolute quality in every cup.',
      requirements: ['3+ years specialty coffee experience', 'Latte art proficiency', 'Leadership skills'],
    }
  });

  console.log('Seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
