import { RetroCard } from "@/components/RetroCard";
import { motion } from "framer-motion";
import { User, Code, Heart, Star, Zap, Linkedin, Github, MonitorCog, Earth } from "lucide-react";

export default function About() {
  const skills = [
    { name: "AWS Cloud", level: 90 },
    { name: "Cibersecurity", level: 80 },
    { name: "JIRA", level: 90 },
    { name: "Confluence", level: 90 },
    { name: "Bitbucket", level: 90 },
    { name: "Scriptrunner", level: 80 },
    { name: "Docker", level: 70 },
    { name: "Kubernetes", level: 70 },
    { name: "Linux", level: 80 },
    { name: "GenAI", level: 70 },
    { name: "Phyton", level: 70 },
    { name: "Javascript", level: 80 },
    { name: "React", level: 70 },
    { name: "Typescript", level: 70 },
    { name: "HTML", level: 90 },
    { name: "CSS", level: 90 },
    { name: "Tailwind", level: 80 },
    { name: "Bootstrap", level: 80 },
    { name: "Node", level: 80 },
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
            <RetroCard variant="secondary" className="h-full flex flex-col items-center text-center">
              <div className="w-32 h-32 bg-yellow-400 mb-6 border-4 border-black shadow-[4px_4px_0_rgba(255,255,255,0.2)] flex items-center justify-center overflow-hidden">
                {/* Pixel Art Avatar Placeholder */}
                <User className="w-20 h-20 text-black" />
              </div>
              
              <h2 className="text-xl text-yellow-400 font-['Press_Start_2P'] mb-2">ANGEL SALAZAR</h2>
              <div className="w-full h-px bg-white/20 my-4" />
              
              <div className="space-y-4 w-full text-left font-['VT323'] text-xl">
                <div className="flex justify-between text-red-400">
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

                <h3 className="font-['Press_Start_2P'] text-sm text-green-400 flex items-center gap-2">
                  <Earth className="w-4 h-4" /> LANGUAGE
                </h3>

                <div className="flex justify-between text-red-400">
                  <span>SPA</span>
                  <span>C2</span>
                </div>
                <div className="flex justify-between text-green-400">
                  <span>ITA</span>
                  <span>B1</span>
                </div>
                <div className="flex justify-between text-blue-400">
                  <span>ENG</span>
                  <span>B1</span>
                </div>
              </div>
              
            </RetroCard>
          </div>

          {/* Stats Section */}
          <div className="col-span-1 md:col-span-2 space-y-8">
            <RetroCard title="CHARACTER BIO">
              <p className="font-['VT323'] text-2xl text-gray-300 leading-relaxed mb-6">
                Cloud solutions architect (AWS certified) and developer with 2 years of experience, specializing in implementing, managing, and optimizing infrastructure on AWS and the Atlassian ecosystem (Jira, Confluence, Bitbucket). I have experience in containerization with Docker and advanced workflow automation using ScriptRunner.
                I have a solid background in web development, designing scalable and secure applications, and excellent cybersecurity knowledge. I am looking to apply my technical experience in cloud development and architecture environments in technology companies.
              </p>
              
              <div className="space-y-6">
                <h3 className="font-['Press_Start_2P'] text-sm text-green-400 flex items-center gap-2">
                  <MonitorCog className="w-4 h-4" /> WORK EXPERIENCE
                </h3>

                <h3 className="font-['VT323'] text-2xl          text-yellow-300 leading-relaxed mb-6">
                  TRIAJE ENGINEER - S4E - CHILE / JANUARY 2025 - PRESENT / REMOTE
                </h3>

                <p className="font-['VT323'] text-2xl text-gray-300 leading-relaxed mb-6">
                - Responsible for diagnosing, resolving, and managing incidents across key customer development and collaboration platforms: Jira, Bitbucket, and Confluence.
                - Advanced use of the ScriptRunner add-on for workflow automation, custom validations, and optimization of critical features within the Atlassian ecosystem.
                - Direct contribution to operational continuity and optimization of Atlassian ecosystem tools, ensuring an efficient user experience.
                - AWS consulting implementation for clients, focusing on infrastructure optimization and cost reduction.
              </p>

                <h3 className="font-['VT323'] text-2xl          text-yellow-300 leading-relaxed mb-6">
                  TRAINEE ENGINEER - S4E - CHILE / JUNE 2024 - JANUARY 2025 / OFFICE
                </h3>

                <p className="font-['VT323'] text-2xl text-gray-300 leading-relaxed mb-6">
                - Implementation and management of processes and migrations on AWS.
                - Participation in the planning, execution, and monitoring of development projects from concept to delivery, including management of Atlassian solutions (Jira, Bitbucket, Confluence).
              </p>

                <h3 className="font-['VT323'] text-2xl          text-yellow-300 leading-relaxed mb-6">
                  FRONTEND DEVELOPER - DESAFÍOLATAM - CHILE / JANUARY 2024 - APRILE 2024 / REMOTE
                </h3>

                <p className="font-['VT323'] text-2xl text-gray-300 leading-relaxed mb-6">
                Front-end development for a software tool that provides detailed diagnostics of the status of entrepreneurial initiatives based on comprehensive queries.
              </p>
                {/* {skills.map((skill, index) => (
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
                ))} */}
              </div>
            </RetroCard>

            <div className="grid grid-cols-2 gap-4">
              {/* <div className="bg-black border-2 border-purple-500 p-4 text-center hover:bg-purple-900/20 transition-colors">
                <Star className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <div className="font-['Press_Start_2P'] text-[10px] text-purple-300">LINKEDIN</div>
                <div className="font-['VT323'] text-2xl text-white">24</div>
              </div>
              <div className="bg-black border-2 border-orange-500 p-4 text-center hover:bg-orange-900/20 transition-colors">
                <Zap className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <div className="font-['Press_Start_2P'] text-[10px] text-orange-300">GITHUB</div>
                <div className="font-['VT323'] text-2xl text-white">12</div>
              </div> */}
              {/* Botón de LINKEDIN */}
              <a 
                href="https://www.linkedin.com/in/angel-salazar-mottola" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black border-2 border-primary p-4 text-center hover:bg-primary/20 transition-all cursor-pointer block"
              >
                <Linkedin className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-['Press_Start_2P'] text-[10px] text-purple-400">LINKEDIN</div>
                <div className="font-['VT323'] text-2xl text-white">VISIT</div>
              </a>

              {/* Botón de GITHUB */}
              <a 
                href="https://github.com/angelsalazarmottola?tab=repositories" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black border-2 border-primary p-4 text-center hover:bg-primary/20 transition-all cursor-pointer block"
              >
                <Github className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-['Press_Start_2P'] text-[10px] text-orange-400">GITHUB</div>
                <div className="font-['VT323'] text-2xl text-white">VIEW</div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
