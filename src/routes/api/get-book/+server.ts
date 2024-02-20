import { db } from "$lib/db";
import { desc, eq } from "drizzle-orm";
import { BooksTable } from "$lib/schema.js";

export async function GET({ url }) {
    let bookId = Number(url.searchParams.get('id'));
    const book = await db.select().from(BooksTable).where(eq(BooksTable.id, bookId));
    
    console.log("Got book: ", bookId, book[0])

    return new Response(JSON.stringify({ book: book }), {status: 200});
}