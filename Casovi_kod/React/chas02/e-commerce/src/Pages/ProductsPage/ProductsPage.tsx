import { useState } from "react";
import Button from "../../components/Button/Button";
import Counter from "../../components/Counter/Counter";
import ProductCard from "../../components/ProductCard/ProductCard";
import type { Product } from "../../models/Product.model";
import "./ProductsPage.css";

function ProductsPage() {
  const [showCounter, setShowCounter] = useState(true);
  const productsMock: Product[] = [
    {
      title: "TV",
      description: "A very nice LED TV",
      price: 599.98,
      stock: 1,
    },
    {
      title: "Dishwasher",
      description: "Freedom from the kitchen sink guaranteed",
      price: 299.99,
      stock: 5,
    },
    {
      title: "Fridge",
      description: "You will not resist the urge to open me all the time",
      price: 999.99,
      stock: 0,
    },
  ];
  const onSelectProduct = (product: Product) => {
    console.log("this is the selected product");
    console.log(product);
  };

  return (
    <section className="ProductsPage">
      <h2>Available Products</h2>
      <div className="products-container">
        {productsMock.map((product, i) => (
          <ProductCard
            onSelectProduct={onSelectProduct}
            product={product}
            key={i}
          />
        ))}
      </div>
      <h2>Events in React</h2>
      <div className="buttons-container">
        <Button onBtnClick={() => console.log("ej")} text="Print fullName" />
      </div>
      <Button
        text="Toggle Counter"
        onBtnClick={() => {
          setShowCounter((prev) => !prev);
        }}
      />
      {showCounter && <Counter />}
    </section>
  );
}

export default ProductsPage;
