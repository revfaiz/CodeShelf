import { PrismaClient } from '@/generated/prisma';

export const db = new PrismaClient();

// prisma.snippet.create({
//     data:{
//         title: "Sample Snippet",
//         code: "const abc = () => { console.log(abc); }",
//     }
// })
