import React from 'react'
import './Product.css'
import { useStateValue } from "./StateProvider";

function Product({id, title, image, price,}) {

 const [,dispatch] = useStateValue();

 const addToBasket = () => {
   // dispatch the item into the data layer
   dispatch({
     type: "ADD_TO_BASKET",
     item: {
       id: id,
       title: title,
       image: image,
       price: price,
     },
   });
 };

  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
      </div>

      <img src={image} alt="ProductImg" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product