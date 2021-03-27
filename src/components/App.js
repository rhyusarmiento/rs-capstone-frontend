import React, {useContext} from 'react'
import { Switch, Route} from 'react-router-dom'

import AuthContext from './../contexts/AuthContext'

import Landing from './pages/Landing'
import PlayerMain from './pages/PlayerMain';
import Register from './register/Register';
import NoMatch from './pages/NoMatch'
import Profile from './profile/Profile';
import Navigation from './Navigation';

function App() {
  const { loggedInStatus } = useContext(AuthContext)

  const authRoutes = () => {
    if (loggedInStatus === 'LOGGED_IN') {
      return (
        <div>
          <Navigation />
          <div className='body'>
            <Route path="/player-main" component={PlayerMain}/>
            <Route path="/profile" component={Profile} />
          </div>
        </div>
      )
    }
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing}/> 
        <Route path="/register" component={Register}/> 
        {authRoutes()}
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
}

export default App;