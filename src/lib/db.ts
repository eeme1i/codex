import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { DATABASE_URL } from "$env/static/private";

const connectionString = DATABASE_URL;

if (!connectionString) {
    throw new Error("DATABASE_URL is not set");
}

const client = postgres(connectionString);
export const db = drizzle(client);