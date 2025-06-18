import { useContext, useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import SearchInput from "../../Components/SearchInput/SearchInput";
import type { Product } from "../../models/product.model";
import "./ProductsPage.css";
import { ProductsContext } from "../../Contexts/ProductContext";


function ProductsPage() {
  const {products} = useContext(ProductsContext)
  const [filteredProducts, setFilteredProducts] = useState(products)
  const onSearch = (value: string) => {
    setFilteredProducts(products.filter(product => product.title.toLowerCase().includes(value)))
  }
  return (
    <section className="page ProductsPage">
      <div className="page-heading">
        <h2>Products</h2>
      </div>
      <div>
        <div className="card-container">
          <SearchInput onSearch={onSearch}/>
        </div>
      </div>
      
      <div className="card-container">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductsPage;