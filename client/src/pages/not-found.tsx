import { Link } from "wouter";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black">
      <div className="text-center space-y-8 p-8 border-4 border-red-600 animate-pulse">
        <AlertTriangle className="w-24 h-24 text-red-600 mx-auto" />
        <h1 className="text-6xl font-['Press_Start_2P'] text-red-600">404</h1>
        <div className="space-y-2">
          <p className="font-['VT323'] text-3xl text-white">Glitch in the Matrix detected.</p>
          <p className="font-['VT323'] text-2xl text-gray-400">The level you are looking for does not exist.</p>
        </div>
        
        <Link href="/">
          <button className="btn-retro btn-retro-primary mt-8">
            RETURN TO TITLE SCREEN
          </button>
        </Link>
      </div>
    </div>
  );
}
