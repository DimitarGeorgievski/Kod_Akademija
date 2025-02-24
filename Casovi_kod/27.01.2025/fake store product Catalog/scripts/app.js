const urls = {
    category: "https://fakestoreapi.com/products/categories",
    allProducts: "https://fakestoreapi.com/products",
    productsByCategory: "https://fakestoreapi.com/products/category/",
  };
  let pagination = {
    totalItems: 0,
    maxPages: 0,
    currentPage: 0,
  }
  let categoryChosen = null;
  let pageSizes = [3, 6, 9];
  let currentProductSizes = 6;
  let cartProducts = [];
  let totalPrice =0;
  let filterDiv = document.getElementById("filters");
  let productsMainDiv = document.getElementById("products");
  let categoryHeader = document.getElementById("category-title");
  let productsDiv = document.getElementById("show-products");
  let prevBtn = document.getElementById("prevBtn");
  let nextBtn = document.getElementById("nextBtn");
  let pages = document.getElementById("pageSize");
  let categoryFilter = document.getElementById("category-filter");
  let buyBtn = document.getElementById("buyCartBtn");
  
  // get all categories
  function getAllCategories() {
    fetch(urls.category)
      .then((response) => response.json())
      .then((data) => {
        showCategoriesDropDown(data);
      });
  }
  function getAllProducts(page,pageSize) {
    fetch(urls.allProducts)
      .then((res) => res.json())
      .then((products) => {
          pagination.totalItems = products.length;
          pagination.maxPages = Math.ceil(pagination.totalItems / currentProductSizes);
        let cutProductsFirstpage = products.splice(page*pageSize,pageSize);
        document.getElementById("pages").innerHTML = `${pagination.currentPage + 1}/ ${pagination.maxPages}`
            showProducts(cutProductsFirstpage);
      });
  }
  
  function getProductsByCategory(page,pageSize,category) {
    fetch(`${urls.productsByCategory}${category}`)
      .then((res) => res.json())
      .then((products) => {
        pagination.totalItems = products.length;
        pagination.maxPages = Math.ceil(pagination.totalItems / currentProductSizes);
        let cutProductsFirstpage = products.splice(page*pageSize,pageSize);
        document.getElementById("pages").innerHTML = `${pagination.currentPage + 1}/ ${pagination.maxPages}`
        showProducts(cutProductsFirstpage);
      });
  }
   
  function addCartEventListeners() {
    let cartBtns = document.querySelectorAll(".cart");
    for(let btn of cartBtns){
      btn.addEventListener("click", (e) => {
      cartProducts = [...new Set([...cartProducts, e.target.getAttribute("data-product-id")])];
      console.log(cartProducts);
      });
    }
  }
  function showCategoriesDropDown(data) {
    let btn = `<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Categories</button>`;
    let ul = '<ul class="dropdown-menu">';
    for (let category of data) {
      let li = `<li><button name='category' class="dropdown-item" value="${category}">${category}</button></li>`;
      ul += li;
    }
    ul += "</ul>";
    let html = `<div class="dropdown">
          ${btn} ${ul}
      </div>`;
    document.getElementById("category-filter").innerHTML = html;
  }
  function showProducts(products) {
    let html = "";
    for (let product of products) {
      let card = `<div class="card" style="width: 25rem;">
                  <img src="${product.image}" class="card-img-top" alt="..." style="width: 100%; height: 20rem; object-fit: contain;">
                  <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">Price: ${product.price} $</p>
                    <button class="btn btn-primary cart" data-product-id='${product.id}'>Add to cart</button>
                  </div>
                </div>`;
      html += card;
    }
    productsDiv.innerHTML = html;
    addCartEventListeners();
  }
  function dropdownPageSize() {
    let content = document.getElementById("pageSize");
    let html = `<option>Page Size</option>`;
    for (let i of pageSizes) {
      html += `<option ${i === currentProductSizes ? "selected" : ""} value="${i}">${i}</option>`;
    }
    content.innerHTML = html;
  }
  function cartItems(ids){
    fetch(urls.allProducts)
    .then((res) => res.json())
    .then(data => {
      let filteredProducts = data.filter(product => ids.includes(product.id.toString()));
      console.log(filteredProducts);
      totalPrice = 0;
      let html = "";
    for(let product of filteredProducts){
      let card = `<div class="card mb-3" style="max-width: 540px;">
                  <div class="row g-0">
                  <div class="col-md-4">
                  <img src="${product.image}" class="img-fluid rounded-start" alt="...">
                  </div>
                  <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">Price: ${product.price}$</p>
                    <button name="remove-cart" class="btn btn-secondary cart" data-product-id="${product.id}">Remove Item</button>
                  </div>
                </div>
                </div>
                </div>`;
                html += card;
                totalPrice += Number(product.price);
  }
  document.getElementById("pages").innerHTML = `Total Price: ${totalPrice}$`;
  document.getElementById("buyCartBtn").style.display = "inline-block";
  productsDiv.innerHTML = html;
})
  }

  dropdownPageSize();
  getAllCategories();
  categoryFilter.addEventListener("click", (e) => {
    if(e.target.tagName === "BUTTON" && e.target.name === "category"){
      categoryHeader.innerText = `Category: ${e.target.value}`;
      categoryChosen = e.target.value;
      pagination.currentPage = 0;
      getProductsByCategory(pagination.currentPage,currentProductSizes,e.target.value);
    }
  });
   
  document.getElementById("products-nav").addEventListener("click", () => {
    categoryChosen = null;
    filterDiv.style.display = "block";
    productsMainDiv.style.display = "block";
    categoryHeader.innerText = "All Products";
    prevBtn.style.display = "block";
    nextBtn.style.display = "block";
    pages.style.display = "block";
    categoryFilter.style.display = "block"
    document.getElementById("pages").style.display = "block";
    pagination.currentPage = 0;
    buyBtn.style.display = "none"
    getAllProducts(pagination.currentPage, currentProductSizes);
  });
   
  pages.addEventListener("change", (e) => {
    currentProductSizes = e.target.value;
    if(categoryChosen){
      getProductsByCategory(pagination.currentPage,currentProductSizes,categoryChosen);
    }
    else{
      getAllProducts(pagination.currentPage, currentProductSizes);
    }
  });
  nextBtn.addEventListener("click",function(){
    if(categoryChosen){
      if(pagination.currentPage!== pagination.maxPages -1){
        pagination.currentPage = 0;
        pagination.currentPage+=1;
        getProductsByCategory(pagination.currentPage,currentProductSizes,categoryChosen);
    }
    else{
      if(pagination.currentPage!== pagination.maxPages -1){
        pagination.currentPage+=1;
        getAllProducts(pagination.currentPage, currentProductSizes);
    }
    }
    }
    else{
      if(pagination.currentPage !== pagination.maxPages - 1){
          pagination.currentPage += 1;
          getAllProducts(pagination.currentPage, currentProductSizes);
      }
  }
  })
  prevBtn.addEventListener("click",function(){
    if(categoryChosen){
      if(pagination.currentPage>0){
        pagination.currentPage -= 1;
        getProductsByCategory(pagination.currentPage,currentProductSizes, categoryChosen);
      }
    }
    else{
      if(pagination.currentPage>0){
        pagination.currentPage -= 1;
        getAllProducts(pagination.currentPage, currentProductSizes);
      }
    }
  })
  document.getElementById("cart").addEventListener("click",function(){
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
    pages.style.display = "none";
    categoryFilter.style.display = "none";
    categoryHeader.innerHTML = "Cart";
    cartItems(cartProducts);
  });
  productsDiv.addEventListener("click", function(e){
    if(e.target.tagName === "BUTTON" && e.target.name === "remove-cart"){
      let productId = e.target.getAttribute("data-product-id");
      let index = cartProducts.indexOf(productId);
      cartProducts.splice(index, 1);
      let card = e.target.closest(".card");
      card.remove();
      cartItems(cartProducts);
    }
  })
  buyBtn.addEventListener("click",function(){
    cartProducts = [];
    prevBtn.style.display = "block";
    nextBtn.style.display = "block";
    pages.style.display = "block";
    categoryFilter.style.display = "block";
    buyBtn.style.display = "none";
    categoryHeader.innerHTML = "Products";
    getAllProducts(pagination.currentPage, currentProductSizes);
  })