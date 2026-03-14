# Herdless Coffee BD - E-Commerce Platform

A production-grade, original coffee brand website and commerce platform for a Bangladesh-based brand ("Herdless Coffee BD"). Built with Next.js 14+, TypeScript, Tailwind CSS, shadcn/ui, and Prisma.

## Key Features

- **Modern Premium UI:** Energetic, youthful, and professional design built with Tailwind and shadcn/ui.
- **E-Commerce Storefront:** Dynamic product listings with categories, filtering, and a slide-out cart drawer.
- **Subscriptions:** Customers can subscribe for weekly, bi-weekly, or monthly coffee deliveries.
- **Gift Cards:** Digital gift cards with email delivery and custom messaging.
- **Rewards Program:** A three-tier loyalty system (Member, Gold, Black Card) to earn points.
- **Delivery Ordering:** Dedicated flow for quick delivery orders from specific hubs.
- **Store Locator:** Detailed store pages with amenities and maps.
- **Careers & Contact:** Pages for operational and business expansions.
- **SEO & Performance:** Optimized metadata, dynamically generated sitemaps, and robots.txt.
- **Admin-Ready Data Structure:** Prisma schema designed to support robust admin dashboards in the future.

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui + Framer Motion
- **State Management:** Zustand (for Cart)
- **Database:** PostgreSQL via Prisma ORM
- **Deployment:** Vercel (or Docker)

## Setup Instructions

### 1. Environment Variables

Create a \`.env\` file in the root based on \`.env.example\`:

```bash
cp .env.example .env
```

Ensure your `DATABASE_URL` is pointing to a local or remote PostgreSQL database.

### 2. Install Dependencies

```bash
npm install
```

### 3. Database Migration & Seeding

This project uses Prisma. To initialize the database and tables:

```bash
npx prisma generate
npx prisma db push
```

To seed the database with Bangladesh-specific sample products, categories, locations, and more:

```bash
npm run seed
```
*(Uses the `prisma/seed.ts` script)*

### 4. Run Development Server

```bash
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

## Docker Setup

To run the application via Docker:

1. Build the production image:
   ```bash
   docker-compose build
   ```
2. Start the services (PostgreSQL + Web):
   ```bash
   docker-compose up -d
   ```
3. Run the seed inside the web container:
   ```bash
   docker exec -it herdless_web npx prisma db push
   docker exec -it herdless_web npm run seed
   ```

## Next Steps

- **Authentication:** Integrate NextAuth or Clerk.
- **Payments:** Wire up the UI to an actual payment gateway (Stripe, SSLCommerz, bKash, or Nagad).
- **Admin Panel:** Build a separate dashboard using the robust Prisma schema created.
- **Localization:** Add i18n support for Bangla (`bn`).
