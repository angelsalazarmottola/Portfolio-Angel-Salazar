import { ReactNode } from "react";
import { motion } from "framer-motion";

interface RetroCardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  variant?: "primary" | "secondary" | "accent";
}

export function RetroCard({ children, className = "", title, variant = "primary" }: RetroCardProps) {
  const borderColor = 
    variant === "primary" ? "border-green-500" :
    variant === "secondary" ? "border-cyan-500" :
    "border-pink-500";
    
  const shadowColor = 
    variant === "primary" ? "shadow-green-500/50" :
    variant === "secondary" ? "shadow-cyan-500/50" :
    "shadow-pink-500/50";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`relative bg-black border-4 ${borderColor} p-6 shadow-[8px_8px_0px_0px] ${shadowColor} ${className}`}
    >
      {title && (
        <div className={`absolute -top-5 left-4 bg-black px-4 border-2 ${borderColor} text-${variant === 'primary' ? 'green' : variant === 'secondary' ? 'cyan' : 'pink'}-500 font-['Press_Start_2P'] text-xs py-2`}>
          {title}
        </div>
      )}
      {children}
    </motion.div>
  );
}
