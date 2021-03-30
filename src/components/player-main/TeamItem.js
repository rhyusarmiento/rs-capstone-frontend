import React, { } from 'react'
import {NavLink} from 'react-router-dom'

function TeamItem(props) {
    const handleTeamRoute = () => {
        sessionStorage.setItem('tempTeamId', props.team.id)
    }

    return (
        <div className='display-item'>
            <div className="item-content-wrapper">
                <h2>{props.team.name}</h2>
            </div>
            <NavLink onClick={handleTeamRoute} to={`/team-profile/${props.team.id}`}>...Go to</NavLink>
        </div>
    )
}

export default TeamItem