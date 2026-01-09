import { RetroCard } from "@/components/RetroCard";
import { motion } from "framer-motion";
import { User, Code, Heart, Star, Zap } from "lucide-react";

export default function About() {
  const skills = [
    { name: "React / React Native", level: 90 },
    { name: "TypeScript / Node.js", level: 85 },
    { name: "UI / UX Design", level: 80 },
    { name: "Three.js / WebGL", level: 70 },
  ];

  return (
    <div className="min-h-screen pt-24 pb-24 px-4 container mx-auto">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Avatar Section */}
          <div className="col-span-1">
            <RetroCard variant="accent" className="h-full flex flex-col items-center text-center">
              <div className="w-32 h-32 bg-yellow-400 mb-6 border-4 border-black shadow-[4px_4px_0_rgba(255,255,255,0.2)] flex items-center justify-center overflow-hidden">
                {/* Pixel Art Avatar Placeholder */}
                <User className="w-20 h-20 text-black" />
              </div>
              
              <h2 className="text-xl text-yellow-400 font-['Press_Start_2P'] mb-2">PLAYER 1</h2>
              <div className="w-full h-px bg-white/20 my-4" />
              
              <div className="space-y-4 w-full text-left font-['VT323'] text-xl">
                <div className="flex justify-between text-pink-400">
                  <span>HP</span>
                  <div className="flex">
                    {[1,2,3,4,5].map(i => <Heart key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                </div>
                <div className="flex justify-between text-cyan-400">
                  <span>MP</span>
                  <div className="flex">
                    {[1,2,3,4,5].map(i => <Zap key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                </div>
                <div className="flex justify-between text-green-400">
                  <span>EXP</span>
                  <span>9999</span>
                </div>
              </div>
            </RetroCard>
          </div>

          {/* Stats Section */}
          <div className="col-span-1 md:col-span-2 space-y-8">
            <RetroCard title="CHARACTER BIO">
              <p className="font-['VT323'] text-2xl text-gray-300 leading-relaxed mb-6">
                Full-stack developer with a passion for retro aesthetics and modern performance. 
                Creating digital experiences that are as fun to use as they are beautiful.
              </p>
              
              <div className="space-y-6">
                <h3 className="font-['Press_Start_2P'] text-sm text-green-400 flex items-center gap-2">
                  <Code className="w-4 h-4" /> SKILL TREE
                </h3>
                
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between font-['VT323'] text-lg text-white">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-4 bg-gray-800 border-2 border-gray-600 relative">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className="h-full bg-gradient-to-r from-green-500 to-green-300 absolute top-0 left-0"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </RetroCard>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black border-2 border-purple-500 p-4 text-center hover:bg-purple-900/20 transition-colors">
                <Star className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <div className="font-['Press_Start_2P'] text-[10px] text-purple-300">ACHIEVEMENTS</div>
                <div className="font-['VT323'] text-2xl text-white">24</div>
              </div>
              <div className="bg-black border-2 border-orange-500 p-4 text-center hover:bg-orange-900/20 transition-colors">
                <Zap className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <div className="font-['Press_Start_2P'] text-[10px] text-orange-300">POWER UPS</div>
                <div className="font-['VT323'] text-2xl text-white">12</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
