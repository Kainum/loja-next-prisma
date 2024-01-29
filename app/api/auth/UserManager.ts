import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";

export async function GetCurrentUserID () {
    const session = await getServerSession();
    const user = session?.user;

    if (user == null) {
        return null;
    }

    const id = (await prisma.user.findFirst({
        where: {
            email: user.email?.toString()
        },
        select: {
            id: true
        }
    }))?.id

    return id;
}