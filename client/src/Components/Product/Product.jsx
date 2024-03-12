// components/Product.js
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../reducers/gadgets";
import "./product.css";

const Product = ({ id, name, price, img }) => {
    const dispatch = useDispatch();
    const [showNotification, setShowNotification] = useState(false);

    const handleAddToCart = () => {
        dispatch(addToCart({ id, name, price, img }));
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 2000);
    };

    return (
        <div>
            <button className="add_to_cart" onClick={handleAddToCart}>
                <b>ADD TO CART</b>
            </button>
            {showNotification && (
                <div className="added_notification">
                    Product Added Successfully!
                </div>
            )}
        </div>
    );
};

export default Product;
