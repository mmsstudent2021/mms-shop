import React, { useState } from "react";
import {
  AiFillDelete,
  AiFillMinusSquare,
  AiFillPlusSquare,
} from "react-icons/ai";
import { useStateContext } from "../context/StateContext";

const CartItem = ({ item, incresePrice, decresePrice }) => {
  const { dispatch } = useStateContext();
  const [qty, setQty] = useState(1);
  const increseQty = () => {
    setQty((prev) => prev + 1);
    incresePrice(item.price)
  };
  const decreseQty = () => {
    if (qty > 1) {
      setQty((prev) => prev - 1);
      decresePrice(item.price)
    }
  };
  const removeItemHandler = () => {
    decresePrice(item?.price * qty);
    dispatch({ type: "REMOVE_FROM_CART", payload: item })          
  }
  return (
    <div className="flex items-start gap-4">
      <img src={item?.image} className="h-32 border-2 rounded p-4" alt="" />
      <div className="">
        <h3 className="text-2xl font-semibold">{item?.title}</h3>
        <p className="text-secondary text-3xl my-3">${item?.price * qty}</p>
        <div className="flex items-center gap-3">
          <AiFillMinusSquare
            onClick={decreseQty}
            className="text-3xl text-danger cursor-pointer"
          />
          <p className="tex-2xl">{qty}</p>
          <AiFillPlusSquare
            onClick={increseQty}
            className="text-3xl text-info cursor-pointer"
          />

          <AiFillDelete
            onClick={removeItemHandler}
            className="text-danger text-2xl cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
