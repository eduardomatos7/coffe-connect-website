import { StaticImageData } from "next/image";

export interface Product {
  id: number | string;
  imageUrl: StaticImageData | string;
  name: string;
  price: number;
  rebate?: number;
  quantity?: number | string;
}
