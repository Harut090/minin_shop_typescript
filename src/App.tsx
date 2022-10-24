import React from 'react';
import './App.css';
import {Routes,Route} from "react-router-dom";
import {ProductsPage} from "./pages/ProductsPage";
import {AboutPage} from "./pages/AboutPage";

function App() {
  return (
    <>
    <Routes>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/"  element={<ProductsPage/>}/>
    </Routes>
    </>
  );
}

export default App;
