import faker from "faker";

let products = "";
const productName = Array.from({ length: 6 }, () =>
  faker.commerce.productName()
);

productName.forEach((name) => {
  products += `<div>${name}</div>`;
});

console.log(products);
