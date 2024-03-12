import React from "react";
import Img from "../../images/logo.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";
import {
    faYoutube,
    faTwitter,
    faInstagram,
    faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
library.add(faYoutube, faTwitter, faInstagram, faFacebookF);
function Footer() {
    return (
        <div className="footer">
            <div className="footer_l">
                <center>
                    <div className="heading">Stay Connected</div>
                </center>
                <div className="socials">
                    <FontAwesomeIcon
                        className="socialhandles"
                        icon={["fab", "youtube"]}
                    />
                    <FontAwesomeIcon
                        className="socialhandles"
                        icon={["fab", "twitter"]}
                    />
                    <FontAwesomeIcon
                        className="socialhandles"
                        icon={["fab", "instagram"]}
                    />
                    <FontAwesomeIcon
                        className="socialhandles"
                        icon={["fab", "facebook-f"]}
                    />
                </div>
            </div>
            <div className="footer_m">
                <img className="footer_Img" src={Img} alt="" />
            </div>
            <div className="footer_r"></div>
        </div>
    );
}

export default Footer;
