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
  let pageSizes = [3, 6, 9];
  let currentProductSizes = 6;
  let cartProducst = [];
  let filterDiv = document.getElementById("filters");
  let productsMainDiv = document.getElementById("products");
  let categoryHeader = document.getElementById("category-title");
  let productsDiv = document.getElementById("show-products");
   
  // get all categories
  function getAllCategories() {
    fetch(urls.category)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        showCategoriesDropDown(data);
      });
  }
  function getAllProducts(page,pageSize) {
    fetch(urls.allProducts)
      .then((res) => res.json())
      .then((products) => {
          pagination.totalItems = products.length;
          pagination.maxPages = Math.ceil(pagination.totalItems / currentProductSizes);
          console.log( Math.ceil(pagination.totalItems / currentProductSizes))
        let cutProductsFirstpage = products.splice(page*pageSize,pageSize);
        document.getElementById("pages").innerHTML = `${pagination.currentPage + 1}/ ${pagination.maxPages}`
            showProducts(cutProductsFirstpage);
      });
  }
   
  function getProductsByCategory(category) {
    fetch(`${urls.productsByCategory}${category}`)
      .then((res) => res.json())
      .then((products) => {
        showProducts(products);
      });
  }
   
  function addCartEventListeners() {
    let cartBtns = document.querySelectorAll(".cart");
    // console.log(cartBtns);
    for (let btn of cartBtns) {
      btn.addEventListener("click", (e) => {
        console.log(e.target.getAttribute("data-product-id"));
      });
    }
  }
   
  // getAllProducts();
   
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
  dropdownPageSize();
  getAllCategories();
  document.getElementById("category-filter").addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON" && e.target.name === "category") {
      categoryHeader.innerText = `Category: ${e.target.value}`;
      getProductsByCategory(e.target.value);
    }
  });
   
  document.getElementById("products-nav").addEventListener("click", () => {
    filterDiv.style.display = "block";
    productsMainDiv.style.display = "block";
    categoryHeader.innerText = "All Products";
    getAllProducts(pagination.currentPage, currentProductSizes);
  });
   
  document.getElementById("pageSize").addEventListener("change", (e) => {
    currentProductSizes = e.target.value;
    getAllProducts(pagination.currentPage, currentProductSizes);
  });
  document.getElementById("nextBtn").addEventListener("click",function(){
    pagination.currentPage += 1;
    getAllProducts(pagination.currentPage, currentProductSizes)
    // if(pagination.currentPage!== pagination.maxPages){
    //     pagination.currentPage+=1;
    // }
  })
  document.getElementById("prevBtn").addEventListener("click",function(){
    pagination.currentPage -= 1;
    getAllProducts(pagination.currentPage, currentProductSizes)
    // if(pagination.currentPage!==1){
    //     pagination.currentPage-=1;
    // }
  })
  