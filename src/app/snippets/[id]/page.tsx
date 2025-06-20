import { notFound } from "next/navigation";
import {db} from "@/db";
import Link from "next/link";
type Params = Promise<{ id: string }>;
import * as actions from "@/app/actions";
//props are automatically passed to the page component from the route
//in this case, the id is passed as a parameter in the URL

export default async function SnippetPage({
    params,
}: {
    params: Params;
}) {
    // await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate a delay of 3 seconds
    const { id } = await params;
    const snippet = await db.snippet.findFirst({
        where: {
            id: +id,
        },
    });
    if (!snippet) {
        return notFound(); // call the notFound function to render the 404 page 
        //that is nearest to the file where it is called
        // or you can us e the notFound.tsx file in the same directory
        //it will got to app directory and find the notFound.tsx file
    }
    
    //it can also work with the div tag do the same thing 
    const deleteSnippetAction = actions.deletesnippet.bind(null, snippet.id);

return (
    <div>
        <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-2">
                <h1 className="text-2xl font-bold text-gray-800">
                    Title : {snippet.title}
                </h1>
                <div className="flex gap-4">
                    {/* <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                        View
                    </button> */}
                    <Link className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700" 
                    href={`/snippets/${snippet.id}/edit`}>
                        Edit
                    </Link>
                        {/* 
                        Using a <form> with an action for delete because:
                        - Next.js Server Actions are triggered by form submissions.
                        - This keeps the delete logic on the server without client-side JS.
                        - Ensures clean, secure, and accessible handling of the delete operation.
                        */}
                    <form action={deleteSnippetAction}>
                        <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                            Delete
                        </button>
                    </form>
                </div>
            </div>
            <pre className="bg-gray-200 rounded p-4 overflow-x-auto text-sm shadow-md">
                <code>{snippet.code}</code>
            </pre>
        </div>
    </div>
)
}

export async function generateStaticParams(){
    const snippets = await db.snippet.findMany();
    return snippets.map(snippet => ({
        id: snippet.id.toString()
    })); 
}
