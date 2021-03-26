import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Landing from './Landing'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing}/> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;