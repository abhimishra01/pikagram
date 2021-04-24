import React, {useState,useRef} from "react";
import {Card, Form, Button, Alert } from 'react-bootstrap';
import {useAuth} from '../context/AuthContext';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link,useHistory} from 'react-router-dom';

const LoginForm = () => {
    
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [isLoading, setLoading] = useState(false);
    const {login} = useAuth();
    const [error,setError] = useState(null);
    const history = useHistory();

    async function handleSubmit(evt){
        evt.preventDefault();

        try{
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            history.push("/");  
        }
        catch{
            setError("Failed to Login, Please Enter Correct Credentials")
        }
        setLoading(false);
    }
    
    return ( <div className="loginForm">
        <Card className="SignUpCard">
          <Card.Body className="mt-4">
            <h2 className="text-center">Log In</h2>
            <p class="text-center">To your <strong class="pika-label">Pikagram</strong> Account</p>
                {/* {currentUser && console.log(currentUser.email)} */}
            {error && <Alert class="alert" variant="danger">{error}</Alert>}
            <Form 
            onSubmit={handleSubmit}
            >
              <Form.Group id="email">
                <h4>Email</h4>
                <Form.Control className="inputField" type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <h4>Password</h4>
                <Form.Control className="inputField" type="password" ref={passwordRef} required />
              </Form.Group>
              <Button 
              disabled={isLoading}
               className="w-100" type="submit">
                Login
              </Button>
            </Form>
            
        <div className="w-100 text-center mt-3">
    
        <Link to="/forgotpassword">
             Forgot password?
              </Link>
        </div>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Need an account?
           <Link to="/signup">
              Sign Up
              </Link>
        </div>
       </div> );
}
 
export default LoginForm;