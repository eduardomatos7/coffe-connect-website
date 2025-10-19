import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/database";

export const GET = async () => {
  const products = await prisma.product.findMany();

  const productsWithFixedUrls = products.map((product) => {
    let imageUrl = product.imageUrl;

    if (imageUrl && !imageUrl.startsWith("http://") && !imageUrl.startsWith("https://")) {
      imageUrl = `https://${imageUrl}`;
    }

    return {
      ...product,
      imageUrl,
    };
  });

  return NextResponse.json({ products: productsWithFixedUrls });
};
