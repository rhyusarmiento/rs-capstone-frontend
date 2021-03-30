import React from 'react'
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <div className='navigation'>
            <NavLink to='/player-main' className='navlink'>Home</NavLink>
            <NavLink to='/profile' className='navlink'>Profile</NavLink>
        </div>
    )
}

export default Navigation