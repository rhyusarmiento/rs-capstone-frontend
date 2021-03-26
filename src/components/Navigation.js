import React from 'react'
import { NavLink } from "react-router-dom";


function Navigation() {
    return (
        <div>
            <NavLink exact to='/player-main'>
                Home
            </NavLink>
        </div>
    )
}

export default Navigation