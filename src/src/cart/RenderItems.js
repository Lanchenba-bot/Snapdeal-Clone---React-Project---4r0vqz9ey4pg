import React from "react";
import classes from "./RenderItems.module.css";
import { Divider } from "@mui/material";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import formatAmount from "../context/constant";

function RenderItems(props) {
  const {
    id,
    price,
    totalPrice,
    quantity,
    title,
    discountPercentage,
    thumbnail,
  } = props.item;

  const dispatch = useDispatch();

  function addItem() {
    dispatch(
      cartActions.addItemToCart({
        id,
        price,
        totalPrice,
        quantity,
        title,
        discountPercentage,
        thumbnail,
      })
    );
  }

  function removeItem() {
    dispatch(cartActions.removeItemFromCart(id));
  }

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.item_wrapper}>
          <img src={thumbnail} alt={title} />
          <div className={classes.wrapper_title_quantity_price}>
            <div className={classes.title_quantity_wrapper}>
              <p>{title}</p>
              <div className={classes.quantity_wrapper}>
                <span>
                  X <span>{quantity}</span>
                </span>
                <div className={classes.action_button}>
                  <span className={classes.btn} onClick={removeItem}>
                    -
                  </span>
                  <span
                    style={{ backgroundColor: "#2874f0" }}
                    className={classes.btn}
                    onClick={addItem}
                  >
                    +
                  </span>
                </div>
              </div>
            </div>

            <div className={classes.total_price}>
              <span className={classes.main_price}>
                {formatAmount(totalPrice * 80)}
              </span>
              <span>({formatAmount(price * 80)} / item)</span>
            </div>
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
}

export default RenderItems;
/*
{
          id: newItem.id,
          price: newItem.price,
          totalPrice: newItem.price,
          quantity: 1,
          title: newItem.title,
          discountPercentage: newItem.discountPercentage,
          thumbnail: newItem.thumbnail,
        }
*/
