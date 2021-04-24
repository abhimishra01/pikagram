import React, {useState,useRef} from "react";
import {Card, Form, Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
const SignUpForm = () => {
    
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const passwordConfirmRef = useRef(null);
    
    return ( <div className="signUpform">
        <Card className="SignUpCard">
          <Card.Body className="mt-4">
            <h2 className="text-center">Sign Up</h2>
            {/* {error && <Alert variant="danger">{error}</Alert>} */}
            <Form 
            // onSubmit={handleSubmit}
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
            //   disabled={loading}
               className="w-100" type="submit">
                Sign Up
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Already have an account?
           {/* <Link to="/login"> */}
              Log In
              {/* </Link> */}
        </div>
      </div> );
}
 
export default SignUpForm;