//import React from 'react'
import  Header  from "./components/Header"
import './App.css'
import Home from "./components/Home"
import Cart from "./components/Cart"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import { useEffect, useState } from "react"
import productList from "./components/Data"

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
        <Header />
        <Routes>
          <Route path="/" element={<Home setProductId={setProductId} />} />
          <Route path="/cart" element={<Cart cartAllProduct={cartAllProduct} setCartAllProduct={setCartAllProduct}/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App