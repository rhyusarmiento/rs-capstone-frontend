import React, {useState, useEffect } from 'react'
import axios from 'axios'
import {API_URL} from './../API_URL'

import PlayerInfo from './PlayerInfo'
import LogoutButton from './LogoutButton'
import PlayerDelete from './PlayerDelete'

function Profile() {
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    useEffect(() => {
        axios({
            method: 'get',
            url: `${API_URL}/get-single-player/${localStorage.getItem('playerId')}`,
            withCredentials: true
        })
            .then(res => {
                setName(res.data.name)
                setCity(res.data.city)
                setState(res.data.state)
                setPhoneNumber(res.data.phone_number)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className='profile-wrapper'>
            <div className="profile-content-wrapper">
                <PlayerInfo 
                    name={name}
                    city={city}
                    state={state}
                    phoneNumber={phoneNumber}
                />
                <div className="profile-settings-wrapper">
                    <LogoutButton />
                    <PlayerDelete />
                </div>
            </div>
        </div>
    )
}

export default Profile