export function menuRebate(price: number, rebate: number) {
  const discountedPrice = price - (price * rebate) / 100;
  return discountedPrice;
}
