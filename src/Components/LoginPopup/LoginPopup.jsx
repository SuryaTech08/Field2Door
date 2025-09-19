import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { app } from '../../Backend/firebase'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const LoginPopup = ({setShowLogin}) => {
    const[currState,setCurrState] = useState("Login")
    const auth = getAuth(app);
    const handleLogin = (e) => {
        e.preventDefault();
            const email = e.target.elements.email.value;
            const password = e.target.elements.password.value;

        if (currState === "Login") {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log("Login successful:", user);
                })
                .catch((error) => {
                    console.error("Error during login:", error);
                });
        } else {
                const name = e.target.elements.name.value;
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log("Sign Up successful:", user);
                })
                .catch((error) => {
                    console.error("Error during sign up:", error);
                });
        }
    } // <-- Close handleLogin function here

    return (
        <div className="login-popup">
            <form className="login-popup-container" onSubmit={handleLogin}>
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                    <div className="login-popup-inputs">
                        {currState==="Login" ? <></> : <input type="text" name="name" placeholder='Your name' required />}
                        <input type="email" name="email" placeholder='Your email' required />
                        <input type="password" name="password" placeholder='Password' required />
                    </div>
                <button type="submit"> {currState==="Sign Up"?"Create account":" Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuting,i agree to the termes of use & privacy policy.</p>
                </div>
                {currState==="Login"
                ?<p>Create a new account? <span onClick={() =>setCurrState("Sign Up")}>Click here</span> </p>
                :<p>Already have an account ? <span onClick={() =>setCurrState("Login")} >Login here</span> </p>
                }
            </form>
        </div>
    )
}

export default LoginPopup