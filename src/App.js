import "./App.css";
import React, { useContext, useEffect } from "react";
import NavBar from "./component/NavBar";
import Searchbar from "./component/Searchbar";
import Main from "./component/Main";
import ContextData from "./context/product-data";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./checkOut/Checkout";
import Cart from "./cart/Cart";
import Login from "./component/Login";
import Footer from "./component/Footer";
import { FooterLinkCard } from "./component/FooterLinkCard";
import { FooterLinks } from "./component/FooterLinks";

function App() {
  const { setAllProducts, setCategories, setActive } =
    useContext(ContextData);
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://product-data-api-dfa74-default-rtdb.firebaseio.com/productdata.json"
      );
      const data = await response.json();

      setAllProducts(data["-NOEg2M66-9biUcVftr5"]);
      setCategories(data["-NOir0HKsESo6Ix-AHjt"]);
      setActive(data["-NOir0HKsESo6Ix-AHjt"][0])
    }
    getData();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Searchbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      <FooterLinks/>
      <Footer/>
    </div>
  );
}

export default App;
