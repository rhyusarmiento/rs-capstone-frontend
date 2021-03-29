import React, { useEffect, useState } from 'react'
import axios from 'axios'

function TeamProfile() {
    const [name, setName] = useState(null)
    const [sport, setSport] = useState(null)
    const [city, setCity] = useState(null)
    const [state, setState] = useState(null)
    const [joinedStatus, setJoinedStatus] = useState(false)
    
    useEffect(() => {
        axios({
            method: 'get',
            url: `http://localhost:5000/api/get-single-team/${sessionStorage.getItem('tempTeamId')}`,
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
            url: `http://localhost:5000/api/get-teams-player/${localStorage.getItem('playerId')}`,
            withCredentials: true
        })
            .then(res => {
                res.data.forEach(team => {
                    if (team.id == sessionStorage.getItem('tempTeamId')) {
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
            url: `http://localhost:5000/api/player-leave-team/${localStorage.getItem('playerId')}/${sessionStorage.getItem('tempTeamId')}`,
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
            url: `http://localhost:5000/api/player-join-team/${localStorage.getItem('playerId')}/${sessionStorage.getItem('tempTeamId')}`,
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
        <div>
            {name}
            {sport}
            {city}
            {state}
            {handleButton()}
        </div>
    )
}

export default TeamProfile