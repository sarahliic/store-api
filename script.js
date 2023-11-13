function storeApiTest() {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        // get all elemetns we need
        let container = document.querySelector(".container");
        let productCard = document.createElement("div");
        let productImage = document.createElement("div");
        let productDetails = document.createElement("div");
        let Image = document.createElement("img");
        let productTitle = document.createElement("h2");
        let productPrice = document.createElement("h4");
        let productBtn = document.createElement("button");
        //Append Child
        container.appendChild(productCard);
        productCard.appendChild(productImage);
        productImage.appendChild(Image);
        productCard.appendChild(productDetails);
        productDetails.appendChild(productTitle);
        productDetails.appendChild(productPrice);
        productDetails.appendChild(productBtn);

        // Add class to elements
        container.classList.add("container");
        productCard.classList.add("product-card");
        productDetails.classList.add("product-details");
        productImage.classList.add("product-image");
        productTitle.classList.add("product-title");
        productPrice.classList.add("product-price");
        productBtn.classList.add("add-to-cart-btn");
        // show data
        Image.src = `${data[i].image}`;
        productTitle.innerText = `${data[i].title}`;
        productPrice.innerText = `$${data[i].price}`;
        productBtn.innerText = "Add to Cart";
      }
    });
}

// Calling Function
storeApiTest();
