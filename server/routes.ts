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

  app.get(api.badges.list.path, async (req, res) => {
    const badges = await storage.getBadges();
    res.json(badges);
  });

  app.get(api.certifications.list.path, async (req, res) => {
    const allCerts = await storage.getCertifications(); // Crearemos esta función en el siguiente paso
    res.json(allCerts);
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

  // Seed data
  async function seed() {
    const projects = await storage.getProjects();
    if (projects.length === 0) {
      await storage.createProject({
        title: "Super Mario Clone",
        description: "A classic platformer recreated in JS.",
        imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
        link: "#",
        tags: ["Game Dev", "JS"]
      });
    }

    const currentBadges = await storage.getBadges();
    if (currentBadges.length === 0) {
      await storage.createBadge({ name: "JavaScript Master", icon: "Code", description: "Completed 100+ JS challenges" });
      await storage.createBadge({ name: "Bug Hunter", icon: "Bug", description: "Squashed 50+ bugs in production" });
      await storage.createBadge({ name: "Pixel Artist", icon: "Palette", description: "Created 10+ pixel assets" });
      await storage.createBadge({ name: "Speedrunner", icon: "Zap", description: "Deployed 5 projects in a week" });
    }

    const currentCertifications = await storage.getCertifications();
    if (currentCertifications.length === 0) {
      await storage.createCertification({
        title: "AWS Certified Solutions Architect",
        description: "Demonstrates expertise in designing distributed applications and systems on the AWS platform.",
        imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
        link: "https://www.credly.com/badges/aws-certified-solutions-architect",
        tags: ["AWS", "Cloud", "Architecture"]
      });
    }
    
  }
  seed();

  return httpServer;
}
