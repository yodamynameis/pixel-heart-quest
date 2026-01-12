import ValentineCard from "@/components/ValentineCard";
import FloatingHearts from "@/components/FloatingHearts";
import PixelCat from "@/components/PixelCat";
import pixelPattern from "@/assets/pixel-pattern.png";

const Index = () => {
  return (
    <div
      className="
        relative
        w-screen h-screen
        overflow-hidden
        flex items-center justify-center
        px-4
      "
      style={{
        backgroundImage: `url(${pixelPattern})`,
        backgroundSize: "300px 300px",
        backgroundRepeat: "repeat",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-valentine opacity-40 pointer-events-none" />

      {/* Background effects */}
      <FloatingHearts />

      {/* Corner cats */}
      <div className="fixed top-4 left-4 opacity-70 hidden sm:block">
        <PixelCat mood="shy" size="sm" />
      </div>
      <div className="fixed top-4 right-4 opacity-70 hidden sm:block">
        <PixelCat mood="blushing" size="sm" />
      </div>
      <div className="fixed bottom-4 left-4 opacity-70 hidden sm:block">
        <PixelCat mood="excited" size="sm" />
      </div>
      <div className="fixed bottom-4 right-4 opacity-70 hidden sm:block">
        <PixelCat mood="shy" size="sm" />
      </div>

      {/* Sparkles */}
      <div className="fixed top-20 left-1/4 text-2xl animate-sparkle opacity-70">✨</div>
      <div className="fixed bottom-24 right-1/4 text-xl animate-sparkle opacity-60">💫</div>

      {/* CARD (center of page) */}
      <main className="relative z-10">
        <ValentineCard />
      </main>

      {/* ✅ PAGE FOOTER (not card footer) */}
      <footer
        className="
          absolute
          bottom-6
          left-1/2
          -translate-x-1/2
          font-['Press_Start_2P']
          text-xs
          text-blue-600
          z-10
          opacity-90
        "
      >
        ~ always yours <span className="text-pink-500">gajodhar💕</span>
      </footer>
    </div>
  );
};

export default Index;
