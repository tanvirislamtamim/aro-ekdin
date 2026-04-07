import { motion } from "framer-motion";
import { FaFacebookF, FaTiktok, FaYoutube, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  // --- All variants remain beautiful, but now they will retrigger on each view ---

  // 1. Left Column Card - Gentle 3D tilt & fade
  const brandCardVariants = {
    hidden: { opacity: 0, rotateX: -15, rotateY: 5, y: 40 },
    visible: {
      opacity: 1,
      rotateX: 0,
      rotateY: 0,
      y: 0,
      transition: { duration: 0.9, ease: [0.34, 1.2, 0.64, 1] }
    }
  };

  // 2. Logo - SMOOTHER now: tween with easeOut instead of bouncy spring
  const logoVariants = {
    hidden: { rotateY: -180, scale: 0.2, opacity: 0 },
    visible: {
      rotateY: 0,
      scale: 1,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" }  // smoother, no bounce
    }
  };

  // 3. "TEAM" Text - Slide down with bounce
  const teamTextVariants = {
    hidden: { y: -80, opacity: 0, skewY: 5 },
    visible: {
      y: 0,
      opacity: 1,
      skewY: 0,
      transition: { duration: 0.7, type: "spring", stiffness: 120 }
    }
  };

  // 4. Gradient Brand Name - Scale & Rotate
  const brandNameVariants = {
    hidden: { scale: 0.2, rotate: -10, opacity: 0 },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: { duration: 0.6, delay: 0.1, type: "spring" }
    }
  };

  // 5. Description - Blur fade & slide right
  const descriptionVariants = {
    hidden: { x: -40, opacity: 0, filter: "blur(4px)" },
    visible: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.7, delay: 0.2 }
    }
  };

  // 6. Social Icons - each with unique direction
  const socialContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 }
    }
  };

  const getSocialVariant = (index) => ({
    hidden: {
      x: index === 0 ? -50 : index === 1 ? 0 : 50,
      y: index === 1 ? -50 : 0,
      opacity: 0,
      rotate: index === 0 ? -30 : index === 2 ? 30 : 0
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: { duration: 0.5, type: "spring" }
    }
  });

  // 7. Right Column Card - Slide from right
  const contactCardVariants = {
    hidden: { x: 100, opacity: 0, skewX: 5 },
    visible: {
      x: 0,
      opacity: 1,
      skewX: 0,
      transition: { duration: 0.8, type: "spring", damping: 15 }
    }
  };

  // 8. Email Block - Slide from left
  const emailVariants = {
    hidden: { x: -70, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, delay: 0.1, type: "tween" }
    }
  };

  // 9. Phone Block - Slide from right with scale
  const phoneVariants = {
    hidden: { x: 70, opacity: 0, scale: 0.9 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.3 }
    }
  };

  // 10. Status Badge - Pop
  const statusVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, delay: 0.5, type: "spring" }
    }
  };

  // 11. Bottom Bar Container - Fade up
  const bottomBarVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: 0.4 }
    }
  };

  // 12. Copyright - Slide left
  const copyrightVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: 0.1 }
    }
  };

  // 13. Bottom links with different entrances
  const privacyVariants = {
    hidden: { y: 20, opacity: 0, rotate: -3 },
    visible: {
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: { duration: 0.5, delay: 0.2 }
    }
  };
  const termsVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, delay: 0.3, type: "spring" }
    }
  };
  const cookiesVariants = {
    hidden: { x: 30, opacity: 0, skewX: 10 },
    visible: {
      x: 0,
      opacity: 1,
      skewX: 0,
      transition: { duration: 0.5, delay: 0.4 }
    }
  };

  // 14. Watermark - Drift & scale
  const watermarkVariants = {
    hidden: { scale: 0.6, opacity: 0, rotate: -10, x: -80 },
    visible: {
      scale: 1,
      opacity: 0.02,
      rotate: 0,
      x: 0,
      transition: { duration: 1.2, ease: "easeOut", delay: 0.2 }
    }
  };

  return (
    <footer className="relative bg-[#020202] text-white pt-20 md:pt-28 pb-12 px-6 overflow-hidden select-none">
      
      {/* --- Background Elements (continuous animation) --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] border-[1px] border-blue-500/10 rounded-full shadow-[0_0_50px_rgba(37,99,235,0.05)]" 
        />
        <div className="absolute top-1/4 left-1/3 w-64 md:w-96 h-64 md:h-96 bg-blue-600/5 blur-[100px] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* --- Left Column: Brand Identity --- */}
          <motion.div
            variants={brandCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}   // ← REPLAYS ON EVERY SCROLL
            className="lg:col-span-7 group relative"
          >
            <div className="h-full p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 backdrop-blur-2xl transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(37,99,235,0.25)]">
              
              {/* Logo - SMOOTHER animation now (tween easeOut) */}
              <motion.div 
                variants={logoVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}              // ← REPLAYS
                whileHover={{ rotateY: 180, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="relative mb-8 md:mb-10 inline-block"
              >
                <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 group-hover:opacity-50 transition-opacity" />
                <img 
                  src="Logo.jpeg" 
                  alt="Team Logo" 
                  className="relative w-28 h-28 md:w-36 md:h-36 rounded-[2rem] md:rounded-[2.5rem] object-cover border-2 border-white/20 shadow-2xl" 
                />
              </motion.div>

              <motion.h2 
                variants={teamTextVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="text-5xl md:text-7xl font-black italic tracking-tighter leading-none mb-2"
              >
                TEAM
              </motion.h2>

              <motion.span 
                variants={brandNameVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-red-500 text-5xl md:text-7xl font-black italic tracking-tighter leading-none mb-6"
              >
                ARO EKDIN
              </motion.span>

              <motion.p 
                variants={descriptionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg mb-10 font-light"
              >
                Beyond the court, we build legacies. Join the revolution of Bangladeshi Volleyball.
              </motion.p>

              <motion.div 
                variants={socialContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="flex gap-4 md:gap-6"
              >
                {[
                  { icon: <FaFacebookF />, color: "hover:bg-blue-600", link: "#", index: 0 },
                  { icon: <FaTiktok />, color: "hover:bg-white hover:text-black", link: "#", index: 1 },
                  { icon: <FaYoutube />, color: "hover:bg-red-600", link: "#", index: 2 }
                ].map((social, i) => (
                  <motion.a 
                    key={i} 
                    href={social.link}
                    custom={i}
                    variants={getSocialVariant(i)}
                    whileHover={{ y: -8, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl md:text-2xl transition-all duration-300 ${social.color}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* --- Right Column: Contact Box --- */}
          <motion.div 
            variants={contactCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="lg:col-span-5 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] bg-white/[0.03] border border-white/10 hover:border-blue-500/40 transition-all duration-500 flex flex-col justify-center group overflow-hidden"
          >
            <h3 className="text-blue-500 font-bold tracking-[0.4em] uppercase text-xs mb-12">Contract Us</h3>
            
            <div className="space-y-10">
              <motion.div 
                variants={emailVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="group/item cursor-pointer"
              >
                <p className="text-gray-500 text-xs font-bold uppercase mb-2 tracking-widest">Official Mail</p>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-blue-400 text-xl" />
                  <p className="text-white text-xl md:text-2xl font-medium group-hover/item:text-blue-400 transition-colors break-all italic">
                    aroekdin41@gmail.com
                  </p>
                </div>
              </motion.div>

              <motion.div 
                variants={phoneVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="group/item cursor-pointer"
              >
                <p className="text-gray-500 text-xs font-bold uppercase mb-2 tracking-widest">Support Hotline</p>
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-green-400 text-xl" />
                  <p className="text-white text-xl md:text-2xl font-medium group-hover/item:text-green-400 transition-colors italic">
                    +880 1828 034641
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div 
              variants={statusVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="mt-16 flex items-center gap-2 text-gray-600 text-[10px] font-bold tracking-[0.2em] uppercase"
            >
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              Always Online 
            </motion.div>
          </motion.div>

        </div>

        {/* --- Bottom Footer Bar --- */}
        <motion.div 
          variants={bottomBarVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-bold tracking-[0.3em] uppercase text-gray-500 text-center"
        >
          <motion.p 
            variants={copyrightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            © 2026 <span className="text-white">Team Aro Ekdin</span>. All rights reserved.
          </motion.p>
          
          <div className="flex gap-8 md:gap-12">
            <motion.span 
              variants={privacyVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="hover:text-white cursor-pointer transition-colors"
            >
              Privacy
            </motion.span>
            <motion.span 
              variants={termsVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="hover:text-white cursor-pointer transition-colors"
            >
              Terms
            </motion.span>
            <motion.span 
              variants={cookiesVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="hover:text-white cursor-pointer transition-colors"
            >
              Cookies
            </motion.span>
          </div>
        </motion.div>
      </div>

      {/* --- Massive Watermark --- */}
      <motion.div 
        variants={watermarkVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="absolute -bottom-10 md:-bottom-20 left-0 w-full text-center text-[22vw] font-black text-white pointer-events-none select-none italic uppercase leading-none"
      >
        Aro Ekdin
      </motion.div>

    </footer>
  );
};

export default Footer;