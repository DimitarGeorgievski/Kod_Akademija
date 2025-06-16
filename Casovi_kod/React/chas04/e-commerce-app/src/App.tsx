import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import CartPage from "./Pages/CartPage/CartPage";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import productsJSON from "./data/products.json"
import { useState } from "react";
import type { Product } from "./models/product.model";
import ProductDetailsPage from "./Pages/ProductDetailsPage/ProductDetailsPage";

function App() {
  const [products, setProducts] = useState<Product[]>(productsJSON);
  const addToCart = (selectedProduct: Product) => {
    setProducts((prevProducts) => {
      return prevProducts.map(product => {
        if(selectedProduct.id === product.id) {
          product.inCart = !product.inCart
        }
        return product
      })
    })
  }
  return (
    <div className="App">
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/products"/>}/>
          <Route path="/products" element={<ProductsPage product={products} />}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/products/:id" element={<ProductDetailsPage product={products}/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
