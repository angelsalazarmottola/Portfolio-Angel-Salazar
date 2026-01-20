import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "wouter";
import { RetroCard } from "@/components/RetroCard";

export default function Home() {
  return (
    <div className="min-h-screen pt-20 pb-24 md:pt-32 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }} 
      />

      <div className="z-10 container mx-auto px-4 text-center max-w-4xl">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-b from-green-400 to-green-700 drop-shadow-[4px_4px_0_rgba(255,255,255,0.2)] mb-4">
            ANGEL SALAZAR
          </h1>
          <p className="text-pink-500 font-['Press_Start_2P'] text-xs md:text-sm tracking-widest animate-pulse">
            PRESS START TO BEGIN
          </p>
        </motion.div>

        <RetroCard className="mb-12 text-left" variant="secondary">
          <div className="flex gap-4 items-start">
            <div className="w-3 h-3 bg-cyan-500 animate-ping mt-2 shrink-0" />
            <div className="font-['VT323'] text-xl md:text-2xl text-cyan-300 leading-relaxed">
              <TypeAnimation
                sequence={[
                  'Initializing system...',
                  1000,
                  'Loading assets...',
                  500,
                  'System ready.',
                  500,
                  'Hello World! I am a Cloud Solutions Architect & Dev. Designing scalable cloud infrastructures and high-performance digital ecosystems.',
                  1000
                ]}
                wrapper="span"
                speed={50}
                style={{ display: 'inline-block' }}
                cursor={true}
              />
            </div>
          </div>
        </RetroCard>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <Link href="/projects" className="w-full md:w-auto">
            <button className="btn-retro btn-retro-primary w-full md:w-auto">
              VIEW LEVELS
            </button>
          </Link>
          <Link href="/contact" className="w-full md:w-auto">
            <button className="btn-retro btn-retro-secondary w-full md:w-auto">
              CONTACT PLAYER
            </button>
          </Link>
        </div>
      </div>

      {/* Floating pixels animation */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/20 pointer-events-none"
          initial={{ 
            x: Math.random() * 100 + "vw", 
            y: "100vh" 
          }}
          animate={{ 
            y: "-10vh",
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 10
          }}
        />
      ))}
    </div>
  );
}
