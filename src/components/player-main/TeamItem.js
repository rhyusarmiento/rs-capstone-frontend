import React, { } from 'react'
import {NavLink} from 'react-router-dom'

function TeamItem(props) {
    const handleTeamRoute = () => {
        sessionStorage.setItem('tempTeamId', props.team.id)
    }

    return (
        <NavLink className='display-item' onClick={handleTeamRoute} to={`/team-profile/${props.team.id}`}>
            <div className="item-content-wrapper">
                <h2>{props.team.name}</h2>
            </div>
        </NavLink>
    )
}

export default TeamItem