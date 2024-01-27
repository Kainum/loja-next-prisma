import { prisma } from "@/prisma/client";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth ({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "E-mail", type: "text", placeholder: "Seu e-mail" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const user  = await prisma.user.findUnique({
                    where: {
                        email: credentials?.email
                    },
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        password: true,
                    }
                })

                if (user && user.password === credentials?.password) {
                    const {name, id, email} = user;
                    return {
                        id: id.toString(),
                        name,
                        email
                    }
                }

                return null;
            }
        }),
    ]
});

export { handler as GET, handler as POST }