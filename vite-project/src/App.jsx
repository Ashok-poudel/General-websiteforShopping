//import React from 'react'
import  Header  from "./components/Header"
import './App.css'
import Home from "./components/Home"
import Cart from "./components/Cart"
import {BrowserRouter,Route,Routes} from "react-router-dom"

const App = () => {
  return (
    <>
   
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path= "/" element={<Home/>}>  </Route>
      <Route path= "/cart" element={<Cart/>}>  </Route>
     

    </Routes>
     </BrowserRouter>
   
    </>
  )
}

export default App