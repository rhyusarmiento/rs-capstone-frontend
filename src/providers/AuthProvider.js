import React, { useState } from 'react'
import axios from 'axios'

import AuthContext from '../contexts/AuthContext'

const AuthProvider = (props) => {
    const [loggedInStatus, setLoggedInStatus] = useState('NOT_LOGGED_IN')

    // useEffect(() => {
    //     axios({
    //         method: 'get',
    //         url: 'http://localhost:5000/api/v1/logged-in',
    //         withCredentials: true
    //     })
    //         .then(res => {
    //             if (res.data === "User Logged Via Cookie") {
    //                 setLoggedInStatus('LOGGED_IN')
    //             }
    //         })
    //         .catch(err => console.log(err))
    // }, [])

    const handleSuccessfulLogin = () => {
        console.log('handle login')
        // setLoggedInStatus('LOGGED_IN')
    }

    const handleSuccessfulLogout = () => {
        console.log('handle logout')
        // axios({
        //     method: 'post',
        //     url: "http://localhost:5000/api/v1/logout",
        //     withCredentials: true
        // })
        //     .then(res => {
        //         setLoggedInStatus('NOT_LOGGED_IN')
        //         // also can use redirect if need on other page
        //         return <Redirect to="/" />
        //     })
        //     .catch(err => console.log(err))
    }

    const state = {
        loggedInStatus,
        setLoggedInStatus,
        handleSuccessfulLogout,
        handleSuccessfulLogin
    }

    return (
        <AuthContext.Provider value={state}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider