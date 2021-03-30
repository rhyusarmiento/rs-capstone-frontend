import React from 'react'

function PlayerInfo(props) {
    return (
        <div className='profile-info-wrapper'>
            <h2>Name: {props.name}</h2>
            <h2>City: {props.city}</h2>
            <h2>State: {props.state}</h2>
            <h2>Phone Number: {props.phoneNumber}</h2>
        </div>
    )
}

export default PlayerInfo