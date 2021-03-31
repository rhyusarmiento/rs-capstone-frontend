import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import {API_URL} from '../../API_URL'

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
            .catch(err => {
                console.log(err)
                alert('Username Taken')
            })
    }
    
    return (
        <div className='register-wrapper'>
            <h1>Register</h1>
            <div className='register-form-wrapper'>
                <form onSubmit={handleSubmit}>
                    <div className="register-input-wrapper">
                        <input 
                            required
                            type='text' 
                            name='username'
                            placeholder='Username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input 
                            required
                            type='password' 
                            name='password'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input 
                            required
                            type='text' 
                            name='name'
                            placeholder='Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input 
                            required
                            type='text' 
                            name='city'
                            placeholder='City'
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <input 
                            required
                            type='text'
                            name='state'
                            placeholder='State'
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            list='states'
                            maxLength='2'
                        />
                        <datalist id='states'>
                            <option value='AL' />
                            <option value='AK' />
                            <option value='AZ' />
                            <option value='AR' />
                            <option value='CA' />
                            <option value='CO' />
                            <option value='CT' />
                            <option value='DE' />
                            <option value='FL' />
                            <option value='GA' />
                            <option value='HI' />
                            <option value='ID' />
                            <option value='IL' />
                            <option value='IN' />
                            <option value='IA' />
                            <option value='KS' />
                            <option value='KY' />
                            <option value='LA' />
                            <option value='ME' />
                            <option value='MD' />
                            <option value='MA' />
                            <option value='MI' />
                            <option value='MS' />
                            <option value='MO' />
                            <option value='MT' />
                            <option value='NE' />
                            <option value='NV' />
                            <option value='NH' />
                            <option value='NJ' />
                            <option value='NM' />
                            <option value='NY' />
                            <option value='NC' />
                            <option value='ND' />
                            <option value='OH' />
                            <option value='OK' />
                            <option value='OR' />
                            <option value='PA' />
                            <option value='RI' />
                            <option value='SC' />
                            <option value='SD' />
                            <option value='TN' />
                            <option value='TX' />
                            <option value='UT' />
                            <option value='VT' />
                            <option value='VA' />
                            <option value='WA' />
                            <option value='WV' />
                            <option value='WI' />
                            <option value='WY' />
                        </datalist>
                        <input 
                            required
                            type='text' 
                            name='phoneNumber'
                            placeholder='Phone Number'
                            value={phoneNumber}
                            maxLength='13'
                            onChange={(e) => setPhoneNumber(e.target.value)}
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