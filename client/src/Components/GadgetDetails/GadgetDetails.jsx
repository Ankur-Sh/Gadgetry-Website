import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./gadget_id.css";
import Nav from "../Navbar/Nav";
import { useSelector } from "react-redux";
import Product from "../Product/Product";
import StripeCheckout from "react-stripe-checkout";

const GadgetDetails = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const location = useLocation();
    const { gadgetDetails } = location.state || {};

    const [product, setProduct] = useState({
        name: gadgetDetails.title,
        price: gadgetDetails.price,
        productBy: gadgetDetails.message,
    });
    const makePayment = (token) => {
        const body = {
            token,
            product,
        };
        const headers = {
            "Content-Type": "application/json",
        };
        return fetch(`http://localhost:5001/payment`, {
            method: "POST",
            headers,
            body: JSON.stringify(body),
        })
            .then((response) => {
                console.log("RESPONSE ", response);
                const { status } = response;
                console.log("STATUS ", status);
            })
            .catch((error) => console.log(error));
    };
    if (!gadgetDetails) {
        return <p>No gadget details found.</p>;
    }
    return (
        <div>
            <Nav />
            <div className="gadget_details">
                <div className="id_img_box">
                    <img
                        className="id_img"
                        src={gadgetDetails.imageUrl}
                        alt={gadgetDetails.title}
                    />
                    <hr />
                </div>
                <div className="id_details">
                    <div className="left_id_box">
                        <div className="id_title">
                            <p>{gadgetDetails.title}</p>
                        </div>
                        <hr />
                        <div className="id_price">
                            <p>{gadgetDetails.message}</p>
                        </div>
                    </div>
                    <div className="right_id_box">
                        <div className="id_creator">
                            <p>
                                <b>Creator:</b>&nbsp;
                                {gadgetDetails.creator}
                            </p>
                        </div>
                        <div className="id_price">
                            MRP: &nbsp;
                            {gadgetDetails.price}
                        </div>
                        <div className="id_add_to_cart">
                            <Product
                                key={gadgetDetails.id}
                                name={gadgetDetails.title}
                                price={gadgetDetails.price}
                                img={gadgetDetails.imageUrl}
                                inCart={cartItems.some(
                                    (item) => item.name === gadgetDetails.title
                                )}
                            />
                        </div>
                        <br /> <hr /> <br />
                        <div className="id_ratings">
                            <p className="rating_heading">
                                Ratings
                                <span className="star">
                                    &#9733;&nbsp;5.0 (1 rating)
                                </span>
                            </p>
                            <div className="star_container">
                                <p className="no_of_star">5 stars</p>
                                <div class="progress_bar_box_container">
                                    <div class="progress_bar_box progress_bar_width">
                                        100%
                                    </div>
                                </div>
                            </div>
                            <div className="star_container">
                                <p className="no_of_star">4 stars</p>
                                <div class="progress_bar_box_container">
                                    <div class="progress_bar_box">0%</div>
                                </div>
                            </div>
                            <div className="star_container">
                                <p className="no_of_star">3 stars</p>
                                <div class="progress_bar_box_container">
                                    <div class="progress_bar_box ">0%</div>
                                </div>
                            </div>
                            <div className="star_container">
                                <p className="no_of_star">2 stars</p>
                                <div class="progress_bar_box_container">
                                    <div class="progress_bar_box">0%</div>
                                </div>
                            </div>
                            <div className="star_container">
                                <p className="no_of_star">1 star</p>
                                <div class="progress_bar_box_container">
                                    <div class="progress_bar_box">0%</div>
                                </div>
                            </div>
                            <StripeCheckout
                                stripeKey="pk_test_51Oqw7xSJ9xxwbGFGl3HWEclyl46PViE2nXyskN22ReCADSOUdLdZRtdLTts8cSzml2tOKz76XBTlM9BLvnRKkbqj00ui0soFnx"
                                token={makePayment}
                                name="Buy"
                                amount={product.price * 100}
                                shippingAddress
                                billingAddress
                            >
                                <button className="btn-small green transaction_btn">
                                    Buy now in {product.price}
                                </button>
                            </StripeCheckout>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default GadgetDetails;
