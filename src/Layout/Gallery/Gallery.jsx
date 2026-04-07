import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Download from "yet-another-react-lightbox/plugins/download";
import "yet-another-react-lightbox/styles.css";

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const galleryImages = [
    { src: "IMG_2008.jpg", title: "Aro Ekdin 2026" },
    { src: "IMG_2025.jpg", title: "Aro Ekdin 2026" },
    { src: "IMG_2301.jpg", title: "Aro Ekdin 2026" },
    { src: "IMG_2323.jpg", title: "Aro Ekdin 2026" },
  ];

  // Container animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Card animation (ONLY card scales, not image)
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 1, 0.5, 1],
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  return (
    <div className="bg-gradient-to-b from-black via-gray-950 to-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter bg-gradient-to-r from-blue-400 via-white to-red-500 bg-clip-text text-transparent">
            GALLERY
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {galleryImages.map((image, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover="hover"
              className="group cursor-pointer"
              style={{ willChange: "transform, opacity" }}
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-black/40 backdrop-blur-sm shadow-xl">

                {/* IMAGE (NO SCALE → NO BLUR) */}
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-72 md:h-80 object-cover object-center"
                  loading="eager"
                  decoding="async"
                  style={{
                    imageRendering: "auto",
                    transform: "translateZ(0)",
                  }}
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70" />

                {/* TITLE */}
                <div className="absolute bottom-0 w-full p-4">
                  <p className="text-center text-lg font-bold italic">
                    {image.title}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* LIGHTBOX */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={galleryImages.map((img) => ({ src: img.src }))}
        plugins={[Zoom, Download]}
      />
    </div>
  );
};

export default Gallery;