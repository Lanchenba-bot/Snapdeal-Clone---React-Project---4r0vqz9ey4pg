import React from "react";
import { useSelector } from "react-redux";
import classes from "./Cart.module.css";
import ItemDetails from "./ItemDetail";
import PriceSection from "./PriceSection";

function Cart() {
  const cartData = useSelector((state) => state);
  
  return (
    <div className={classes.checkout_page}>
      <ItemDetails cart={cartData} />
      <PriceSection />
    </div>
  );
}

export default Cart;
