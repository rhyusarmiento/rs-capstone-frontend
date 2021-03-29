import React, {useContext} from 'react'
import { Switch, Route} from 'react-router-dom'

import AuthContext from './../contexts/AuthContext'

import Landing from './pages/Landing'
import PlayerMain from './pages/PlayerMain';
import Register from './pages/Register';
import NoMatch from './pages/NoMatch'
import Profile from './profile/Profile';
import Navigation from './Navigation';
import TeamProfile from './pages/TeamProfile';

function App() {
  const { loggedInStatus } = useContext(AuthContext)

  const authRoutes = () => {
    if (loggedInStatus === 'NOT_LOGGED_IN') {
      return (
        <div>
          <Route exact path="/" component={Landing}/> 
          <Route path="/register" component={Register}/>
        </div>
      )
    } else if (loggedInStatus === 'LOGGED_IN') {
      return (
        <div>
          <Navigation />
          <div className='body'>
            <Route path="/player-main" component={PlayerMain} />
            <Route path="/profile" component={Profile} />
            <Route 
              path='/team-profile/:slug' 
              render={() => (
                <TeamProfile />
              )}
            />
          </div>
        </div>
      )      
    } else {
      return (
        <Route component={NoMatch} />
      )
    }
  }

  return (
    <div className="App">
      <Switch>
        <React.Fragment>
          {authRoutes()}
        </React.Fragment>
      </Switch>
    </div>
  );
}

export default App;