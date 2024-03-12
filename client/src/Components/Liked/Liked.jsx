import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Nav from "../Navbar/Nav";
import "./liked.css";

const Liked = () => {
    const navigate = useNavigate();
    const likeGadgets = useSelector((state) => state.like.likeGadgets);
    console.log("Liked Gadgets:", likeGadgets);
    const navigateToDetailPage = (gadget) => {
        console.log(gadget);
        navigate(`/page/${gadget._id}`, { state: { gadgetDetails: gadget } });
    };
    return (
        <div>
            <Nav />
            <h2>Liked Gadgets</h2>
            {likeGadgets.length === 0 ? (
                <p>No liked gadgets yet.</p>
            ) : (
                <ul className="like_main_box_created">
                    {likeGadgets.map((gadget) => (
                        <li
                            className="like_list"
                            key={gadget._id}
                            onClick={() => navigateToDetailPage(gadget)}
                        >
                            <img
                                className="like_gadget"
                                src={gadget.imageUrl}
                                alt=""
                            />
                            <hr />
                            <div className="like_gadget_title">
                                <h3>{gadget.title}</h3>
                            </div>
                            <div className="like_gadget_message">
                                <p>
                                    {`${gadget.message.slice(0, 30)}`}
                                    <br /> Read more...
                                </p>
                            </div>
                            <hr />
                            <div className="like_price">
                                <div className="like_bookmark_shape">
                                    <p>{gadget.price}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Liked;
