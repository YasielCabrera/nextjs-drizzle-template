import { integer, text, boolean, pgTable } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
});
