import { 
  projects, messages, badges,
  type Project, type InsertProject, 
  type Message, type InsertMessage,
  type Badge, type InsertBadge
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getProjects(): Promise<Project[]>;
  getBadges(): Promise<Badge[]>;
  createMessage(message: InsertMessage): Promise<Message>;
  createProject(project: InsertProject): Promise<Project>;
  createBadge(badge: InsertBadge): Promise<Badge>;
}

export class DatabaseStorage implements IStorage {
  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }

  async getBadges(): Promise<Badge[]> {
    return await db.select().from(badges);
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
}

export const storage = new DatabaseStorage();
