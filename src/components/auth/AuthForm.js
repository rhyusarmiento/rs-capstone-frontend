import React, { useContext, useState } from 'react'
import axios from 'axios'

import AuthContext from '../../contexts/AuthContext'

function AuthForm() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const { handleSuccessfulLogin } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        axios({
            method: 'post',
            url: `http://localhost:5000/api/login`,
            data: {
                username, 
                password,
            },
            withCredentials: true,
        })
            .then(res => {
                console.log(res)
                handleSuccessfulLogin()
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
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
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default AuthForm