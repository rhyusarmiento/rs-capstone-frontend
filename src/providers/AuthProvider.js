import React, { useState, useEffect } from 'react'
import axios from 'axios'

import AuthContext from '../contexts/AuthContext'

const AuthProvider = (props) => {
    const [loggedInStatus, setLoggedInStatus] = useState('NOT_LOGGED_IN')

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:5000/api/logged-in',
            withCredentials: true
        })
            .then(res => {
                if (res.data === "User Logged Via Cookie") {
                    setLoggedInStatus('LOGGED_IN')
                }
            })
            .catch(err => console.log(err))
    }, [])

    const handleRegister = () => {
        setLoggedInStatus('REGISTER')
    }

    const handleSuccessfulLogin = () => {
        setLoggedInStatus('LOGGED_IN')
    }

    const handleSuccessfulLogout = () => {
        axios({
            method: 'post',
            url: "http://localhost:5000/api/logout",
            withCredentials: true
        })
            .then(res => {
                setLoggedInStatus('NOT_LOGGED_IN')
                // also can use redirect if need on other page
                // return <Redirect to="/" />
            })
            .catch(err => console.log(err))
    }

    const state = {
        loggedInStatus,
        setLoggedInStatus,
        handleSuccessfulLogout,
        handleSuccessfulLogin,
        handleRegister,
    }

    return (
        <AuthContext.Provider value={state}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider