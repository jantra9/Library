import { timestamp, varchar,integer, pgEnum, pgTable, text, date, uuid } from 'drizzle-orm/pg-core';

export const STATUS_ENUM=pgEnum("status",["PENDING","APPROVED", "REJECTED"] );

export const ROLE_ENUM=pgEnum("role_status",["USER","ADMIN"] );

export const BORROW_STATUS_ENUM=pgEnum("borrow_status",["BORROWED", "RETURNED"] )

export const users = pgTable('users', {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  fullName: varchar("full_name", {length:200}).notNull(),
  email: text('email').notNull().unique(),
  universityId:integer("university_id").unique().notNull(),
  password:text("password").notNull(),
  universityCard:text("university_card").notNull(),
  status: STATUS_ENUM("status").default("PENDING"),
  role:ROLE_ENUM("role").default("USER"),
  lastActivityDate:date("last_activity_date").defaultNow(),
  createAt:timestamp("created_at",{withTimezone:true}).defaultNow(),
});


