import ProductCard from "../../Components/ProductCard/ProductCard";
import type { Product } from "../../models/product.model";
import "./ProductsPage.css";

interface ProductsPageProps {
  product: Product[];
  addToCard: (selectedProduct: Product) => void
}

function ProductsPage({ product, addToCard }: ProductsPageProps) {
  return (
    <section className="page ProductsPage">
      <div className="page-heading">
        <h2>Products</h2>
      </div>
      <div className="card-container">
        {product.map((product) => (
          <ProductCard addToCard={addToCard} key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductsPage;
