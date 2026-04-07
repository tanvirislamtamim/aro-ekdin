import React from "react";

const Player = ({ player, index }) => {
  const { name, position, img, jersey } = player;

  return (
    <div className="flex justify-center w-full p-2">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-card {
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .modern-3d-card {
          transform-style: preserve-3d;
          background: linear-gradient(135deg, rgba(18, 18, 30, 0.9), rgba(8, 8, 18, 0.95));
          backdrop-filter: blur(12px);
          border: 1px solid rgba(139, 92, 246, 0.25);
          transition: all 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }

        @media (hover: hover) {
          .modern-3d-card:hover {
            transform: translateY(-12px) rotateX(6deg) rotateY(-4deg);
            box-shadow: 0 35px 50px -20px rgba(139, 92, 246, 0.4);
            border-color: rgba(139, 92, 246, 0.6);
          }
        }

        .player-image-container::after {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 50%;
          padding: 2px;
          background: linear-gradient(125deg, #a855f7, #ec4899);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
        }

        .buy-button {
          background: linear-gradient(95deg, #7c3aed, #db2777, #7c3aed);
          background-size: 200% auto;
          transition: 0.3s;
        }
        .buy-button:hover {
          background-position: right center;
        }
      `}</style>

      {/* animationDelay use kora hoyeche jeno cards gulo serial onujayi ashe */}
      <div 
        className="modern-3d-card animate-card relative w-full max-w-[320px] min-h-[320px] rounded-2xl overflow-hidden shadow-2xl p-6 flex flex-col items-center text-center justify-between"
        style={{ animationDelay: `${index * 0.15}s` }}
      >
        
        <div className="w-full flex flex-col items-center">
          {/* Player Image - Fixed Area */}
          <div className="player-image-container relative mb-5 h-28 w-28">
            <img
              src={img}
              alt={name}
              className="w-28 h-28 rounded-full object-cover border-2 border-purple-500/40 shadow-xl"
            />
          </div>

          {/* Player Name */}
          <div className="h-16 flex items-center justify-center mb-2">
            <h2 className="text-2xl font-bold text-white line-clamp-2">
              {name}
            </h2>
          </div>

          {/* Badges */}
          <div className="h-15 flex flex-wrap justify-center items-center gap-2 mb-4">
            <div className="px-4 py-1.5 rounded-full bg-white/5 border border-purple-500/30 text-purple-200 text-sm font-semibold">
              {position}
            </div>
            <div className="px-4 py-1.5 rounded-full bg-white/5 border border-purple-500/30 text-purple-200 text-sm font-semibold">
              Number: {jersey}
            </div>
          </div>

          <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4"></div>
        </div>

        {/* View Details Button */}
        <div className="w-full">
          <button className="buy-button w-full py-3 rounded-xl text-white font-bold shadow-lg">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;