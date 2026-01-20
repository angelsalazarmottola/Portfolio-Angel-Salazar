import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema, type InsertMessage } from "@shared/schema";
import { useSendMessage } from "@/hooks/use-messages";
import { RetroCard } from "@/components/RetroCard";
import { motion } from "framer-motion";
import { Loader2, Send } from "lucide-react";

export default function Contact() {
  const { mutate: sendMessage, isPending } = useSendMessage();

  const form = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = (data: InsertMessage) => {
    sendMessage(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-24 px-4 container mx-auto flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-2xl"
      >
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl text-green-500 drop-shadow-[4px_4px_0_#831843] mb-4 animate-pulse">
            NEW CHALLENGER!
          </h1>
          <p className="font-['VT323'] text-2xl text-white">Enter your details to start the game.</p>
        </div>

        <RetroCard variant="secondary" className="border-green-500 shadow-green-500/50">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <label className="font-['Press_Start_2P'] text-xs text-green-400 block uppercase">
                Player Name
              </label>
              <input
                {...form.register("name")}
                className="w-full bg-black border-2 border-green-700 p-4 text-white font-['VT323'] text-xl focus:outline-none focus:border-green-400 focus:shadow-[0_0_10px_rgba(236,72,153,0.5)] transition-all"
                placeholder="ENTER NAME"
              />
              {form.formState.errors.name && (
                <p className="text-red-500 font-['VT323'] text-lg">{form.formState.errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="font-['Press_Start_2P'] text-xs text-green-400 block uppercase">
                Email Address
              </label>
              <input
                {...form.register("email")}
                className="w-full bg-black border-2 border-green-700 p-4 text-white font-['VT323'] text-xl focus:outline-none focus:border-green-400 focus:shadow-[0_0_10px_rgba(236,72,153,0.5)] transition-all"
                placeholder="ENTER EMAIL"
              />
              {form.formState.errors.email && (
                <p className="text-red-500 font-['VT323'] text-lg">{form.formState.errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="font-['Press_Start_2P'] text-xs text-green-400 block uppercase">
                Mission Brief
              </label>
              <textarea
                {...form.register("message")}
                rows={5}
                className="w-full bg-black border-2 border-green-700 p-4 text-white font-['VT323'] text-xl focus:outline-none focus:border-green-400 focus:shadow-[0_0_10px_rgba(236,72,153,0.5)] transition-all resize-none"
                placeholder="ENTER MESSAGE..."
              />
              {form.formState.errors.message && (
                <p className="text-red-500 font-['VT323'] text-lg">{form.formState.errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isPending}
              className={`
                w-full py-4 mt-4 font-['Press_Start_2P'] text-sm uppercase
                border-4 border-white shadow-[4px_4px_0_0_rgba(255,255,255,0.2)]
                flex items-center justify-center gap-3 transition-all
                ${isPending 
                  ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                  : 'bg-green-600 text-white hover:bg-green-500 hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_rgba(255,255,255,0.3)] active:translate-y-0 active:shadow-[2px_2px_0_0_rgba(255,255,255,0.2)]'
                }
              `}
            >
              {isPending ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  TRANSMITTING...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  INSERT COIN TO SEND
                </>
              )}
            </button>
          </form>
        </RetroCard>
      </motion.div>
    </div>
  );
}
