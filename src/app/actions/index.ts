'use server';
import { db } from "@/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function editsnippet(id: number, code: string) {
    await db.snippet.update({
        where: { id },
        data: { code }
    });
    
    // redirect(`/snippets/${id}`);
    revalidatePath(`/snippets/${id}`);
    redirect(`/`);
}

export async function deletesnippet(id: number) {
    await db.snippet.delete({
        where: { id }
    });
    revalidatePath("/");
    revalidatePath(`/snippets/${id}`);
    redirect("/");
}

export async function createSnippet(formState: { message: string }, formData: FormData) {
    const title = formData.get("title");
    const code = formData.get("code");

    if (typeof title !== "string" || title.length < 3) {
        return {
            message: 'Title must be at least 3 characters long'
        };
    }

    if (typeof code !== "string" || code.length < 10) {
        return {
            message: 'Code must be at least 10 characters long'
        };
    }

    await db.snippet.create({
        data: {
            title,
            code
        },
    });
    revalidatePath("/");
    redirect("/");
}
