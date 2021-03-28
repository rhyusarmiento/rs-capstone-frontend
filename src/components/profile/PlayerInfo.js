import React from 'react'

function PlayerInfo(props) {
    return (
        <div>
            {props.name}
            {props.city}
            {props.state}
            {props.phoneNumber}
        </div>
    )
}

export default PlayerInfo