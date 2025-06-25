import { useContext } from "react";
import "./CheckoutDetails.css";
import { ProductsContext } from "../../Contexts/ProductsContext";

export function CheckoutDetails() {
  const { getProductsInCart } = useContext(ProductsContext);
  const cartProducts = getProductsInCart();
  return (
    <div className="CheckDetails">
      <ul className="checkout-list">
        {cartProducts.map((products, i) => (
          <li key={products.id}>
            <strong>{i + 1}</strong>. <span>{products.title}</span>
            <span className="item-quantity">
              ${products.price} X {products.quantity}
            </span>
            <span className="item-total">
              ${(products.price * products.quantity).toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
