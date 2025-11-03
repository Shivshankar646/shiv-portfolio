import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-black text-cyan-400 z-50"
        >
          {/* Glowing Logo */}
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1.1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-6xl md:text-7xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 drop-shadow-[0_0_25px_rgba(56,189,248,0.6)]"
          >
            Shiv<span className="text-sky-500">.</span>
          </motion.h1>

          {/* Slogan */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-slate-400 mt-4 text-lg font-light italic"
          >
            “Code. Create. Conquer.”
          </motion.p>

          {/* Glowing Progress Bar */}
          <motion.div
            className="mt-8 w-40 h-1 bg-slate-800 rounded-full overflow-hidden shadow-[0_0_10px_rgba(56,189,248,0.4)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 via-sky-500 to-teal-300"
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Glow Fade */}
          <motion.div
            className="absolute w-[600px] h-[600px] bg-cyan-500/10 blur-3xl rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
