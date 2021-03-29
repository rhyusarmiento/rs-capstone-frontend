import React from "react";

import AuthForm from "../auth/AuthForm"

const Landing = () => {
    return (
        <div className='landing-wrapper'>
            <div className='landing-bio'>
                <div className="bio">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae alias commodi 
                    nulla quaerat nam exercitationem suscipit facilis mollitia deserunt ipsa est ut iure cupiditate, 
                    a aliquam debitis nostrum. Laboriosam corporis aspernatur cum maiores magnam aut? Provident 
                    praesentium itaque, a exercitationem blanditiis accusamus? Fuga sit autem aut nobis debitis, quidem ut.
                </div>
            </div>
            <AuthForm />
        </div>
    )
}

export default Landing;