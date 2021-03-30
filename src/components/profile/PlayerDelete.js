import React, { useContext, useState } from 'react'

import AuthContext from './../../contexts/AuthContext'

function PlayerDelete() {
    const [wantToDelete, setWantToDelete] = useState(false)

    const { handleAccountDelete } = useContext(AuthContext)

    const protectDelete = () => {
        if (wantToDelete) {
            return (
                <div className='delete-confirm'>
                    <h2>Are you sure</h2>
                    <div className="delete-option">
                        <button onClick={() => handleAccountDelete()}>Yes</button>
                        <button onClick={() => setWantToDelete(false)}>No</button>
                    </div>
                </div>
            )
        } else {
            return (
                <button className='delete-check' onClick={() => setWantToDelete(true)}>Delete Account</button>
            )
        }
    }

    return (
        <div className='delete-wrapper'>
            {protectDelete()}
        </div>
    )
}

export default PlayerDelete