import React from 'react'
import { NavLink } from 'react-router-dom'

import PlayerTeamDisplay from '../player-main/PlayerTeamDisplay'



function PlayerMain() {
    return (
        <div className='player-main-wrapper'>
            Home Page
            <PlayerTeamDisplay />
            <NavLink to='/team-search'>Find More Teams...</NavLink>
        </div>
    )
}

export default PlayerMain