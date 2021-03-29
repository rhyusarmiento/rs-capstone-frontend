import React, { useState } from 'react'
import axios from 'axios'

import TeamItem from './../player-main/TeamItem'

function TeamSearch() {
    const [keyWord, setKeyWord] = useState('')
    const [filteredTeams, setFilteredTeams] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios({
            method: 'get',
            url: 'http://localhost:5000/api/get-teams',
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
                <div>No Teams</div>
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
        <div>
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
            {teamItems()}
        </div>
    )
}

export default TeamSearch