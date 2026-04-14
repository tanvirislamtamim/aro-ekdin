import { useState, useEffect } from 'react';
import PlayersMarquee from '../PlayersMarquee/PlayersMarquee';
import AutoPlayVideo from '../AutoPlayVideo/AutoPlayVideo';
import { motion } from "framer-motion";

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
  const players = [
    { name: "S.Sajjad", id: "12", role: "Game Changer", img: "/Sajjad.jpg" },
    { name: "Mizba Al Naim", id: "3", role: "Captain", img: "/Mizba.jpg" },
    { name: "MD Shehad", id: "5", role: "Star Performer", img: "/Shehad.jpg" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerData.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [bannerData.length]);

  return (
    <>
      <style>
        {`
          @keyframes slowZoom {
            from { transform: scale(1); }
            to { transform: scale(1.15); }
          }
          .animate-zoom {
            animation: slowZoom 6s linear infinite alternate;
          }
          .dark-home-bg {
            background-color: #0a0a0a;
          }
          .dark-home-bg > * {
            background-color: inherit;
          }
          /* 3D hover tilt effect */
          .player-card-3d {
            transition: all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
            transform-style: preserve-3d;
            perspective: 1000px;
          }
          .player-card-3d:hover {
            transform: translateY(-8px) rotateX(5deg) rotateY(5deg);
            box-shadow: 0 30px 40px -20px rgba(0, 150, 255, 0.4);
          }
          .player-image {
            transition: transform 0.7s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          }
          .player-card-3d:hover .player-image {
            transform: scale(1.05);
          }
          .player-card-3d {
            position: relative;
            background: linear-gradient(135deg, rgba(15,20,35,0.95), rgba(5,5,15,0.98));
            border: 1px solid rgba(255,255,255,0.08);
          }
          /* Premium gradient border: Blue → Cyan → Indigo */
          .player-card-3d::after {
            content: '';
            position: absolute;
            inset: -1px;
            background: linear-gradient(135deg, #3b82f6, #06b6d4, #4f46e5);
            border-radius: 1.5rem;
            opacity: 0;
            transition: opacity 0.5s ease;
            z-index: -1;
          }
          .player-card-3d:hover::after {
            opacity: 0.7;
          }
          .role-badge {
            background: linear-gradient(135deg, rgba(0,0,0,0.7), rgba(20,20,40,0.8));
            backdrop-filter: blur(8px);
            border: 1px solid rgba(59,130,246,0.4);
            transition: all 0.3s;
          }
          .player-card-3d:hover .role-badge {
            border-color: rgba(6,182,212,0.8);
            box-shadow: 0 0 12px rgba(6,182,212,0.4);
          }
          /* Name and role stay white on hover */
          .player-name {
            transition: all 0.3s ease;
          }
          .player-card-3d:hover .player-name {
            color: white;
          }
          .player-role {
            transition: all 0.3s ease;
          }
          .player-card-3d:hover .player-role {
            color: white;
          }
        `}
      </style>

      <div className="dark-home-bg">
        {/* Hero Banner Section - unchanged */}
        <section className="relative w-full h-[80vh] md:h-screen overflow-hidden bg-black font-sans">
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
              <div className="absolute inset-0 flex items-end px-6 md:px-20 pb-12 sm:pb-20 md:pb-32">
                <div className="max-w-3xl">
                  <h1 className={`text-4xl md:text-8xl  font-black italic uppercase tracking-tighter  text-white transition-all duration-1000 delay-300 transform ${index === currentSlide ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
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

        {/* PlayersMarquee - unchanged */}
        <div className="bg-black/90">
          <PlayersMarquee />
        </div>

        {/* AutoPlayVideo - unchanged */}
        <div className="bg-black">
          <AutoPlayVideo videoSrc="MainVideo.mp4" />
        </div>

        {/* ===== FEATURED PLAYERS SECTION ===== */}
        <section className="relative py-28 px-6 md:px-20 bg-black overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
          
          <div className="text-center mb-20 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs font-mono tracking-[0.3em] text-cyan-400 bg-white/5 px-5 py-2 rounded-full backdrop-blur-sm mb-5 border border-white/10">
                THE ELITE
              </span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                  Top Performers
                </span>
              </h2>
              <div className="flex justify-center gap-2 mt-5">
                <div className="w-10 h-0.5 bg-cyan-500 rounded-full"></div>
                <div className="w-2 h-0.5 bg-white/30 rounded-full"></div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">
            {players.map((player, index) => {
              const isEmpty = !player.name || player.name === "";
              const scrollAnimation = {
                hidden: { 
                  opacity: 0,
                  rotateX: 20,
                  rotateY: -20,
                  y: 80,
                  scale: 0.8
                },
                visible: { 
                  opacity: 1,
                  rotateX: 0,
                  rotateY: 0,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    damping: 15,
                    stiffness: 120,
                    delay: index * 0.1,
                    duration: 0.7
                  }
                }
              };
              
              return (
                <motion.div
                  key={index}
                  variants={scrollAnimation}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, margin: "-30px" }}
                  className="player-card-3d group rounded-3xl overflow-hidden backdrop-blur-sm"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="relative h-96 overflow-hidden">
                    {isEmpty ? (
                      <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-6xl mb-2 opacity-30">✨</div>
                          <p className="text-gray-500 text-sm">Coming Soon</p>
                        </div>
                      </div>
                    ) : (
                      <img 
                        src={player.img} 
                        alt={player.name}
                        className="player-image w-full h-full object-cover object-center"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 pointer-events-none"></div>
                    
                    {!isEmpty && (
                      <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 transition-all duration-300 group-hover:bg-black/70 group-hover:scale-110 group-hover:border-cyan-400">
                        <span className="text-white font-black text-sm">{player.id}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-7 text-center relative z-10">
                    {isEmpty ? (
                      <>
                        <h3 className="text-2xl font-bold text-gray-400 tracking-tight">
                          {player.name }
                        </h3>
                        <p className="text-sm text-gray-500 mt-2 flex items-center justify-center gap-1">
                          <span className="inline-block w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                          <span>{player.role}</span>
                        </p>
                      </>
                    ) : (
                      <>
                        {/* Name stays white on hover */}
                        <h3 className="player-name text-2xl font-extrabold text-white tracking-tight">
                          {player.name}
                        </h3>
                        {/* Role stays white on hover */}
                        <p className="player-role text-sm text-white mt-2 flex items-center justify-center gap-1 font-semibold tracking-wide">
                          <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                          {player.role}
                        </p>
                      </>
                    )}
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mt-5 transition-all duration-500 group-hover:w-24"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          <div className="text-center mt-20">
            <p className="text-gray-600 text-sm tracking-widest">✦ MORE LEGENDS COMING SOON ✦</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;