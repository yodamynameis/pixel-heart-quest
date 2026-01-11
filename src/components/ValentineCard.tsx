import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PixelCat from "./PixelCat";
import PixelConfetti from "./PixelConfetti";

const noButtonMessages = [
  "Hey! That's illegal 😾",
  "Wrong answer hooman",
  "Try again sweetie 💕",
  "Nope, not allowed!",
  "Are you sure? 🥺",
  "Think again!",
];

const ValentineCard = () => {
  const [accepted, setAccepted] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [catMessage, setCatMessage] = useState<string | null>(null);
  const [noHoverCount, setNoHoverCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const moveNoButton = useCallback(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current.getBoundingClientRect();
    const maxX = Math.min(150, container.width / 4);
    const maxY = Math.min(100, container.height / 4);
    
    const newX = (Math.random() - 0.5) * maxX * 2;
    const newY = (Math.random() - 0.5) * maxY * 2;
    
    setNoPosition({ x: newX, y: newY });
    setNoHoverCount((prev) => prev + 1);
    setCatMessage(noButtonMessages[Math.floor(Math.random() * noButtonMessages.length)]);
    
    setTimeout(() => setCatMessage(null), 2000);
  }, []);

  if (accepted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center px-4"
      >
        <PixelConfetti />
        <motion.div
          initial={{ scale: 0.8, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ type: "spring", damping: 15 }}
          className="bg-card/90 backdrop-blur-sm border-4 border-pixel rounded-2xl p-8 md:p-12 shadow-pixel-lg max-w-lg mx-auto"
        >
          <motion.h1
            className="font-pixel text-xl md:text-2xl text-primary mb-6 leading-relaxed"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            YAY!! 💘
          </motion.h1>
          <p className="font-pixel text-xs md:text-sm text-foreground mb-8 leading-loose">
            You just made me the happiest person!
          </p>
          
          <div className="flex justify-center gap-4 mb-8">
            <PixelCat mood="dancing" size="lg" />
            <PixelCat mood="dancing" size="lg" />
            <PixelCat mood="dancing" size="lg" />
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="font-pixel text-xs text-muted-foreground leading-loose"
          >
            I love you more than all the cats on the internet 💗🐱
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="mt-8 font-pixel text-lg text-heart"
          >
            Happy Valentine's Day!
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card/90 backdrop-blur-sm border-4 border-pixel rounded-2xl p-6 md:p-10 shadow-pixel-lg max-w-md mx-4 relative"
    >
      {/* Corner cats */}
      <div className="absolute -top-6 -left-4">
        <PixelCat mood="shy" size="md" />
      </div>
      <div className="absolute -top-6 -right-4">
        <PixelCat mood="blushing" size="md" />
      </div>
      
      {/* Main content */}
      <div className="text-center pt-4">
        <motion.div
          className="text-4xl mb-4"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          💖
        </motion.div>
        
        <h1 className="font-pixel text-base md:text-lg text-primary mb-4 leading-relaxed">
          Will you be my Valentine?
        </h1>
        
        <p className="font-pixel text-xs text-muted-foreground mb-8 leading-loose">
          I promise unlimited hugs, memes, and love 🐾
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center min-h-[100px] relative">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setAccepted(true)}
            className="font-pixel text-sm bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg border-2 border-pixel shadow-pixel transition-colors"
          >
            YES 💕
          </motion.button>
          
          <motion.button
            animate={{
              x: noPosition.x,
              y: noPosition.y,
              scale: noHoverCount > 3 ? 0.8 : 1,
            }}
            whileHover={{ rotate: [0, -5, 5, 0] }}
            transition={{ type: "spring", damping: 10 }}
            onMouseEnter={moveNoButton}
            onTouchStart={moveNoButton}
            onClick={moveNoButton}
            className="font-pixel text-sm bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 rounded-lg border-2 border-pixel shadow-pixel transition-colors"
          >
            NO 🙃
          </motion.button>
        </div>
        
        {/* Cat with message */}
        <AnimatePresence>
          {catMessage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-6"
            >
              <PixelCat mood="angry" size="md" message={catMessage} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Bottom cat */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
        <PixelCat mood="excited" size="md" />
      </div>
    </motion.div>
  );
};

export default ValentineCard;
