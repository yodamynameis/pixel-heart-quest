import { motion } from "framer-motion";

const FloatingHearts = () => {
  const hearts = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 4 + Math.random() * 3,
    size: 12 + Math.random() * 16,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-heart"
          style={{
            left: `${heart.x}%`,
            fontSize: heart.size,
            bottom: -30,
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            opacity: [0, 1, 1, 0],
            rotate: [-10, 10, -10],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          💕 🌷 💖 🌼
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
