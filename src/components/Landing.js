import React, { useContext } from "react";

import AuthContext from "../contexts/AuthContext";

import AuthForm from "./auth/AuthForm"
import LogoutButton from "./auth/LogoutButton";
import Register from "./register/Register";

const Home = () => {
    const { loggedInStatus } = useContext(AuthContext)
    
    const checkStatus = () => {
        if (loggedInStatus === "LOGGED_IN") {
            return <LogoutButton />
        } else if (loggedInStatus === "REGISTER") {
            return <Register />
        } else {
            return <AuthForm />
        }
    }

    return (
        <div>
            {checkStatus()}
        </div>
    )
}

export default Home;