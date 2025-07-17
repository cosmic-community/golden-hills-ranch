import { Product } from '@/types';

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const images = product.metadata.product_images || [];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        {images.length > 0 && (
          <div className="space-y-4">
            <img
              src={`${images[0].imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
              alt={product.metadata.product_name}
              className="w-full h-96 object-cover rounded-lg"
            />
            {images.length > 1 && (
              <div className="grid grid-cols-3 gap-2">
                {images.slice(1).map((image, index) => (
                  <img
                    key={index}
                    src={`${image.imgix_url}?w=200&h=150&fit=crop&auto=format,compress`}
                    alt={`${product.metadata.product_name} ${index + 2}`}
                    className="w-full h-24 object-cover rounded-lg"
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {product.metadata.product_name}
        </h1>
        
        <div className="flex items-center gap-4 mb-6">
          <span className="text-3xl font-bold text-ranch-600">
            ${product.metadata.price.toFixed(2)}
          </span>
          <span className="text-lg text-gray-600">
            {product.metadata.weight}
          </span>
        </div>
        
        <div className="mb-6">
          <div dangerouslySetInnerHTML={{ __html: product.metadata.description }} />
        </div>
        
        <div className="mb-6">
          {product.metadata.in_stock ? (
            <span className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full">
              In Stock
            </span>
          ) : (
            <span className="inline-block px-4 py-2 bg-red-100 text-red-800 rounded-full">
              Out of Stock
            </span>
          )}
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Category</h3>
          <p className="text-gray-600">{product.metadata.category.metadata.category_name}</p>
        </div>
        
        <button 
          className="btn-primary w-full"
          disabled={!product.metadata.in_stock}
        >
          {product.metadata.in_stock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
}