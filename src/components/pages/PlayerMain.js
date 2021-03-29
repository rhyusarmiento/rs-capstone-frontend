import React from 'react'
import { NavLink } from 'react-router-dom'

import PlayerTeamDisplay from '../player-main/PlayerTeamDisplay'



function PlayerMain() {
    return (
        <div>
            Home Page
            <PlayerTeamDisplay />
            <NavLink to='/team-search'>See More ...</NavLink>
        </div>
    )
}

export default PlayerMain