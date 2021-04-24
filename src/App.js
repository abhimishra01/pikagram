import React from 'react';
import SignUpForm from './comps/signUp';
import {AuthProvider} from './context/AuthContext';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from "./comps/dashboard";
import LoginDashboard from './comps/login';
import ForgotPaswd from "./comps/forgotPaswd";
import PrvRoute from "./comps/privateRoute";

function App() {
  return (
    <div className="App">
     <Router>
      <AuthProvider>
        <Switch>
          <PrvRoute exact path="/" component={Dashboard}/>
          <Route exact path="/login" component={LoginDashboard}/>
          <Route exact path="/signup">
          <SignUpForm/>
          </Route>
          <Route exact path="/forgotpassword"
          component={ForgotPaswd}/>
        </Switch>
      </AuthProvider>
     </Router>
      </div>
  );
}

export default App;
