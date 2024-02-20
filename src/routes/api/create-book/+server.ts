import { db } from "$lib/db.js";
import { BooksTable } from "$lib/schema.js";

export async function POST({request}) {
    const book = await request.json();
    console.log("Creating book:", book);
    
    await db.insert(BooksTable).values({
        title: book.title,
        author: book.author,
        currentPage: book.currentPage,
        pageCount: book.pageCount,
        createdAt: book.createdAt,
        updatedAt: book.updatedAt
    });

    return new Response(JSON.stringify({ message: "Hello from the server!" }), {status: 200});
    
}