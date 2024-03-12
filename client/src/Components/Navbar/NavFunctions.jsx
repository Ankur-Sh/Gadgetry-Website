// NavFunctions.js
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useNavigation = () => {
    const history = useNavigate();
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });
        return () => {
            listen();
        };
    }, []);

    const toggleDropdown = () => {
        var dropdown = document.getElementById("profile-dropdown");
        dropdown.style.display =
            dropdown.style.display === "block" ? "none" : "block";
    };

    const userSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log("sign out successful");
                history("/signin");
            })
            .catch((error) => console.log(error));
    };

    return { authUser, userSignOut, toggleDropdown };
};

export default useNavigation;
