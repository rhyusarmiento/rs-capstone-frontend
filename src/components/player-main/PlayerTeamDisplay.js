import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {API_URL} from '../../API_URL'

import TeamItem from './TeamItem'

function PlayerTeamDisplay() {
    const [playerTeams, setPlayerTeams] = useState([])

    useEffect(() => {
        axios({
            method: 'get',
            url: `${API_URL}/get-teams-player/${localStorage.getItem('playerId')}`,
            withCredentials: true
        })
            .then(res => {
                // TODO: fix looping data maybe?
                setPlayerTeams(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const teamItems = () => {
        if (playerTeams.length === 0) {
            return (
                <div className='no-teams'>You have Joined no Teams</div>
            )
        } else {
            return playerTeams.map(team => {
                return (
                    <TeamItem key={team.id} team={team} />
                )
            })
        }
    }

    return (
        <div className='display-wrapper'>
            {teamItems()}
        </div>
    )
}

export default PlayerTeamDisplay