import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {API_URL} from '../../API_URL'
import TeamItem from './TeamItem'

function LocalTeams() {
    const [filteredTeams, setFilteredTeams] = useState([])

    useEffect(() => {
        axios({
            method: 'get',
            url: `${API_URL}/get-teams`,
            withCredentials: true
        })
            .then(teamsRes => {
                // axios({
                //     method: 'get',
                //     url: `${API_URL}/get-teams-player/${localStorage.getItem('playerId')}`,
                //     withCredentials: true
                // })
                //     .then(playerTeamsRes => {
                //         let finalTeams = [...teamsRes.data]
                //         console.log(finalTeams)
                //         for (let i = 0; i < teamsRes.data.length; i++) {
                //             for (let j = 0; j < playerTeamsRes.data.length; j++) {
                //                 if (teamsRes.data[i].id === playerTeamsRes.data[j].id) {
                //                     finalTeams.splice(i)
                //                 }
                //             }
                //         }
                //         console.log(finalTeams)
                //         setFilteredTeams(finalTeams)
                //     })
                //     .catch(err => {
                //         console.log(err)
                //     })
                setFilteredTeams(teamsRes.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const teamItems = () => {
        if (filteredTeams.length === 0) {
            return (
                <div>
                    <div className='no-teams'>No Teams</div>
                    <div>Make One</div>
                </div>
            )
        } else {
            return filteredTeams.map(team => {
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

export default LocalTeams