const getFormattedPrice = (price: number, withSymbol: boolean): string => {
  if (withSymbol) {
    return price.toLocaleString("ru-RU") + " ₽";
  }
  return price.toLocaleString("ru-RU");
};

export default getFormattedPrice;
