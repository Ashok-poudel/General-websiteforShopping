//import React from 'react'
import  Header  from "./components/Header"
import './App.css'
import Home from "./components/Home"
import Cart from "./components/Cart"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import { useEffect, useState } from "react"
import productList from "./components/Data"
import Location from "./components/Location"
import Contact from "./components/Contact"
import About from "./components/About"
import Footer from "./components/Footer"

const App = () => {
   
  const[ productId ,setProductId]=useState("");
  const [cartAllProduct ,setCartAllProduct]= useState([]);
  useEffect (() =>{

 const filteredObject = productList.filter(
  (product) =>product.id == productId
    );
 setCartAllProduct([...cartAllProduct,...filteredObject]);

} , [productId])
  return (
    <>
      <BrowserRouter>
        <Header cartAllProduct={cartAllProduct} />
        <Routes>
          <Route path="/" element={<Home setProductId={setProductId} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={< About />} />
          <Route path="/location" element={<Location />} />
         
         <Route path="/cart" element={<Cart cartAllProduct={cartAllProduct} setCartAllProduct={setCartAllProduct}/>} />
        </Routes>
        
      </BrowserRouter>
     <Footer/>
    </>
  )
}

export default App