import React, {useContext} from 'react'

import AuthContext from '../../contexts/AuthContext'

function LogoutButton() {
    const { handleSuccessfulLogout } = useContext(AuthContext)

    return (
        <div className='logout' >
            <button onClick={ handleSuccessfulLogout }>Logout</button>
        </div>
    )
}

export default LogoutButton