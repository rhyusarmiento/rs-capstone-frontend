import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {API_URL} from '../../API_URL'

function TeamProfile() {
    const [name, setName] = useState(null)
    const [sport, setSport] = useState(null)
    const [city, setCity] = useState(null)
    const [state, setState] = useState(null)
    const [joinedStatus, setJoinedStatus] = useState(false)
    
    useEffect(() => {
        axios({
            method: 'get',
            url: `${API_URL}/get-single-team/${sessionStorage.getItem('tempTeamId')}`,
            withCredentials: true
        })
            .then(res => {
                setName(res.data.name)
                setSport(res.data.sport)
                setCity(res.data.city)
                setState(res.data.state)
            })
            .catch(err => {
                console.log(err)
            })

        axios({
            method: 'get',
            url: `${API_URL}/get-teams-player/${localStorage.getItem('playerId')}`,
            withCredentials: true
        })
            .then(res => {
                res.data.forEach(team => {
                    if (team.id === parseInt(sessionStorage.getItem('tempTeamId'))) {
                        setJoinedStatus(true)
                    }
                })
            })
            .catch(err => {
                console.log(err)
            })
    })

    const handleLeave = () => {
        axios({
            method: 'get',
            url: `${API_URL}/player-leave-team/${localStorage.getItem('playerId')}/${sessionStorage.getItem('tempTeamId')}`,
            withCredentials: true
        })
            .then(res => {
                setJoinedStatus(false)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleJoin = () => {
        axios({
            method: 'get',
            url: `${API_URL}/player-join-team/${localStorage.getItem('playerId')}/${sessionStorage.getItem('tempTeamId')}`,
            withCredentials: true
        })
            .then(res => {
                setJoinedStatus(true)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleButton = () => {
        if (joinedStatus) {
                return (
                    <button onClick={handleLeave}>Leave</button>
                )
            } else {
                return (
                    <button onClick={handleJoin}>Join</button>
                )
        }
    }

    return (
        <div className='team-profile-wrapper'>
            <div className="team-profile-content">
                <div className='team-info-wrapper'>
                    <h2>Name: {name}</h2>
                    <h2>Sport: {sport}</h2>
                    <h2>City: {city}</h2>
                    <h2>State: {state}</h2>
                </div>
                <div className="toggle-join-wrapper">
                    {handleButton()}
                </div>
            </div>
        </div>
    )
}

export default TeamProfile