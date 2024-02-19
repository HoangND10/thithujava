const searchParam = new URLSearchParams(document.location.search);
const id = searchParam.get("id");

const prdName = document.querySelector("#prd-name");
const prdDescription = document.querySelector("#prd-description");
const prdPrice = document.querySelector("#prd-price");
const prdImage = document.querySelector("#prd-image");
const addUpdate = document.querySelector("#form-update");

fetch("http://localhost:3000/products/" + id)
  .then((response) => response.json())
  .then((data) => {
    prdName.value = data.name;
    prdDescription.value = data.description;
    prdPrice.value = data.price;
    prdImage.value = data.image;
  });

addUpdate.addEventListener("submit", (e) => {
  e.preventDefault();
  let updateData = {
    name: prdName.value,
    description: prdDescription.value,
    image: prdImage.value,
    price: prdPrice.value,
  };
  fetch("http://localhost:3000/products/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateData),
  }).then(() => {
    window.location = "./index.html";
  });
});
