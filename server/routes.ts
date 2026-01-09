import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.get(api.projects.list.path, async (req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  app.post(api.messages.create.path, async (req, res) => {
    try {
      const input = api.messages.create.input.parse(req.body);
      const message = await storage.createMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Seed data on startup
  const existingProjects = await storage.getProjects();
  if (existingProjects.length === 0) {
    await storage.createProject({
      title: "Super Mario Clone",
      description: "A classic platformer recreated in JS.",
      imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80",
      link: "#",
      tags: ["Game Dev", "JS", "Canvas"]
    });
    await storage.createProject({
      title: "Retro RPG Engine",
      description: "Turn-based battle system inspired by Final Fantasy.",
      imageUrl: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80",
      link: "#",
      tags: ["RPG", "TypeScript", "React"]
    });
    await storage.createProject({
      title: "Pixel Art Editor",
      description: "Web-based tool for creating sprite assets.",
      imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
      link: "#",
      tags: ["Tool", "Graphics", "Canvas"]
    });
    await storage.createProject({
      title: "Space Invaders 2.0",
      description: "Modern twist on the classic arcade shooter.",
      imageUrl: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?auto=format&fit=crop&q=80",
      link: "#",
      tags: ["Arcade", "Action", "Phaser"]
    });
  }

  return httpServer;
}
