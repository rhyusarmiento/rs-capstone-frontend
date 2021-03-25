import React, { useContext } from "react";

import AuthContext from "../contexts/AuthContext";

import AuthForm from "./auth/AuthForm"
import LogoutButton from "./auth/LogoutButton";

const Home = () => {
    const { loggedInStatus } = useContext(AuthContext)
    
    return (
        <div>
            <h1>Home</h1>
            {loggedInStatus === "LOGGED_IN" ? (
                <LogoutButton />
            ) : (
                <AuthForm />
            )}
        </div>
    )
}

export default Home;