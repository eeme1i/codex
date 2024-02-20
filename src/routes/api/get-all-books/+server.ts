import { db } from "$lib/db";
import { BooksTable} from '$lib/schema';

export async function GET({ request}) {
		const allBooks = await db.select().from(BooksTable).orderBy(BooksTable.title);
		return new Response(JSON.stringify({ books: allBooks }), {status: 200});
}