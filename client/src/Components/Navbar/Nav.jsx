import React from "react";
import { Link, NavLink } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "../Navbar/nav.css";
import Img from "../../images/logo.png";
import { Avatar } from "@material-ui/core";
import useNavigation from "./NavFunctions";
import CartIcon from "../Cart/CartIcon";

function Nav() {
    const { authUser, userSignOut, toggleDropdown } = useNavigation();
    return (
        <div className="all">
            <img className="nav_logo" src={Img} alt="" />
            <br />
            <div className="linksection">
                <NavLink className="navlink" to="/">
                    Home
                </NavLink>
                <NavLink className="navlink" to="/gadget">
                    Gadget
                </NavLink>
                <NavLink className="navlink" to="/create">
                    Create
                </NavLink>
                <NavLink className="navlink" to="/page">
                    Page
                </NavLink>
                <NavLink className="navlink" to="/productlist">
                    Product List
                </NavLink>
                <button className="sign_out_btn" onClick={userSignOut}>
                    {authUser ? "SignOut" : "Login"}
                </button>
                <div className="icon_container">
                    <Avatar className="avatar" onClick={toggleDropdown}>
                        <p className="avatar_text">
                            {authUser
                                ? authUser.email.slice(0, 2).toUpperCase()
                                : ""}
                        </p>
                    </Avatar>
                    <div class="dropdown" id="profile-dropdown">
                        <a href="#">Edit Profile</a>
                        <a href="#">Settings</a>
                        <a href="#" onClick={userSignOut}>
                            Sign Out
                        </a>
                    </div>
                    <Link to="/liked">
                        <FavoriteBorderIcon className="like_icon" />
                    </Link>
                    <CartIcon />
                    {/*
                    <ShoppingBagIcon className="cart_icon" />
                    */}
                </div>
            </div>
            <br />
            <hr />
            <br />
        </div>
    );
}
export default Nav;
