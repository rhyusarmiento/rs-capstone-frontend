import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import {API_URL} from './../API_URL'

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
            url: `${API_URL}/register`,
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
                axios({
                    method: 'post',
                    url: `${API_URL}/login`,
                    data: {
                        username, 
                        password,
                    },
                    withCredentials: true,
                })
                    .then(res => {
                        handleSuccessfulLogin(res)
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }
    
    return (
        <div className='register-wrapper'>
            <h1>Register</h1>
            <div className='register-form-wrapper'>
                <form onSubmit={handleSubmit}>
                    <div className="register-input-wrapper">
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
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
            <NavLink exact to="/">Back to Login</NavLink>
        </div>
    )
}

export default Register