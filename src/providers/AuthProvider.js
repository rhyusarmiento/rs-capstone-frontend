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
                if (res.data === "logged in via cookie") {
                    setLoggedInStatus('LOGGED_IN')
                    if (!sessionStorage.getItem('logged-in')) {
                        history.push('/player-main')
                        sessionStorage.setItem('logged-in', true)
                    }
                } else if (res.data === 'not logged in') {
                    setLoggedInStatus('NOT_LOGGED_IN')
                    sessionStorage.clear()
                    localStorage.clear()
                    history.push('/')
                }
            })
            .catch(err => console.log(err))
    }, [history])


    const handleSuccessfulLogin = (res) => {
        setLoggedInStatus('LOGGED_IN')
        localStorage.setItem('playerId', res.data)
        sessionStorage.setItem('logged-in', true)
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
                sessionStorage.clear()
                localStorage.clear()
                history.push('/')
            })
            .catch(err => console.log(err))
    }

    const state = {
        loggedInStatus,
        history,
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