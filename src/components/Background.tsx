import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const ShootingStar = () => {
  const [style, setStyle] = useState<React.CSSProperties>({});

  const resetStar = () => {
    const top = Math.random() * 50; // Random top position (upper half)
    const left = Math.random() * 80 + 10; // Random left position
    const duration = Math.random() * 2 + 1; // 1-3 seconds
    const delay = Math.random() * 10; // 0-10 seconds delay

    setStyle({
      top: `${top}%`,
      left: `${left}%`,
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
    });
  };

  useEffect(() => {
    resetStar();
  }, []);

  return (
    <motion.div
      className="shooting-star"
      style={style}
      animate={{
        x: [0, 500],
        y: [0, 500],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: parseFloat(style.animationDuration?.toString() || '2'),
        delay: parseFloat(style.animationDelay?.toString() || '0'),
        repeat: Infinity,
        repeatDelay: Math.random() * 15 + 5,
        ease: "linear"
      }}
    />
  );
};

const Background = () => {
  const [stars, setStars] = useState<number[]>([]);

  useEffect(() => {
    setStars(Array.from({ length: 100 }, (_, i) => i));
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden night-sky-gradient">
      {/* Static Stars */}
      {stars.map((i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full opacity-30"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            boxShadow: Math.random() > 0.8 ? '0 0 10px 1px rgba(255,255,255,0.5)' : 'none'
          }}
        />
      ))}

      {/* Shooting Stars */}
      <ShootingStar />
      <ShootingStar />
      <ShootingStar />

      {/* Ramadan Crescent (Subtle) */}
      <div className="absolute top-12 right-12 opacity-20 pointer-events-none">
        <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M80 50C80 66.5685 66.5685 80 50 80C33.4315 80 20 66.5685 20 50C20 33.4315 33.4315 20 50 20C55.7912 20 61.1837 21.6425 65.75 24.475C58.15 26.85 52.5 33.975 52.5 42.5C52.5 52.4411 60.5589 60.5 70.5 60.5C74.05 60.5 77.35 59.475 80.125 57.725C80.05 55.175 80 52.6 80 50Z" fill="white" />
        </svg>
      </div>

      {/* Soft Glowing Particles */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,58,138,0.2),transparent_70%)]" />
    </div>
  );
};

export default Background;
