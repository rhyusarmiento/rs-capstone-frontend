import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import {API_URL} from '../../API_URL'

import AuthContext from '../../contexts/AuthContext'

function AuthForm() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const { handleSuccessfulLogin } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
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
            .catch(err => {
                console.log(err)
                alert('Username Or Password Are Invaild')
            })
    }

    return (
        <div className='login-wrapper'>
            <h1>Login</h1>
            <div className='form-wrapper'>
                <form onSubmit={handleSubmit}>
                    <div className='input-wrapper'>
                        <input 
                            type="text"
                            name='username'
                            placeholder='username...'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input 
                            type="password"
                            name='password'
                            placeholder='password...'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type='submit'>Login</button>
                </form>
            </div>
            <NavLink exact to='/register'>Register Here</NavLink>
        </div>
    )
}

export default AuthForm