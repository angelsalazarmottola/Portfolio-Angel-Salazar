import { useProjects } from "@/hooks/use-projects";
import { RetroCard } from "@/components/RetroCard";
import { motion } from "framer-motion";
import { Loader2, ExternalLink, Trophy } from "lucide-react";

export default function Projects() {
  const { data: projects, isLoading, error } = useProjects();

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-green-500 font-['Press_Start_2P']">
        <Loader2 className="w-12 h-12 animate-spin mb-4" />
        <p>LOADING LEVEL DATA...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 font-['Press_Start_2P']">
        <p>ERROR LOADING DATA</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-24 px-4 container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-3xl md:text-5xl text-yellow-400 drop-shadow-[4px_4px_0_#b45309] mb-4">
          SELECT LEVEL
        </h1>
        <div className="h-1 w-32 bg-yellow-400 mx-auto" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {projects?.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <RetroCard 
              variant={index % 2 === 0 ? "primary" : "secondary"}
              className="h-full flex flex-col group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="aspect-video bg-gray-800 mb-6 border-4 border-white/20 relative overflow-hidden group-hover:border-white transition-colors">
                <div className="absolute top-2 right-2 bg-black/80 px-2 py-1 z-10 border border-white/50">
                  <span className="text-yellow-400 font-['Press_Start_2P'] text-[10px] flex items-center gap-1">
                    <Trophy className="w-3 h-3" />
                    LVL {index + 1}
                  </span>
                </div>
                
                {/* Image Placeholder or Actual Image */}
                <div className="w-full h-full bg-slate-900 flex items-center justify-center text-gray-600 font-['VT323'] text-2xl">
                  {/* In a real app, use project.imageUrl here */}
                  <img 
                    src={project.imageUrl || `https://source.unsplash.com/random/800x600?tech,code,${index}`} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity pixelated"
                    style={{ imageRendering: 'pixelated' }}
                  />
                  {/* Decorative Scanline */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.4)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none" />
                </div>
              </div>

              <h3 className="text-xl md:text-2xl text-white mb-2 font-['Press_Start_2P'] leading-tight group-hover:text-green-400 transition-colors">
                {project.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags?.map((tag) => (
                  <span key={tag} className="bg-white/10 text-xs px-2 py-1 font-['VT323'] text-blue-300 border border-blue-900">
                    #{tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-300 font-['VT323'] text-lg md:text-xl mb-6 flex-grow border-t border-white/10 pt-4">
                {project.description}
              </p>

              {project.link && (
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto"
                >
                  <button className="w-full py-3 bg-white/5 border-2 border-white/20 hover:bg-white/10 hover:border-green-400 text-green-400 font-['Press_Start_2P'] text-xs flex items-center justify-center gap-2 transition-all">
                    START GAME <ExternalLink className="w-4 h-4" />
                  </button>
                </a>
              )}
            </RetroCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
