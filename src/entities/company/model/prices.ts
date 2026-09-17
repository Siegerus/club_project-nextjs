export const ticketPrice = 100;

export type PremiumSale = {
  halfYear: { text: "6"; price: number };
  fullYear: { text: "12"; price: number };
  twoYears: { text: "24"; price: number };
};

export const premiumSales: PremiumSale = {
  halfYear: { text: "6", price: 31000 },
  fullYear: { text: "12", price: 50000 },
  twoYears: { text: "24", price: 92000 },
};
