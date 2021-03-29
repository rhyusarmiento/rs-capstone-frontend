import React, { } from 'react'
import {NavLink} from 'react-router-dom'

function TeamItem(props) {
    const handleTeamRoute = () => {
        sessionStorage.setItem('tempTeamId', props.team.id)
    }

    return (
        <div>
            {props.team.name}
            <NavLink onClick={handleTeamRoute} to={`/team-profile/${props.team.id}`}>...Go to</NavLink>
        </div>
    )
}

export default TeamItem