export default function PlayersMarquee() {
  const images = [
    'Action1.jpg',
    'Action2.jpg',
    'Action3.jpg',
    'Action4.jpeg',
    'Action5.jpg',
  ];

  const marqueeImages = [...images, ...images];

  return (
    <div className="w-full bg-black flex items-start justify-center px-2 sm:px-4 pb-20 md:pb-40 overflow-hidden">
      <div className="w-full max-w-full bg-gray-900 rounded-[40px] shadow-2xl px-4 sm:px-8 py-4 sm:py-10 overflow-hidden mt-20 md:mt-40 border border-gray-800">
        <div className="text-center mb-2 sm:mb-10">
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight text-white">
            Moment of Action
          </h1>
        </div>

        <div className="relative w-full h-[180px] sm:h-[240px] overflow-hidden">
          <div className="marquee-track">
            {marqueeImages.map((src, index) => (
              <div key={index} className="img-wrap">
                <img src={src} alt={`player-${index}`} className="moving-img" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-2 sm:mt-8">
          <button className="px-6 sm:px-8 py-2 sm:py-3 rounded-full bg-white text-black font-medium text-sm sm:text-base shadow-md hover:bg-gray-200 transition duration-300">
            See All Players
          </button>
        </div>
      </div>

      <style>{`
        .marquee-track {
          display: flex;
          gap: 16px;
          width: max-content;
          animation: marqueeMove 20s linear infinite;
        }

        .img-wrap {
          width: 160px;
          height: 160px;
          flex-shrink: 0;
        }

        @media(min-width: 640px) {
          .img-wrap {
            width: 220px;
            height: 220px;
          }
        }

        .moving-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 28px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.5);
          border: 1px solid rgba(255,255,255,0.1);
        }

        @keyframes marqueeMove {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}