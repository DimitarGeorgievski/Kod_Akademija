import { Link } from "react-router-dom";
import type { Product } from "../../models/product.model";
import Button from "../Button/Button";
import "./ProductCard.css";

interface ProductCardProps {
  product: Product;
  addToCard: (selectedProduct: Product) => void;
}

function ProductCard({ product, addToCard }: ProductCardProps) {
  return (
    <div className="ProductCard">
      <Link to={`/products/${product.id}`}>
        <h3>{product.title}</h3>
        <img src={product.image} alt={product.title} />
      </Link>
      <div className="card-details">
        <p>${product.price}</p>
        <Button
          disabled={product.inCart}
          text={product.inCart ? "ADDED" : "🛒"}
          onBtnClick={() => {
          
          }}
        />
      </div>
    </div>
  );
}

export default ProductCard;
