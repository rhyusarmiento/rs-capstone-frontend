import React, { useContext, useState } from 'react'
import { NavLink } from "react-router-dom";
import AuthContext from './../contexts/AuthContext'

function Navigation() {
    const [keyWord, setKeyWord] = useState('')

    const { history } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        sessionStorage.setItem('searchKeyWord', keyWord)
        history.push('/team-search')
    }

    return (
        <div className='navigation'>
            <div className="botton-nav">
                <div className='home'>
                    {/* TODO: logo; Temp: home */}
                    <NavLink to='/player-main' className='navlink'>Home</NavLink>
                </div>
                <div className="search-button">
                    Search
                </div>
                <div className="profile">
                    <NavLink to='/profile' className='navlink'>Profile</NavLink>
                </div>
            </div>
            <div className="top-nav">
                <div className="left-nav">
                    <div className='logo'>
                        {/* TODO: logo; Temp: home */}
                        <NavLink to='/player-main' className='navlink'>Home</NavLink>
                    </div>
                    <div className="search-wrapper">
                        <form onSubmit={handleSubmit}>
                            <input 
                                type='text' 
                                name='keyWord'
                                placeholder='Search By Name'
                                value={keyWord}
                                onChange={(e) => setKeyWord(e.target.value)}
                                required
                            />
                            <button type='submit'>Search</button>
                        </form>
                    </div>
                </div>
                <div className="right-nav">
                    <NavLink to='/profile' className='navlink'>Profile</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navigation