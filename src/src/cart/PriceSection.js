import React from "react";
import { useSelector } from "react-redux";
import classes from "./PriceSection.module.css";
import { Button, Divider } from "@mui/material";
import  formatAmount from "../context/constant";
import { Link } from "react-router-dom";

function PriceSection() {
  const cart = useSelector((state) => state);

  const totalDiscountInRupee = cart.items.reduce((acc, curr) => {
    const discount = (curr.totalPrice * 80 * curr.discountPercentage) / 100;
    acc += discount;
    return acc;
  }, 0);

  return (
    <>
      <div className={classes.price_wrapper}>
        <div
          style={{
            textTransform: "uppercase",
            fontWeight: 600,
            fontSize: "1.4rem",
            color: "#999",
            marginBottom: "1rem",
          }}
        >
          Price Details
        </div>
        <Divider />
        <div className={classes.flex}>
          <div>Price ({cart.totalQuantity} items)</div>
          <div>
            {formatAmount(cart.totalCartPrice * 80 + totalDiscountInRupee)}
          </div>
        </div>

        <div className={classes.flex}>
          <div>Discount</div>
          <div style={{ color: "green" }}>
            -{formatAmount(totalDiscountInRupee)}
          </div>
        </div>

        <div className={classes.flex}>
          <div>Delivery Charges</div>
          <div style={{ color: "green" }}>Free</div>
        </div>

        <Divider />

        <div
          className={classes.flex}
          style={{ color: "#000", fontSize: "1.4rem" }}
        >
          <div>Total Amount</div>
          <div>{formatAmount(cart.totalCartPrice * 80)}</div>
        </div>
        <Link to="/checkout">
          <div className={classes.action_button}>
            <Button
              style={{
                backgroundColor: "#fb641b",
                padding: "0.5rem 1rem",
                width: "100%",
                fontSize: "1.2rem",
              }}
              variant="contained"
            >
              Checkout
            </Button>
          </div>
        </Link>
      </div>
    </>
  );
}

export default PriceSection;

/*

  id: newItem.id,
          price: newItem.price,
          totalPrice: newItem.price,
          quantity: 1,
          title: newItem.title,
          discountPercentage: newItem.discountPercentage,
          thumbnail: newItem.thumbnail,*/
