import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {API_URL} from '../../API_URL'

import TeamItem from './../player-main/TeamItem'

function TeamSearch() {
    const [filteredTeams, setFilteredTeams] = useState([])

    useEffect(() => {
        axios({
            method: 'get',
            url: `${API_URL}/get-teams`,
            withCredentials: true
        })
            .then(res => {
                let teamRes = res.data.filter(team => team.name.toLowerCase() === sessionStorage.getItem('searchKeyWord').toLowerCase())
                setFilteredTeams(teamRes)
            })
            .catch(err => {
                console.log(err)
            })
    })

    const teamItems = () => {
        if (filteredTeams.length === 0) {
            return (
                <h2 className='no-team'>No Teams Matched Your Search</h2>
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
        <div className='team-search-wrapper'>
            <div className="team-search-content">
                <div className="team-result-wrapper">
                    <h1>Results</h1>
                    <div className="team-results">
                        {teamItems()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamSearch