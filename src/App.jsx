
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Shop from './Pages/Shop'
import Aos from 'aos'
import React, { useContext } from 'react'
import "aos/dist/aos.css"
import Footer from './components/Footer/Footer'
import ShopCategory from './Pages/ShopCategory'
import men_banner from "./assets/banner_mens.png"
import kid_banner from "./assets/banner_kids.png"
import women_banner from "./assets/banner_women.png"
import Product from './Pages/Product'


function App() {
  
  React.useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100
    });
    Aos.refresh()
  }, [])
  
  return (
    <div>
      
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop />}></Route>
          <Route path='/men' element={<ShopCategory banner={men_banner} category="men" />}></Route>
          <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>}></Route>
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}></Route>
          <Route path='/product' element={<Product/>}>
             <Route path=':productId' element={<Product/>}/>
           </Route>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App
