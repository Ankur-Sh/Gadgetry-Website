import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
//new
import { useDispatch } from "react-redux";
import { setUser, clearUser } from "../../authSlice";
const AuthDetails = () => {
    //new after redux
    const dispatch = useDispatch();
    // const authUser = useSelector(selectUser);
    //old before redux
    const history = useNavigate();
    // const [authUser, setAuthUser] = useState(null);
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(setUser(user));
                //   setAuthUser(user);
                history("/page");
                // localStorage.setItem("auser", JSON.stringify(user));
            } else {
                dispatch(clearUser());
                //    setAuthUser(null);
                // localStorage.removeItem("auser");
            }
        });
        return () => {
            listen();
        };
    }, [dispatch]);
    // const userSignOut = () => {
    //     signOut(auth)
    //         .then(() => {
    //             console.log("sign out successfull");
    //             // localStorage.removeItem("auser");
    //             dispatch(clearUser());
    //         })
    //         .catch((error) => console.log(error));
    // };
};
export { AuthDetails };
