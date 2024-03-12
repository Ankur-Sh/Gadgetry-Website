import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { toggleLike } from "../../reducers/gadgets";
import { useDispatch, useSelector } from "react-redux";
import "./page.css";
import Nav from "../Navbar/Nav";

const GadgetList = () => {
    const [gadgets, setGadgets] = useState([]);
    const likeGadgets = useSelector((state) => state.like.likeGadgets);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:5001/gadgets"
                );
                setGadgets(response.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);
    const navigateToDetailPage = (gadget) => {
        console.log(gadget);
        navigate(`/page/${gadget._id}`, { state: { gadgetDetails: gadget } });
    };
    const handleLikeToggle = (gadget) => {
        dispatch(toggleLike(gadget));
    };

    return (
        <div className="page">
            <Nav />
            <div className="main_box_created">
                {gadgets.map((gadget) => (
                    <div
                        className="list"
                        key={gadget._id}
                        onClick={() => navigateToDetailPage(gadget)}
                    >
                        <img className="gadget" src={gadget.imageUrl} alt="" />
                        <hr />
                        <div className="gadget_title">
                            <h3>{gadget.title}</h3>
                        </div>
                        <div className="gadget_message">
                            <p>
                                {`${gadget.message.slice(0, 30)}`}
                                <br /> Read more...
                            </p>
                        </div>
                        <hr />
                        <div className="price">
                            <div className="bookmark_shape">
                                <p>{gadget.price}</p>
                            </div>
                            <div
                                className="like_btn_card"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleLikeToggle(gadget);
                                }}
                            >
                                {likeGadgets.some(
                                    (liked) => liked._id === gadget._id
                                ) ? (
                                    <FavoriteIcon className="liked_icon_card" />
                                ) : (
                                    <FavoriteBorderIcon className="like_icon_card" />
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GadgetList;
