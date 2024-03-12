import React from "react";
import "./cart.css";
// import { loadStripe } from "@stripe/stripe-js";

const Cart = ({ cartItems, onRemoveFromCart }) => {
    // /*Payment Stripe*/
    // const apiURL = "http://localhost:3000";
    // const makePayment = async () => {
    //     const stripe = await loadStripe(
    //         "pk_test_51Oqw7xSJ9xxwbGFGl3HWEclyl46PViE2nXyskN22ReCADSOUdLdZRtdLTts8cSzml2tOKz76XBTlM9BLvnRKkbqj00ui0soFnx"
    //     );
    //     const body = {
    //         products: cartItems,
    //     };
    //     const headers = {
    //         "Content-Type": "application/json",
    //     };
    //     const response = await fetch(`${apiURL}/create-checkout-session`, {
    //         method: "POST",
    //         headers: headers,
    //         body: JSON.stringify(body),
    //     });
    //     const session = await response.json();
    //     const result = stripe.redirectToCheckout({
    //         sessionId: session.id,
    //     });
    //     if (result.error) {
    //         console.log(result.error);
    //     }
    // }
    //     /*Till here*/

    return (
        <div className="cart_container">
            <h2>Shopping Cart</h2>
            <ul className="cart_items">
                {cartItems.map((item) => (
                    <div className="item_container" key={item.id}>
                        {
                            <img
                                className="cart_item_img"
                                src={item.img}
                                alt="cart_item_img"
                            />
                        }
                        <div className="item_desc">
                            <div className="cart_item_name">{item.name}</div>
                            <div className="cart_item_price">{item.price}</div>
                        </div>
                        <div>
                            <button
                                className="remove_btn"
                                onClick={() => onRemoveFromCart(item.id)}
                            >
                                Remove
                            </button>
                            {/*  <button onClick={makePayment}>buy</button>*/}
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
