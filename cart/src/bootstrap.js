import faker from "faker";

const cartText = `<div>Você tem ${faker.random.number()} itens no seu carrinho.</div>`;

document.querySelector("#cart-view").innerHTML = cartText;
