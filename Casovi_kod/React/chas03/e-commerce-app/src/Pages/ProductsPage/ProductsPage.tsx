import { useEffect, useState } from "react";
import Button from "../../Components/Button/Button";
import ProductsList from "../../Components/ProductsList/ProductsList";
import "./ProductsPage.css";
import type { Product } from "../../models/product.model";
import productsJSON from "../../data/products.json"
import ProductInfo from "../../Components/ProductInfo/ProductInfo";

function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isInfoShown, setIsInfoShown] = useState(true)
  const onSelectProduct = (product: Product) => {
    setSelectedProduct(product)
  }
  // ova se koristi za fetch na data i slicni raboti 
  useEffect(() => {
    setTimeout(() => {
      setProducts(productsJSON)
    }, 1500)
  }, [])
  // ova nikako oti e infinity loop deka ima 2 variabli od ist useState
  // useEffect(() => {
    // setIsInfoShown(prev => !prev)
  // }, [isInfoShown])

  useEffect(() => {
    console.log("is Info shown changed, use effect executed")
  },[isInfoShown])
  useEffect(() => {
    console.log("selected product changed, use effect executed")
  }, [selectedProduct])
  return (
    <section className="ProductsPage">
      <div>
        <div className="buttons-container">
          <Button
            text="Toggle Info Panel"
            onBtnClick={() => {
              console.log("toggle info panel btn");
              setIsInfoShown((prev) => !prev)
            }}
          />
          <Button
            text="Fetch Products"
            onBtnClick={() => {
              console.log("toggle fetch products btn")
              setProducts(productsJSON);
            }}
          />
        </div>
      </div>
      <div className="content">
        {/* Products List */}
            <ProductsList products={products} onSelectProduct={onSelectProduct}/>
        {/* Products Info */}
        {isInfoShown && <ProductInfo selectedProduct={selectedProduct}/>}
      </div>
    </section>
  );
}

export default ProductsPage;
