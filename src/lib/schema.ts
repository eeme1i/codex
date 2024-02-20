import {pgTable, serial, text, integer, date } from "drizzle-orm/pg-core"

export const BooksTable = pgTable("books", {
    id: serial("id").primaryKey(),
    title: text("title"),
    author: text("author"),
    pageCount: integer("page_count"),
    currentPage: integer("current_page"),
    createdAt: date("created_at").default("now()"),
    updatedAt: date("updated_at").default("now()"),
})