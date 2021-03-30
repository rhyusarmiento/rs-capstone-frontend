import React from "react";

import AuthForm from "../auth/AuthForm"

const Landing = () => {
    return (
        <div className='landing-wrapper'>
            <div className='landing-bio'>
                <div className="bio">
                    Welcome This is a Bio and its awesome. Yes
                </div>
            </div>
            <AuthForm />
        </div>
    )
}

export default Landing;