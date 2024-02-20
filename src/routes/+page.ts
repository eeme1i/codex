import type { PageLoad } from "./$types";
import type { Book } from "$lib/types";

export const load: PageLoad = async ({ fetch }) => {
    const res = await fetch("/api/get-all-books");
    const json = await res.json();
    return json;
};