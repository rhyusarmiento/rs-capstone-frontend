import React, { useContext, useState } from 'react'

import AuthContext from './../../contexts/AuthContext'

function PlayerDelete() {
    const [wantToDelete, setWantToDelete] = useState(false)

    const { handleAccountDelete } = useContext(AuthContext)

    const protectDelete = () => {
        if (wantToDelete) {
            return (
                <div>
                    <h2>Are you sure</h2>
                    <button onClick={() => handleAccountDelete()}>Yes</button>
                    <button onClick={() => setWantToDelete(false)}>No</button>
                </div>
            )
        } else {
            return (
                <button onClick={() => setWantToDelete(true)}>Delete Account</button>
            )
        }
    }

    return (
        <div>
            {protectDelete()}
        </div>
    )
}

export default PlayerDelete