const prdName = document.querySelector("#prd-name");
const prdDescription = document.querySelector("#prd-description");
const prdPrice = document.querySelector("#prd-price");
const prdImage = document.querySelector("#prd-image");
const addForm = document.querySelector("#form-add");

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let newProduct = {
    name: prdName.value,
    description: prdDescription.value,
    image: prdImage.value,
    price: prdPrice.value,
  };
  fetch("http://localhost:3000/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  }).then(() => {
    window.location = "./index.html";
  });
});
