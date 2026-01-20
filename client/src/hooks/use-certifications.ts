import { useQuery } from "@tanstack/react-query";
import { Certification } from "@shared/schema";

export function useCertifications() {
  return useQuery<Certification[]>({
    queryKey: ["/api/certifications"], // Debe coincidir con la ruta en routes.ts
  });
}