import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../client";
type Param = { params: { id: string } };

export async function PATCH(req: NextRequest, { params }: Param) {
  try {
    const { id } = params;
    const { title, content } = await req.json();

    const post = await prisma.post.update({
      where: { id: id },
      data: { title, content },
    });
    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.error(error);
    NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
