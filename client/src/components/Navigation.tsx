import { Link, useLocation } from "wouter";
import { Gamepad2, User, Code, Mail, Trophy } from "lucide-react";

export function Navigation() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "START", icon: Gamepad2 },
    { href: "/about", label: "PLAYER", icon: User },
    { href: "/certifications", label: "CERTIFICATIONS", icon: Trophy },
    { href: "/projects", label: "PROJECTS", icon: Code },
    // { href: "/contact", label: "CONTACT", icon: Mail },
  ];

  // return (
  //   <nav className="fixed bottom-0 left-0 right-0 md:top-0 md:bottom-auto z-40 bg-black/90 border-t-4 md:border-t-0 md:border-b-4 border-white/20 backdrop-blur-sm">
  //     <div className="max-w-7xl mx-auto px-4">
  //       <div className="flex justify-between md:justify-center items-center h-16 md:h-20 gap-1 md:gap-8">
  //         {links.map((link) => {
  //           const isActive = location === link.href;
  //           const Icon = link.icon;
            
  //           return (
  //             <Link key={link.href} href={link.href} className="w-full md:w-auto">
  //               <div 
  //                 className={`
  //                   flex flex-col md:flex-row items-center justify-center gap-2 p-2 cursor-pointer transition-all duration-200
  //                   hover:text-primary hover:-translate-y-1
  //                   ${isActive ? "text-primary animate-pulse" : "text-gray-500"}
  //                 `}
  //               >
  //                 <Icon className="w-6 h-6 md:w-5 md:h-5" />
  //                 <span className="font-['Press_Start_2P'] text-[10px] md:text-xs">
  //                   {link.label}
  //                 </span>
  //                 {isActive && (
  //                   <div className="hidden md:block w-2 h-2 bg-primary animate-bounce ml-2" />
  //                 )}
  //               </div>
  //             </Link>
  //           );
  //         })}
  //       </div>
  //     </div>
  //   </nav>
  // );
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 md:top-0 md:bottom-auto z-40 bg-black/90 border-t-4 md:border-t-0 md:border-b-4 border-white/20 backdrop-blur-sm">
      {/* Reducimos el padding horizontal en móvil (px-1) */}
      <div className="max-w-7xl mx-auto px-1 md:px-4">
        {/* Cambiamos justify-between por justify-around y eliminamos el gap en móvil */}
        <div className="flex justify-around md:justify-center items-center h-16 md:h-20 md:gap-8">
          {links.map((link) => {
            const isActive = location === link.href;
            const Icon = link.icon;
            
            return (
              <Link key={link.href} href={link.href} className="flex-1 md:flex-none">
                <div 
                  className={`
                    flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 p-1 cursor-pointer transition-all duration-200
                    hover:text-primary hover:-translate-y-1
                    ${isActive ? "text-primary animate-pulse" : "text-gray-500"}
                  `}
                >
                  {/* Iconos ligeramente más pequeños en móvil */}
                  <Icon className="w-5 h-5 md:w-5 md:h-5" />
                  
                  {/* TEXTO CRÍTICO: Reducimos a 7px/8px en móviles muy pequeños */}
                  <span className="font-['Press_Start_2P'] text-[7px] min-[380px]:text-[9px] md:text-xs text-center break-words">
                    {link.label}
                  </span>

                  {isActive && (
                    <div className="hidden md:block w-2 h-2 bg-primary animate-bounce ml-2" />
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );

}
