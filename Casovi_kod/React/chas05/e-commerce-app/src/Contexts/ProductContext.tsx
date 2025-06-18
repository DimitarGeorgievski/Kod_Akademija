import { createContext, useState, type ReactNode } from "react";
import type { Product } from "../models/product.model";
import productsJSON from "../../src/data/products.json";

interface ProductsContextInterface {
  products: Product[];
  addToCart: (selectedProduct: Product) => void;
  removeFromCart: (selectedProduct: Product) => void;
  getproductsInCart: () => Product[];
}

export const ProductsContext = createContext<ProductsContextInterface>({
  products: [],
  addToCart() {},
  removeFromCart() {},
  getproductsInCart() {
    return [];
  },
});

function ProductsProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(productsJSON);
  const addToCart = (selectedProduct: Product) => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) => {
        if (selectedProduct.id === product.id) {
          product.inCart = true;
          return product;
        }
        return product;
      });
    });
  };
  const removeFromCart = (selectedProduct: Product) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === selectedProduct.id
          ? { ...product, inCart: false }
          : product
      )
    );
  };

  const getproductsInCart = () => products.filter((product) => product.inCart);

  return (
    <ProductsContext.Provider
      value={{ products, addToCart, removeFromCart, getproductsInCart }}
    >
      {children}
    </ProductsContext.Provider>
  );
}


export default ProductsProvider