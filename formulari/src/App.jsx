import Controlat from "./components/Controlat"
import React from "react"
import './App.css'
import Likeapro from "./components/Likeapro"
import Home from "./components/Home"
import {Routes, Route} from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Productes from "./components/Productes"


function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path="/controlat" element={<Controlat />}/>
      <Route path="/likeapro" element={<Likeapro />}/>
      <Route path="/productes" element={<Productes />}/>
      <Route path="/" element={<Home />}/>
      <Route path="*" element={<Error404 />}/>
      <Route path="/404" element={<Error404 />}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App

const Error404 = () => {
  return (
    <div>Error 404</div>
  )
}