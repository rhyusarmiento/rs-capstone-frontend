import React from 'react'
import { NavLink } from 'react-router-dom'

import LogoutButton from './LogoutButton'

function Profile() {
    return (
        <div>
            Profile
            <LogoutButton />
            <NavLink to='/player-main'>Home</NavLink>
        </div>
    )
}

export default Profile