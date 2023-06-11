import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout-left">
        <div>
          <h3>Hello, {!user ? "Guest" : user.email}</h3>
          {basket?.length === 0 ? (
            <div>
              <h2 className="checkout-title">
                Your shopping Basket is Empty !!
              </h2>
              <p>
                You have no items in your basket.To buy one or more items, click
                "Add to basket" below the product.
              </p>
            </div>
          ) : (
            <div>
              <h2 className="checkout-title">Your shopping Basket</h2>
            </div>
          )}

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
