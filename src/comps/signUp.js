import React, {useState,useRef} from "react";
import {Card, Form, Button, Alert } from 'react-bootstrap';
import {useAuth} from '../context/AuthContext';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link, useHistory} from 'react-router-dom';

const SignUpForm = () => {
    
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [isLoading, setLoading] = useState(false);
    const passwordConfirmRef = useRef(null);
    const {signup} = useAuth();
    const [error,setError] = useState(null);
    const history = useHistory();

    async function handleSubmit(evt){
        evt.preventDefault();
        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError("Passwords Do Not Match");
        }
        try{
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            history.push("/");  

        }
        catch{
            setError("Failed to create an account!")
        }
        setLoading(false);
    }
    
    return ( <div className="signUpform">
        <Card className="SignUpCard">
          <Card.Body className="mt-4">
            <h2 className="text-center">Sign Up</h2>
            <p class="text-center">Get Started with <strong class="pika-label">Pikagram</strong></p>
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
              <Form.Group id="password-confirm">
                <h4>Confirm Password</h4>
                <Form.Control className="inputField" type="password" ref={passwordConfirmRef} required />
              </Form.Group>
              <Button 
              disabled={isLoading}
               className="w-100" type="submit">
                Sign Up
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Already have an account?
           <Link to="/login">
              Log In
              </Link>
        </div>
       </div> );
}
 
export default SignUpForm;