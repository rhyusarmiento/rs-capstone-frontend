import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {API_URL} from '../../API_URL'

function PlayerInfo(props) {
    const [editStatus, setEditStatus] = useState(false)
    const [name, setName] = useState(props.name)
    const [city, setCity] = useState(props.city)
    const [state, setState] = useState(props.state)
    const [phoneNumber, setPhoneNumber] = useState(props.phoneNumber)

    useEffect(() => {
        setName(props.name)
        setCity(props.city)
        setState(props.state)
        setPhoneNumber(props.phoneNumber)
    }, [setName, setCity, setState, setPhoneNumber, props.name, props.city, props.state, props.phoneNumber])

    const handleEditSubmit = (e) => {
        e.preventDefault()
        axios({
            method: 'post',
            url:  `${API_URL}/edit-player/${localStorage.getItem('playerId')}`,
            data: {
                name,
                city,
                state,
                phone_number: phoneNumber
            },
            withCredentials: true
        })
            .then(res => {
                setEditStatus(false)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const renderEdit = () => {
        if (!editStatus) {
            return (
                <div className='player-info'>
                    <div className="info">
                        <h2>Name: {name}</h2>
                        <h2>City: {city}</h2>
                        <h2>State: {state}</h2>
                        <h2>Phone Number: {phoneNumber}</h2> 
                    </div>
                    <button className='toggle-edit' onClick={() => setEditStatus(true)}>Edit Info</button>
                </div>
            )
        } else {
            return (
                <div className='edit-form'>
                    <form onSubmit={handleEditSubmit}>
                        <div className="input-wrapper">
                            <label for='name'>Name:</label>
                            <input 
                                type='text'
                                name='name'
                                id='name'
                                placeholder='Name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <label for='city'>City:</label>
                            <input 
                                type='text' 
                                name='city'
                                id='city'
                                placeholder='City'
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                required
                            />
                            <label for='state'>State:</label>
                            <input 
                                type='text' 
                                name='state'
                                id='state'
                                placeholder='State'
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                required
                            />
                            <label for='phoneNumber'>Phone Number:</label>
                            <input 
                                type='text' 
                                name='phoneNumber'
                                id='phoneNumber'
                                placeholder='Phone Number'
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                            />
                            <button type='submit'>Submit</button>
                        </div>
                    </form>
                    <button className='toggle-edit' onClick={() => setEditStatus(false)}>Return</button>
                </div>
            )
        }
    }

    return (
        <div className='profile-info-wrapper'>
            {renderEdit()}
        </div>
    )
}

export default PlayerInfo