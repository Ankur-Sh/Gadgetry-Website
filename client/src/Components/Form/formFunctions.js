// formFunctions.js
import { useState, useEffect } from "react";
import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { createGadget } from "../../actions/gadgets";
import { auth } from "../../firebase";
import { selectUser } from "../../authSlice";
import useStyles from "./styles";

const useFormFunctions = () => {
    const [authUser, setAuthUser] = useState(null);
    const dispatch = useDispatch();
    const storedUser = useSelector(selectUser);
    const classes = useStyles();
    const gadget = useSelector((state) => state);
    const [gadgetData, setGadgetData] = useState({
        title: "",
        message: "",
        selectedFile: "",
        creator: "",
    });
    const [image, setImage] = useState(null);

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

    useEffect(() => {
        if (gadget) setGadgetData(gadget);
    }, [gadget]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const handleImageUpload = async () => {
        const formData = new FormData();
        formData.append("image", image);

        try {
            const response = await axios.post(
                "http://localhost:5001/upload",
                formData
            );
            console.log("Image URL:", response.data.imageUrl);
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        handleImageUpload();
        console.log(gadgetData);
        dispatch(createGadget({ ...gadgetData }));
    };

    return {
        authUser,
        storedUser,
        classes,
        gadgetData,
        handleImageUpload,
        setGadgetData,
        handleImageChange,
        handleSubmit,
    };
};

export default useFormFunctions;
