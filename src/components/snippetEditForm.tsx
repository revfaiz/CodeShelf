"use client";
import type { Snippet } from "@/generated/prisma";
import Editor from '@monaco-editor/react'
import { useState } from "react";
interface SnippetEditFormProps {
  snippet: Snippet;
}
import * as actions from "@/app/actions";

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
    const [code, setCode] = useState(snippet.code); 
    
    const HandleEditorChange= (value: string ="") => {
        setCode(value);
        // console.log("Code changed:", value);
    }
    const editSnippetAction = actions.editsnippet.bind(null, snippet.id, code);

    return (
        <div>
            <Editor
                height="40vh"
                theme="vs-dark"
                defaultLanguage="javascript"
                defaultValue={snippet.code}
                options={{
                    // readOnly: true, // Set to true to make the editor read-only
                    minimap: { enabled: false }, // Disable minimap for better readability
                    scrollBeyondLastLine: false, // Prevent scrolling beyond the last line
                }}
                onChange={HandleEditorChange}
            />

            <form action={editSnippetAction} >
                <button type="submit" className="border rounded p-2 bg-blue-200 mt-4">
                    Save
                </button>
            </form>
        </div>
        

    )
}

