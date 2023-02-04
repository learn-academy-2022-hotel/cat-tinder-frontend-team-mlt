import React, { useState, useEffect } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import CatEdit from "./pages/CatEdit"
import CatIndex from "./pages/CatIndex"
import CatNew from "./pages/CatNew"
import CatShow from "./pages/CatShow"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import "./App.css"
// import mockCats from "./mockCats"
import { Routes, Route } from "react-router-dom"


const App = () => {
  const [cats, setCats] = useState([])

  useEffect(() => {
    readCat()
  },[])
  const readCat = () => {
    fetch("http://localhost:3000/cats")
      .then((response) => response.json())
      .then((payload) => {
        setCats(payload)
      })
      .catch((error) => console.log(error))
  }
  const createCat = (cat) => {
    fetch("http://localhost:3000/cats" , {
      body: JSON.stringify(cat), 
      headers: {
        "Content-Type": "application/json"
      },
      method:"POST"
    })
    .then((response) => response.json())
    .then((payload) => readCat())
    .catch((errors) => console.log("Cat create errors:", errors))
  }
  
  const updateCat = (cat, id) => {
    console.log("cat:", cat)
    console.log("id:", id)
  }


  return (
    <>
      <Header />
      {/* <h1>Cat Tinder</h1> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catindex" element={<CatIndex cats = {cats}/>} />
        <Route path="/catshow/:id" element={<CatShow cats={cats} />} />
        <Route path="/catnew" element={<CatNew createCat={createCat} />} />
        <Route path="/catedit/:id" element={<CatEdit cats={cats} updateCat={updateCat}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
