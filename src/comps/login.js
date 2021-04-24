import React, {useState,useRef} from "react";
import {Card, Form, Button, Alert } from 'react-bootstrap';
import {useAuth} from '../context/AuthContext';
import "bootstrap/dist/css/bootstrap.min.css";


const LoginForm = () => {
    
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [isLoading, setLoading] = useState(false);
    const {signup, currentUser} = useAuth();
    const [error,setError] = useState(null);

    async function handleSubmit(evt){
        evt.preventDefault();

        try{
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
        }
        catch{
            setError("Failed to create an account!")
        }
        setLoading(false);
    }
    
    return ( <div className="loginForm">
        <Card className="SignUpCard">
          <Card.Body className="mt-4">
            <h2 className="text-center">Log In</h2>
                {/* {currentUser && console.log(currentUser.email)} */}
            {error && <Alert variant="danger">{error}</Alert>}
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
          </Card.Body>
        </Card>
       </div> );
}
 
export default LoginForm;