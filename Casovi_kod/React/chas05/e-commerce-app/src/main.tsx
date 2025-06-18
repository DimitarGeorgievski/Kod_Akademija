import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import ProductsProvider from "./Contexts/ProductContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProductsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ProductsProvider>
  </StrictMode>
);
