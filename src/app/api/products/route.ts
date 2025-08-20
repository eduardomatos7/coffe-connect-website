import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/database";

export const GET = async (req: NextRequest) => {
  const products = await prisma.product.findMany();
  return NextResponse.json({ products });
};
