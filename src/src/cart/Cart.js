import React from "react";
import { useSelector } from "react-redux";
import "./Cart.css";
import ItemDetails from "./ItemDetail";
import PriceSection from "./PriceSection";

function Cart() {
  const cartData = useSelector((state) => state);
  
  return (
      <div className='checkout_page'>
        <ItemDetails cart={cartData} />
        <PriceSection />
      </div>
  );
}

export default Cart;
