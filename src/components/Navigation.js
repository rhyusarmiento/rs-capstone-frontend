import React from 'react'
import { NavLink } from "react-router-dom";


function Navigation() {
    return (
        <div>
            <NavLink to='/player-main'>Home</NavLink>
            <NavLink to='/profile'>profile</NavLink>
        </div>
    )
}

export default Navigation