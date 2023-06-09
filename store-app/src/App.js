import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Form from "./components/Form/Form.jsx";
import Home from "./pages/Home/Home.jsx";
import Products from "./pages/Products/Products.jsx";

// import Button from "./components/Button/Button.jsx";

function App() {

  return (
    <div className="App">
      <Header />
      <main> 
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/form" element={<Form />}/>
        </Routes> 
      </main>
      <Footer />
    </div>
  );
}

export default App;
