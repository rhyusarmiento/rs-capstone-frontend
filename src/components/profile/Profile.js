import React, {useState} from 'react'
import axios from 'axios'

import LogoutButton from './LogoutButton'
import PlayerInfo from './PlayerInfo'

function Profile() {
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    // useEffect(() => {
    //     axios({
    //         method: 'get',
    //         url:
    //     })
    // })

    return (
        <div>
            <PlayerInfo />
            <LogoutButton />
        </div>
    )
}

export default Profile