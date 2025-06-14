import './App.css'
import Footer from './Layout/Footer/Footer'
import Header from './Layout/Header/Header'
import type { NavLink } from './models/code.model'
import ProductsPage from './Pages/ProductsPage/ProductsPage'

function App() {
  const appName = "e-commerce App"
  const linkData: NavLink[] = [
    {
      text: "Home",
      path: "/home"
    },
    {
      text: "About-us",
      path: "/about-us"
    },
    {
      text: "Products",
      path: "/products"
    },
    {
      text: "Contact",
      path: "/contact"
    },
  ]
  return (
    <div className="App">
      <Header title={appName} linkData={linkData}/>
      <main>
        <ProductsPage/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
