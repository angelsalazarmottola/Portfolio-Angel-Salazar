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
    const certs = await storage.getCertifications();
    res.json(certs);
  });

  app.get(api.experience.list.path, async (req, res) => {
    const exp = await storage.getExperience();
    res.json(exp);
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

    const badges = await storage.getBadges();
    if (badges.length === 0) {
      await storage.createBadge({ name: "JavaScript Master", icon: "Code", description: "Completed 100+ JS challenges" });
      await storage.createBadge({ name: "Bug Hunter", icon: "Bug", description: "Squashed 50+ bugs in production" });
    }

    const certs = await storage.getCertifications();
    if (certs.length === 0) {
      await storage.createCertification({
        title: "AWS Certified Developer",
        issuer: "Amazon Web Services",
        date: "2023-01-01",
        credentialUrl: "#"
      });
    }

    const exp = await storage.getExperience();
    if (exp.length === 0) {
      await storage.createExperience({
        role: "Senior Developer",
        company: "Pixel Studios",
        startDate: "2020-01-01",
        description: "Led the development of a retro RPG engine."
      });
    }
  }
  seed();

  return httpServer;
}
