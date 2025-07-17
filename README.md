# Golden Hills Ranch

![Golden Hills Ranch](https://imgix.cosmicjs.com/b9954b10-62bf-11f0-a051-23c10f41277a-photo-1558030006-450675393462-1752723603227.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A premium e-commerce website for Golden Hills Ranch showcasing grass-fed beef products from a family-owned Montana ranch. Features a complete product catalog, customer reviews, ranch blog, and informational pages about the ranch's heritage.

## Features

- **Product Catalog**: Browse premium steaks, ground beef, and roasts with detailed descriptions
- **Customer Reviews**: Authentic reviews with photos and ratings from verified purchases  
- **Ranch Blog**: Stories about grass-fed vs grain-fed beef and ranch operations
- **Category Filtering**: Easy navigation through different beef cuts and products
- **Responsive Design**: Optimized for all devices from mobile to desktop
- **SEO Optimized**: Built-in meta tags and structured data for search engines

## Clone this Bucket

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket to get started instantly:

[![Clone this Bucket](https://img.shields.io/badge/Clone%20this%20Bucket-4F46E5?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=ecommerce-production-a2c20d20-62be-11f0-b758-4dc058008d94)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "I would like to build a website for a ranch with beef products and customer reviews. Can you provide for me a list of 10 good ranch names that sells beef and meat products"

### Code Generation Prompt

> Build a Next.js website that uses my existing objects in this bucket. Set apiEnvironment: staging in cosmic config

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Cosmic SDK**: Content management and API integration
- **Bun**: Fast JavaScript runtime and package manager

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A [Cosmic](https://www.cosmicjs.com) account and bucket

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   bun install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Add your Cosmic credentials to `.env.local`:
   ```
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

5. Run the development server:
   ```bash
   bun dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Cosmic SDK Examples

### Fetching Products
```typescript
import { cosmic } from '@/lib/cosmic'

const products = await cosmic.objects
  .find({ type: 'products' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Product Reviews
```typescript
const reviews = await cosmic.objects
  .find({ type: 'reviews' })
  .props(['id', 'title', 'metadata'])
  .depth(1)
```

### Fetching Blog Posts
```typescript
const blogPosts = await cosmic.objects
  .find({ type: 'blog-posts' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This application integrates with [Cosmic](https://www.cosmicjs.com) for content management. The content structure includes:

- **Products**: Beef products with images, descriptions, and pricing
- **Product Categories**: Steaks, ground beef, and roasts
- **Reviews**: Customer reviews with ratings and photos
- **Blog Posts**: Ranch stories and educational content
- **Pages**: About and shipping information

Visit the [Cosmic docs](https://www.cosmicjs.com/docs) for more information about the API and SDK.

## Deployment Options

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Add environment variables in the Vercel dashboard
3. Deploy automatically on every push

### Netlify
1. Connect your repository to Netlify
2. Add environment variables in site settings
3. Deploy automatically on every push

For production, set these environment variables in your hosting platform's dashboard.

<!-- README_END -->