// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Product interfaces
export interface Product extends CosmicObject {
  type: 'products';
  metadata: {
    product_name: string;
    description: string;
    price: number;
    weight: string;
    product_images: Array<{
      url: string;
      imgix_url: string;
    }>;
    category: ProductCategory;
    in_stock: boolean;
    featured_product?: boolean;
  };
}

export interface ProductCategory extends CosmicObject {
  type: 'product-categories';
  metadata: {
    category_name: string;
    description?: string;
    category_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Review interfaces
export interface Review extends CosmicObject {
  type: 'reviews';
  metadata: {
    customer_name: string;
    product: Product;
    rating: {
      key: string;
      value: string;
    };
    review_text: string;
    review_photos?: Array<{
      url: string;
      imgix_url: string;
    }> | null;
    verified_purchase?: boolean;
  };
}

// Blog post interfaces
export interface BlogPost extends CosmicObject {
  type: 'blog-posts';
  metadata: {
    post_title: string;
    content: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    author: string;
    excerpt?: string;
  };
}

// Page interfaces
export interface Page extends CosmicObject {
  type: 'pages';
  metadata: {
    page_title: string;
    content: string;
    page_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Type guards
export function isProduct(obj: CosmicObject): obj is Product {
  return obj.type === 'products';
}

export function isReview(obj: CosmicObject): obj is Review {
  return obj.type === 'reviews';
}

export function isBlogPost(obj: CosmicObject): obj is BlogPost {
  return obj.type === 'blog-posts';
}

export function isPage(obj: CosmicObject): obj is Page {
  return obj.type === 'pages';
}

export function isProductCategory(obj: CosmicObject): obj is ProductCategory {
  return obj.type === 'product-categories';
}

// Rating type literals
export type RatingKey = '1' | '2' | '3' | '4' | '5';
export type RatingValue = '1 Star' | '2 Stars' | '3 Stars' | '4 Stars' | '5 Stars';