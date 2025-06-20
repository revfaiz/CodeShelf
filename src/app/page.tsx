import Image from "next/image";
import Link from "next/link";
import { db } from "@/db";

// export const dynamic = "force-dynamic"; // Ensures the page is always rendered on the server  
export default async function Home() {
  const snippets = await db.snippet.findMany();
  const renderedSnippets = snippets.map((snippet) => {
    return(
    <Link key={snippet.id} className="py-2 flex justify-between items-center p-2 border rounded hover:bg-gray-100 transition-colors" 
      href={`/snippets/${snippet.id}`}>

      <h1>Snippet ID : {snippet.id}</h1>
      <h1 className="text-lg font-semibold">View</h1>
    </Link>
    )  
});

  return (
    <div >
      <div className="flex items-center justify-between mb-4">
          <Link href="/snippets/new" className="border p-2 rounded hover:underline">
          Create NEW Snippet
        </Link>

      </div>
      
      <div className="flex flex-col gap-2">{renderedSnippets}</div>
    </div>
  );
}
