import prisma from "@/prisma/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json()
    const title = data.title
    await prisma.category.create({
      data: {
        title
      }
    })
    return NextResponse.json({"message": "success"});
    
  } catch (error) {
    console.log(error)
    return NextResponse.json({"Error": "Unknown error"})
  }
}