import React from "react";
import "./ItemDetails.css";
import RenderItems from "./RenderItems";

function ItemDetails(props) {
  const { items } = props.cart;

  return (
    <div className='wrapper'>
      <h1>Your Shopping Cart</h1>
      <div >
        {items.map((item) => {
          console.log(item.id);
          return <RenderItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default ItemDetails;
