import React from 'react'
import LocalTeams from '../player-main/LocalTeams'

import PlayerTeamDisplay from '../player-main/PlayerTeamDisplay'

function PlayerMain() {
    return (
        <div className='player-main-wrapper'>
            <div className="player-main-content-wrapper">
                <div className="player-team-display-wrapper">
                    <h3>Your Teams</h3>
                    <PlayerTeamDisplay />
                </div>
                <div className='near-teams'>
                    <h3>All Teams</h3>
                    <LocalTeams />
                </div>
            </div>
        </div>
    )
}

export default PlayerMain