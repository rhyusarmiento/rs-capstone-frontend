import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import AuthContext from '../contexts/AuthContext'

const AuthProvider = (props) => {
    const [loggedInStatus, setLoggedInStatus] = useState('NOT_LOGGED_IN')
    let history = useHistory()

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

    const handleSuccessfulLogin = () => {
        setLoggedInStatus('LOGGED_IN')
        history.push('/player-main')
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
    }

    return (
        <AuthContext.Provider value={state}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider