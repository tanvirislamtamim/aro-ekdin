import { useState, useEffect } from 'react';
import PlayersMarquee from '../PlayersMarquee/PlayersMarquee';
import AutoPlayVideo from '../AutoPlayVideo/AutoPlayVideo';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bannerData = [
    {
      id: 1,
      img: "IMG_2008.jpg",
      title: "Aro Ekdin",
      description: "Bound by Passion, Driven by Teamwork"
    },
    {
      id: 2,
      img: "/Banner images/IMG_2281.jpg",
      title: "Rise Together",
      description: "Every set, every spike, we play as one."
    },
    {
      id: 3,
      img: "/Banner images/IMG_2689.jpg",
      title: "Elite Action",
      description: "Chasing greatness on and off the court."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerData.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [bannerData.length]);

  return (
    <>
      {/* Custom Animation Style for Zoom Effect */}
      <style>
        {`
          @keyframes slowZoom {
            from { transform: scale(1); }
            to { transform: scale(1.15); }
          }
          .animate-zoom {
            animation: slowZoom 6s linear infinite alternate;
          }
        `}
      </style>

      <section className="relative w-full h-[80vh] md:h-screen overflow-hidden bg-black font-sans">

        {/* Main Background Slider */}
        {bannerData.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 visible" : "opacity-0 invisible"}`}
          >
            <img
              src={slide.img}
              alt={slide.title}
              className={`w-full h-full object-cover object-center ${index === currentSlide ? "animate-zoom" : "scale-100"}`}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

            <div className="absolute inset-0 flex items-end px-6 md:px-20 pb-12 sm:pb-20 md:pb-32">
              <div className="max-w-3xl">
                <h1 className={`text-4xl md:text-8xl font-black italic uppercase tracking-tighter text-white transition-all duration-1000 delay-300 transform ${index === currentSlide ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
                  {slide.title}
                </h1>

                <div className={`h-1.5 bg-red-600 my-4 transition-all duration-[1.5s] delay-500 ${index === currentSlide ? "w-20 md:w-40" : "w-0"}`}></div>

                <p className={`text-sm md:text-2xl text-gray-300 font-medium tracking-wide max-w-sm md:max-w-md transition-all duration-1000 delay-700 transform ${index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}>
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-10 right-6 md:right-16 flex flex-col space-y-4 z-30">
          {bannerData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="group flex items-center justify-end p-2"
            >
              <span className={`mr-3 text-[10px] md:text-xs font-bold transition-all duration-300 ${index === currentSlide ? "text-red-600 opacity-100" : "text-white opacity-0 md:group-hover:opacity-50"}`}>
                0{index + 1}
              </span>
              <div className={`transition-all duration-500 rounded-full ${index === currentSlide ? "h-8 w-1 bg-red-600 shadow-[0_0_15px_#dc2626]" : "h-3 w-1 bg-white/30"}`} />
            </button>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
      </section>

     
      
        <PlayersMarquee />
        <AutoPlayVideo videoSrc="MainVideo.mp4" />
    </>
  );
};

export default Home;