import React, { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthDetails } from "../Other/AuthDetails";
import { Link } from "react-router-dom";
function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <AuthDetails />
            <div className="sign-in-container">
                <form onSubmit={signIn}>
                    <h1>Log In to your Account</h1>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Log In</button>
                </form>
                <Link to={"/signUp"}>
                    <button className="create_new_account">
                        Create New Account
                    </button>
                </Link>
            </div>
        </>
    );
}

export default SignIn;
