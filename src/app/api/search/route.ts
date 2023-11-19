import prisma from "@/database";
import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client"; // Import Prisma types if not imported

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const extractQuery = url.searchParams.get("query");

    const searchPostList = await prisma.post.findMany({
      where: {
        OR: [
          {
            title: extractQuery ? {
              contains: extractQuery, // Use contains directly without mode or value
              mode: "insensitive", // Add mode for case-insensitive search
            } : undefined,
          },
        ],
      },
    });

    if (searchPostList) {
      return NextResponse.json({
        success: true,
        data: searchPostList,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to search results",
      });
    }
  } catch (e) {
    console.log(e);

    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
}
