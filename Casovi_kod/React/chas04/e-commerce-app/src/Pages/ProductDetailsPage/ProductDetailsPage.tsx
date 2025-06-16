import { Navigate, useParams } from "react-router-dom";
import type { Product } from "../../models/product.model";
import ProductDetailsPanel from "../../Components/ProductDetailsPanel/ProductDetailsPanel";

interface ProductDetailsPageProps{
    product: Product[];
}

function ProductDetailsPage({product}: ProductDetailsPageProps) {
    const {id} = useParams();
    const foundProduct = product.find(product => product.id === Number(id))
    return <section className="Page">
        <div className="page-heading">
            <h2>Product Details</h2>
        </div>
        <div className="page-content">
            {foundProduct ? (<ProductDetailsPanel product={foundProduct}/>) : <Navigate to="/not-found"/>}
        </div>
    </section>
}

export default ProductDetailsPage