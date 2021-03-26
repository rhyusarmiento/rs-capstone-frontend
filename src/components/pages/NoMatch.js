import React from 'react'
import { NavLink } from 'react-router-dom'

function NoMatch() {
    return (
        <div>
            This page doesn't exist, or you dont have access
            <NavLink exact to="/">Login Page</NavLink>
        </div>
    )
}

export default NoMatch