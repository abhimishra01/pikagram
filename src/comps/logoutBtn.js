import React, {useState} from 'react';
import {Card, Button} from "react-bootstrap";
import {useAuth} from '../context/AuthContext';
import {useHistory}  from 'react-router-dom';
const LogoutBtn = () => {

    const history = useHistory();
    const {currentUser,logout} = useAuth();
    const [error, seterror] = useState("");

    async function handleLogout(evt){
        try{
            await logout();
            history.push("/login");
        }catch{
            setError("Failed to logout !")
        }
    }
    return ( 
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">
                    Profile
                </h2>
                <strong>Email:</strong> {currentUser.email}
            </Card.Body>
            <div className="w-100 text-center m1-2">
                <Button variant="link" onClick={handleLogout}>Logout</Button>
            </div>
        </Card>
     );
}
 
export default LogoutBtn;