import React, {useContext} from 'react'
import AuthContext from '../../contexts/AuthContext'

const LogoutButton = () => {
    const {handleSuccessfulLogout} = useContext(AuthContext)

    return (
        <div>
            <button onClick={handleSuccessfulLogout}>Logout</button>
        </div>
    )
}

export default LogoutButton