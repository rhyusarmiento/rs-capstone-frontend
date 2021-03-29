import React, { useEffect, useState } from 'react'
import axios from 'axios'

import TeamItem from './TeamItem'

function PlayerTeamDisplay() {
    const [playerTeams, setPlayerTeams] = useState(null)

    useEffect(() => {
        axios({
            method: 'get',
            url: `http://localhost:5000/api/get-teams-player/${localStorage.getItem('playerId')}`,
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
        if (playerTeams === null) {
            return (
                <div>You have Joined no Teams</div>
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
        <div>
            {teamItems()}
        </div>
    )
}

export default PlayerTeamDisplay