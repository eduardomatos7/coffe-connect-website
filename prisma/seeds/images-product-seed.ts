import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const bucketUrl = process.env.AWS_BUCKET_URL;
  const products = [
    {
      name: "Brownie",
      imageURL: `${bucketUrl}/brownie.jpg`,
      price: 12.9,
    },
    {
      name: "Cappuccino",
      imageURL: `${bucketUrl}/cappuccino.jpg`,
      price: 14.5,
    },
    {
      name: "Chai Latte",
      imageURL: `${bucketUrl}/chai_latte.jpg`,
      price: 16.0,
    },
    {
      name: "Cheese Bread",
      imageURL: `${bucketUrl}/cheese_bread.jpg`,
      price: 8.9,
    },
    {
      name: "Cheesecake",
      imageURL: `${bucketUrl}/cheesecake.jpg`,
      price: 18.0,
    },
    {
      name: "Croissant",
      imageURL: `${bucketUrl}/croissant.jpg`,
      price: 9.5,
    },
    {
      name: "Donut",
      imageURL: `${bucketUrl}/donut.jpg`,
      price: 10.9,
    },
    {
      name: "Espresso",
      imageURL: `${bucketUrl}/espresso.jpg`,
      price: 6.9,
    },
    {
      name: "Iced Coffee",
      imageURL: `${bucketUrl}/iced_coffee.jpg`,
      price: 11.9,
    },
    {
      name: "Juice",
      imageURL: `${bucketUrl}/juice.jpg`,
      price: 7.9,
    },
    {
      name: "Muffin",
      imageURL: `${bucketUrl}/muffin.jpg`,
      price: 8.5,
    },
    {
      name: "Sandwich",
      imageURL: `${bucketUrl}/sandwich.jpg`,
      price: 19.9,
    },
    {
      name: "Smoothie",
      imageURL: `${bucketUrl}/smoothie.jpg`,
      price: 13.9,
    },
  ];

  for (const product of products) {
    const url = product.imageURL;

    await prisma.product.create({
      data: {
        name: product.name,
        price: product.price,
        imageUrl: url,
      },
    });
  }

  console.log("Produtos inseridos com sucesso!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
