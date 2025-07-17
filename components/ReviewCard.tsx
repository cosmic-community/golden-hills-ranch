import { Review } from '@/types';

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const renderStars = (rating: string) => {
    const numStars = parseInt(rating);
    return (
      <div className="flex items-center mb-2">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-lg ${i < numStars ? 'text-yellow-400' : 'text-gray-300'}`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="card">
      <div className="p-6">
        {renderStars(review.metadata.rating.key)}
        <p className="text-gray-700 mb-4">
          "{review.metadata.review_text}"
        </p>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-gray-900">
              {review.metadata.customer_name}
            </p>
            <p className="text-sm text-gray-600">
              {review.metadata.product?.metadata?.product_name || 'Unknown Product'}
            </p>
          </div>
          {review.metadata.verified_purchase && (
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
              Verified Purchase
            </span>
          )}
        </div>
        {review.metadata.review_photos && review.metadata.review_photos.length > 0 && (
          <div className="mt-4">
            <img
              src={`${review.metadata.review_photos[0]?.imgix_url}?w=400&h=300&fit=crop&auto=format,compress`}
              alt="Customer review photo"
              className="w-full h-32 object-cover rounded-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
}