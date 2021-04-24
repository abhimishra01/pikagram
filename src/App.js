import React from 'react';
import SignUpForm from './comps/signUp';
import {AuthProvider} from './context/AuthContext';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from "./comps/dashboard";

function App() {
  return (
    <div className="App">
     <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/signup">
          <SignUpForm/>
          </Route>
        </Switch>
      </AuthProvider>
     </Router>
      </div>
  );
}

export default App;
