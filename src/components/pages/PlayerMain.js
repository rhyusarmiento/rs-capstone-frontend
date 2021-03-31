import React from 'react'
import { NavLink } from 'react-router-dom'

import PlayerTeamDisplay from '../player-main/PlayerTeamDisplay'

function PlayerMain() {
    return (
        <div className='player-main-wrapper'>
            <div className="player-main-content-wrapper">
                <div className="player-team-display-wrapper">
                    <h3>Your Teams</h3>
                    <PlayerTeamDisplay />
                </div>
            </div>
        </div>
    )
}

export default PlayerMain