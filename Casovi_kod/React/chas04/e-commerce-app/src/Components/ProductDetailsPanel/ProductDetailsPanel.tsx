import type { Product } from "../../models/product.model";
import Button from "../Button/Button";
import "./ProductDetailsPanel.css";

interface ProductDetailsPanel {
  product: Product;
}

function ProductDetailsPanel({ product }: ProductDetailsPanel) {
  return (
    <div className="ProductDetailsPanel">
      <h3>{product.title}</h3>
      <div className="panel-content">
        <div>
            <img src={product.image} alt={product.title} />
        </div>
        <div className="panel-details">
            <p>${product.price}</p>
            <Button disabled={product.inCart} text={product.inCart ? "ADDED" : "🛒"} onBtnClick={() => {
                console.log("Button added to cart")
            }}/>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPanel;
