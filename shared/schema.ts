import { pgTable, text, serial, timestamp, varchar, date } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  link: text("link"),
  tags: text("tags").array(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const badges = pgTable("badges", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  icon: text("icon").notNull(), // Lucide icon name or URL
  description: text("description"),
});

export const certifications = pgTable("certifications", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  issuer: text("issuer").notNull(),
  date: date("date").notNull(),
  credentialUrl: text("credential_url"),
  imageUrl: text("image_url"),
});

export const experience = pgTable("experience", {
  id: serial("id").primaryKey(),
  role: text("role").notNull(),
  company: text("company").notNull(),
  location: text("location"),
  startDate: date("start_date").notNull(),
  endDate: date("end_date"), // null if current
  description: text("description").notNull(),
});

export const insertProjectSchema = createInsertSchema(projects).omit({ id: true, createdAt: true });
export const insertMessageSchema = createInsertSchema(messages).omit({ id: true, createdAt: true });
export const insertBadgeSchema = createInsertSchema(badges).omit({ id: true });
export const insertCertificationSchema = createInsertSchema(certifications).omit({ id: true });
export const insertExperienceSchema = createInsertSchema(experience).omit({ id: true });

export type Project = typeof projects.$inferSelect;
export type Message = typeof messages.$inferSelect;
export type Badge = typeof badges.$inferSelect;
export type Certification = typeof certifications.$inferSelect;
export type Experience = typeof experience.$inferSelect;

export type InsertProject = z.infer<typeof insertProjectSchema>;
export type InsertMessage = z.infer<typeof insertMessageSchema>;
export type InsertBadge = z.infer<typeof insertBadgeSchema>;
export type InsertCertification = z.infer<typeof insertCertificationSchema>;
export type InsertExperience = z.infer<typeof insertExperienceSchema>;
