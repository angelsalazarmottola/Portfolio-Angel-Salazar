import { useMutation } from "@tanstack/react-query";
import { api, type InsertMessage } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useSendMessage() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: InsertMessage) => {
      const validated = api.messages.create.input.parse(data);
      const res = await fetch(api.messages.create.path, {
        method: api.messages.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });
      
      if (!res.ok) {
        if (res.status === 400) {
          const error = api.messages.create.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Failed to send message");
      }
      
      return api.messages.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "LEVEL UP! 🌟",
        description: "Message transmitted successfully.",
        className: "font-['VT323'] text-xl bg-black border-2 border-green-500 text-green-500",
      });
    },
    onError: (error) => {
      toast({
        title: "GAME OVER 💀",
        description: error.message,
        variant: "destructive",
        className: "font-['VT323'] text-xl border-2 border-red-500",
      });
    },
  });
}
