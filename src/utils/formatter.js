// export const priceFormater = new Intl.NumberFormat("id-ID", {
//   style: "currency",
//   currency: "IDR",
// }).replace(/(\.|,)00$/g, "");

export const rupiahFormater = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  })
    .format(number)
    .replace(/(\.|,)00$/g, "");
};
