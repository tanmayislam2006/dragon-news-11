import prisma from "@/lib/prisma";
import axios from "axios";
import { NextResponse } from "next/server";

const API_URL = "https://newsapi.org/v2/top-headlines/sources";
const API_KEY = "0078f024448e44a88e05e6408bfdd08c";
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category") || "";
    const country = searchParams.get("country") || "";
    const language = searchParams.get("language") || "";

    const res = await axios.get(`${API_URL}?apiKey=${API_KEY}`);
    const data = res.data.sources || [];
    await prisma.news.upsert({
      where: { id: data.id },
      create: {
        id: data.id,
        name: data.name,
        description: data.description,
        url: data.url,
        category: data.category,
        language: data.language,
        country: data.country,
      },
      update: {},
    });
    const filter = await prisma.news.findMany({
      where: {
        AND: [
          { country: country },
          { category: category },
          { language: language },
        ],
      },
    });
    return NextResponse.json({ filter });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 },
    );
  }
}
