import {db} from "@/db";
import {notFound} from "next/navigation";
import SnippetEditForm from "@/components/snippetEditForm";

type Params = Promise<{ id: string }>;

export default async function SnippetEdit({
    params,
}: {
    params: Params;
}) {
    const { id } = await params;

    const snippet = await db.snippet.findFirst({
        where: {
            id: +id,
        },
    });
    if (!snippet) {
        return notFound(); // Redirect to the 404 page if snippet not found
    }


    return (
        <div>
            {/* <h1>Edit Snippet {id}</h1>
            <h2> Title: {snippet.title}</h2>
            Add your edit form or content here */}
            <SnippetEditForm snippet={snippet} />
        </div>
    )
}