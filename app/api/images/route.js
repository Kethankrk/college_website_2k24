import prisma from "@/prisma/db";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
      const data = await req.json()

      const category = await prisma.category.findUnique({
        where: {id: data.id},
        select: {images: true}
      })

      if(!category){
        return NextResponse.json({"Error": "Unknown error"})
      }
      const updatedImageUrl = [...category.images, ...data.images]

      await prisma.category.update(
        {
            where: { id: data.id },
            data: {
                images: updatedImageUrl
            }
        }
      )
      return NextResponse.json({"message": "success"});
      
    } catch (error) {
      console.log(error)
      return NextResponse.json({"Error": "Unknown error"})
    }
  }


export async function GET(req){
    const categories = await prisma.category.findMany({})
    return NextResponse.json(categories)
}