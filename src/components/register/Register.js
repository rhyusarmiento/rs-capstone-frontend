import React, { useState, useContext } from 'react'
import axios from 'axios'

import AuthContext from '../../contexts/AuthContext'

function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const { handleSuccessfulLogin } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        axios({
            method: 'post',
            url: `http://localhost:5000/api/register`,
            data: {
                username,
                password,
                name,
                city,
                state,
                phone_number: phoneNumber,
            },
            withCredentials: true,
        })
            .then(res => {
                handleSuccessfulLogin()
            })
            .catch(err => console.log(err))
    }
    
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    name='username'
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input 
                    type='password' 
                    name='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input 
                    type='text' 
                    name='name'
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input 
                    type='text' 
                    name='city'
                    placeholder='City'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                />
                <input 
                    type='text' 
                    name='state'
                    placeholder='State'
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                />
                <input 
                    type='text' 
                    name='phoneNumber'
                    placeholder='Phone Number'
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Register