import { db } from "$lib/db";
import { BooksTable } from "$lib/schema";
import { eq } from "drizzle-orm";

export async function POST({request}) {
    const book = await request.json();
    console.log("Creating book:", book);
    await db.delete(BooksTable).where(eq(BooksTable.id, book.id));
    
    return new Response(JSON.stringify({ message: "Hello from the server!" }), {status: 200});
}