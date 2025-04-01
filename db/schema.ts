import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const issuesTable = sqliteTable("issues", {
  id: integer("id").primaryKey(),
  issueTitle: text("issue_title").notNull(),
  location: text("location").notNull(),
  description: text("description").notNull(),
  priority: text("priority").notNull(),
  contactName: text("contact_name").notNull(),
  contactEmail: text("contact_email"),
  created_at: text("created_at"),
});


export type InsertIssue = typeof issuesTable.$inferInsert;
export type SelectIssue = typeof issuesTable.$inferSelect;
