import React, {useState,useRef} from "react";
import {Card, Form, Button, Alert } from 'react-bootstrap';
import {useAuth} from '../context/AuthContext';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom';

const ForgotPaswd = () => {
    
    const emailRef = useRef(null);
    const [isLoading, setLoading] = useState(false);
    const {resetPassword} = useAuth();
    const [error,setError] = useState(null);
    const [message, setMessage] = useState("");
 

    async function handleSubmit(evt){
        evt.preventDefault();

        try{
            setLoading(true);
            await resetPassword(emailRef.current.value)
            setMessage("Check your Inbox for further instructions !")
        }
        catch{
            setError("Failed to Reset Password !")
        }
        setLoading(false);
    }
    
    return ( <div className="forgotPaswd">
        <Card className="SignUpCard">
          <Card.Body className="mt-4">
            <h2 className="text-center">Password Reset</h2>
                {/* {currentUser && console.log(currentUser.email)} */}
            {error && <Alert variant="danger">{error}</Alert>}
             {message && <Alert variant="success">{message}</Alert>}
            <Form 
            onSubmit={handleSubmit}
            >
              <Form.Group id="email">
                <p className="text-center">Enter your <strong class="pika-label">Email address</strong></p>
                <Form.Control className="inputField" type="email" ref={emailRef} required />
              </Form.Group>
            
              <Button 
              disabled={isLoading}
               className="w-100" type="submit">
                Reset Password
              </Button>
            </Form>
            
        <div className="w-100 text-center mt-3">
    
        <Link to="/login">
            Back to Login
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
 
export default ForgotPaswd;