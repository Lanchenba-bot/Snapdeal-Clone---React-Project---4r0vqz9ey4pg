import React from "react";
import classes from "./ItemDetails.module.css";
import RenderItems from "./RenderItems";

function ItemDetails(props) {
  const { items } = props.cart;

  return (
    <div className={classes.wrapper}>
      <h1>Your Shopping Cart</h1>
      <div className={classes["items-container"]}>
        {items.map((item) => {
          console.log(item.id);
          return <RenderItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default ItemDetails;
