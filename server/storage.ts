
import { db } from "./db";
import { contactMessages, type InsertContactMessage, type ContactMessage } from "@shared/schema";

export interface IStorage {
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class DatabaseStorage implements IStorage {
  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const [contact] = await db.insert(contactMessages).values(message).returning();
    return contact;
  }
}

export const storage = new DatabaseStorage();
