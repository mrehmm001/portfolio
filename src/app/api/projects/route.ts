import { db } from "@/server/db";
import { NextResponse } from "next/server";

export async function GET() {
  let portfolio = await db.portfolio.findFirst();
  if (!portfolio) {
    portfolio = await db.portfolio.create({
      data: {
        aboutSectionContent: "",
        authorName: "",
        contactEmail: "",
        cvLink: "",
        heroSectionContent: "",
        experienceSection: [],
        featuredProjects: [],
        otherProjects: [],
      },
    });
  }
  return NextResponse.json(portfolio);
}

// export async function POST(request: Request) {}
