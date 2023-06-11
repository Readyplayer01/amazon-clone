import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider";

function CheckoutProduct({id, image, title, price}) {

   const [,dispatch] = useStateValue();

   const removeFromBasket = () => {
     // removes items from basket
     dispatch({
       type: "REMOVE_FROM_BASKET",
       id: id,
     });
   };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct-image" src={image} alt="productImg" />
      <div className="checkoutProduct-info">
        <p className="checkoutProduct-title">{title}</p>
        <p className="checkoutProduct-price">
          <small>₹ </small>
          <strong>{price}</strong>
        </p>
        <button onClick={removeFromBasket}>Remove from kart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct