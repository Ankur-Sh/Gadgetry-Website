import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Cart from "./Cart";
import "./cart.css";
import { removeFromCart } from "../../reducers/gadgets";

const CartIcon = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const dispatch = useDispatch();

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const [showNotification, setShowNotification] = useState(false);
    const handleRemoveFromCart = (itemId) => {
        dispatch(removeFromCart(itemId));
        setShowNotification(true);

        setTimeout(() => {
            setShowNotification(false);
        }, 2000);
    };

    return (
        <div>
            <div className="cart_icon_container">
                <ShoppingCartIcon onClick={toggleCart} className="cart_icon" />
                {cartItems.length > 0 && (
                    <span className="item_length">{cartItems.length}</span>
                )}
            </div>
            {isCartOpen && cartItems.length > 0 && (
                <Cart
                    cartItems={cartItems}
                    onRemoveFromCart={handleRemoveFromCart}
                />
            )}
            {showNotification && (
                <div className="remove_notification">
                    Product Removed Successfully!
                </div>
            )}
        </div>
    );
};

export default CartIcon;
