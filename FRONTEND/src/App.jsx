import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Login from "./Pages/Login/Login"
import Shop from "./Pages/Shop/Shop"
import ShopCategory from "./Pages/ShopCategory/ShopCategory"
import Product from "./Pages/Product/Product"
import Cart from "./Pages/Cart/Cart"
import Footer from "./Components/Footer/Footer"
import banner_men from './assets/banner_mens.png'
import banner_women from './assets/banner_women.png'
import banner_kid from './assets/banner_kids.png'


function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path="/mens" element={<ShopCategory banner={banner_men} category={'men'} />}/>
        <Route path="/womens" element={<ShopCategory banner={banner_women} category={'women'} />}/>
        <Route path="/kids" element={<ShopCategory banner={banner_kid} category={'kid'}/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=":productId" element={<Product/>} />
        </Route>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/logn" element={<Login/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
