import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/database";

export const GET = async () => {
  const products = await prisma.product.findMany();
  return NextResponse.json({ products });
};
