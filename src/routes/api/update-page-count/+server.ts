import { db } from "$lib/db.js";
import { BooksTable } from "$lib/schema.js";
import { eq } from "drizzle-orm";

export async function POST({request}) {
    let book = await request.json()
    await db.update(BooksTable)
        .set({currentPage: book.currentPage, updatedAt: new Date().toISOString()})
        .where(eq(BooksTable.id, book.id));
        
    console.log("Updated book:", book.id, book.currentPage)

    return new Response(JSON.stringify({ message: "Hello from the server!" }), {status: 200});
}