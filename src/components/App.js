import React, {useContext} from 'react'
import { Switch, Route} from 'react-router-dom'

import AuthContext from './../contexts/AuthContext'

import Landing from './Landing'
import PlayerMain from './PlayerMain';
import Register from './register/Register';
import NoMatch from './pages/NoMatch'

function App() {
  const { loggedInStatus } = useContext(AuthContext)

  const authRoutes = () => {
    if (loggedInStatus === 'LOGGED_IN') {
      return (
        <Route path="/player-main" component={PlayerMain}/> 
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