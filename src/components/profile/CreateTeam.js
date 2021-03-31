import React from 'react'

function CreateTeam() {

    const handleCreateTeam = () => {
        console.log('create teams')
    }

    return (
        <div className='create-team'>
            <button onClick={handleCreateTeam}>Create Team</button>
        </div>
    )
}

export default CreateTeam