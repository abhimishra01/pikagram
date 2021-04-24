import React from 'react';
import SignUpForm from './comps/signUp';
import {AuthProvider} from './context/AuthContext';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <Router>
      <AuthProvider>
        <Switch>
          <Route path="/signup">
          <SignUpForm/>
          </Route>
        </Switch>
      </AuthProvider>
     </Router>
      </div>
  );
}

export default App;
