import React, { useState } from 'react'
import axios from 'axios'
import {API_URL} from './../API_URL'

import TeamItem from './../player-main/TeamItem'

function TeamSearch() {
    const [keyWord, setKeyWord] = useState('')
    const [filteredTeams, setFilteredTeams] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios({
            method: 'get',
            url: `${API_URL}/get-teams`,
            withCredentials: true
        })
            .then(res => {
                let teamRes = res.data.filter(team => team.name.toLowerCase() === keyWord.toLowerCase())
                setFilteredTeams(teamRes)
            })
            .catch(err => {
                console.log(err)
            })
    }

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
                <div className="search-wrapper">
                    <form onSubmit={handleSubmit}>
                        <input 
                            type='text' 
                            name='keyWord'
                            placeholder='Search By Name'
                            value={keyWord}
                            onChange={(e) => setKeyWord(e.target.value)}
                            required
                        />
                        <button type='submit'>Search</button>
                    </form>
                </div>
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