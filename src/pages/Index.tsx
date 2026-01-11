import ValentineCard from "@/components/ValentineCard";
import FloatingHearts from "@/components/FloatingHearts";
import PixelCat from "@/components/PixelCat";
import pixelPattern from "@/assets/pixel-pattern.png";

const Index = () => {
  return (
    <div 
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-8"
      style={{
        backgroundImage: `url(${pixelPattern})`,
        backgroundSize: '300px 300px',
        backgroundRepeat: 'repeat',
      }}
    >
      {/* Soft gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-valentine opacity-40 pointer-events-none" />
      
      {/* Floating hearts background */}
      <FloatingHearts />
      
      {/* Decorative corner cats */}
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
      
      {/* Floating sparkles */}
      <div className="fixed top-20 left-1/4 text-2xl animate-sparkle opacity-70">✨</div>
      <div className="fixed top-32 right-1/3 text-xl animate-sparkle opacity-60" style={{ animationDelay: '0.5s' }}>💫</div>
      <div className="fixed bottom-32 left-1/3 text-lg animate-sparkle opacity-50" style={{ animationDelay: '1s' }}>⭐</div>
      <div className="fixed bottom-20 right-1/4 text-2xl animate-sparkle opacity-60" style={{ animationDelay: '1.5s' }}>✨</div>
      
      {/* Main content */}
      <main className="relative z-10">
        <ValentineCard />
      </main>
    </div>
  );
};

export default Index;

<div className="
  bg-[#fffdf7]
  border-[6px]
  border-[#333]
  p-8
  w-[380px]
  text-center
"></div>
