"use client";
import * as actions from "@/app/actions"; // Import your actions
import { useFormState } from "react-dom";

export default function SnippetCreatePage() {
  const [formState, action] = useFormState(actions.createSnippet, { message: '' });
  

  return (
    <div className="flex justify-center bg-gray-50">
      <form
        action={action}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg border border-gray-200"
      >
        <h3 className="font-bold text-center text-2xl mb-6 text-blue-700">
          Create a New 
        </h3>
        <div className="flex flex-col gap-6" >
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700" htmlFor="title">
              Title
            </label>
            <input
              name="title"
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
              id="title"
              placeholder="Enter snippet title"
              // required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700" htmlFor="code">
              Code
            </label>
            <textarea
              name="code"
              className="border border-gray-300 rounded px-3 py-2 w-full min-h-[120px] font-mono focus:outline-none focus:ring-2 focus:ring-blue-300"
              id="code"
              placeholder="Paste your code here"
              // required
            />
          <div>
              {formState.message ? (
              <div className="my-2 p-2 bg-red-100 border border-black rounded text-black text-sm">
                {formState.message}
              </div>
            ) : null}

          </div>
          </div>

          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Create Snippet
          </button>
        </div>
      </form>
    </div>
  );
}
