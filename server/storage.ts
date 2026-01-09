import { 
  projects, messages, badges, certifications, experience,
  type Project, type InsertProject, 
  type Message, type InsertMessage,
  type Badge, type InsertBadge,
  type Certification, type InsertCertification,
  type Experience, type InsertExperience
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getProjects(): Promise<Project[]>;
  getBadges(): Promise<Badge[]>;
  getCertifications(): Promise<Certification[]>;
  getExperience(): Promise<Experience[]>;
  createMessage(message: InsertMessage): Promise<Message>;
  createProject(project: InsertProject): Promise<Project>;
  createBadge(badge: InsertBadge): Promise<Badge>;
  createCertification(cert: InsertCertification): Promise<Certification>;
  createExperience(exp: InsertExperience): Promise<Experience>;
}

export class DatabaseStorage implements IStorage {
  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }

  async getBadges(): Promise<Badge[]> {
    return await db.select().from(badges);
  }

  async getCertifications(): Promise<Certification[]> {
    return await db.select().from(certifications);
  }

  async getExperience(): Promise<Experience[]> {
    return await db.select().from(experience);
  }

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const [message] = await db.insert(messages).values(insertMessage).returning();
    return message;
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const [project] = await db.insert(projects).values(insertProject).returning();
    return project;
  }

  async createBadge(badge: InsertBadge): Promise<Badge> {
    const [result] = await db.insert(badges).values(badge).returning();
    return result;
  }

  async createCertification(cert: InsertCertification): Promise<Certification> {
    const [result] = await db.insert(certifications).values(cert).returning();
    return result;
  }

  async createExperience(exp: InsertExperience): Promise<Experience> {
    const [result] = await db.insert(experience).values(exp).returning();
    return result;
  }
}

export const storage = new DatabaseStorage();
