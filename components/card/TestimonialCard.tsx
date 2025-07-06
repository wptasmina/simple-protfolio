// components/TestimonialCard.tsx
import Image from 'next/image';

interface TestimonialCardProps {
  quote: string;
  rating: number;
  name: string;
  role: string;
  imageUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  rating,
  name,
  role,
  imageUrl,
}) => {
  // Render star ratings (5-star system)
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 text-yellow-400"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-4 h-4 text-yellow-400"
          >
            <defs>
              <linearGradient id="half-fill">
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="#FFFFFF" />
              </linearGradient>
            </defs>
            <path fill="url(#half-fill)" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        );
      } else {
        stars.push(
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#FFFFFF"
            className="w-4 h-4 opacity-30"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        );
      }
    }
    return stars;
  };

  return (
  <div className="w-full border-t-2 border-l border-[#031457] group  bg-gradient-to-lr from-gray-900 to-black rounded-3xl overflow-hidden shadow-2xl transform transition-transform hover:-translate-y-4 shadow-indigo-900/50">
  <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black">
    <p className="text-white text-lg mb-4">{quote}</p>
    <div className="flex items-center gap-2 mb-6">
      <span className="text-white opacity-50 text-sm">{rating.toFixed(1)}</span>
      <div className="flex gap-1">{renderStars()}</div>
    </div>

    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
          width={40}
          height={40}
        />
      </div>
      <div>
        <p className="text-white font-medium">{name}</p>
        <p className="text-white opacity-60 text-sm">{role}</p>
      </div>
    </div>
  </div>

</div>

  );
};

export default TestimonialCard;