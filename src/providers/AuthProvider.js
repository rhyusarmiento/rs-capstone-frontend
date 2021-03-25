import React, { useState } from 'react'

import AuthContext from '../contexts/AuthContext'

const AuthProvider = (props) => {
    const [loggedInStatus, setLoggedInStatus] = useState('NOT_LOGGED_IN')

    const state = {
        loggedInStatus,
        setLoggedInStatus,
    }

    return (
        <AuthContext.Provider value={state}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider