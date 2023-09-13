import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

import { NextResponse } from "next/server";

// Handles GET requests to /api
export async function GET(req:NextApiRequest, res:NextResponse) {
  
    const products=await prisma.product.findMany();
  return NextResponse.json({products});
}
