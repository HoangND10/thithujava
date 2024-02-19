const table = document.querySelector("#table");

fetch("http://localhost:3000/products")
  .then((res) => res.json())
  .then((data) => render(data))
  .then(() => {
    const deleteBtns = document.querySelectorAll(".delete-btn");
    for (let btn of deleteBtns) {
      btn.addEventListener("click", function () {
        const id = btn.dataset.id;
        fetch("http://localhost:3000/products/" + id, {
          method: "DELETE",
        });
      });
    }
  });

const deleteBtns = document.querySelectorAll(".delete-btn");
console.log(deleteBtns);

function render(data) {
  let text = "";
  data.forEach(function (product, index) {
    text += `
            <tr>
                <td>${index + 1}</td>
                <td>${product.name}</td>
                <td>${product.description}</td>
                <td><img src=${product.image}/></td>
                <td>${product.price}</td>
                <td>
                    <button class="delete-btn" data-id=${
                      product.id
                    } style="background-color: red">Xoá</button>
                    <a href="update-product.html?id=${
                      product.id
                    }"><button style="background-color: blue">Cập nhật</button></a>     
                </td>
            </tr>
        `;
  });
  table.innerHTML = text;
}
