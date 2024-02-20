import type { PageLoad } from "./$types";
export const load: PageLoad = async ({ fetch, url }) => {
    const href = url.href.split("/").pop();
    const res = await fetch(`/api/get-book?id=${href}`);
    const json = await res.json();
    return json;
}