let qty = 0;
const handleClick = () => {
  let button = document.querySelector("#button");
  let amount = document.querySelector("#qty");
  button.textContent = "In cart!";
  button.className = "product__bought";
  qty++;
  amount.textContent = String(qty);
};
