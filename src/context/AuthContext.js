import React,{useContext, useState} from 'react';
import {firebaseAuth} from "../firebaseConfig";


const AuthContext = React.createContext();

const useAuth = () => {
    return useContext(AuthContext);
}
 
export default useAuth;

const AuthProvider = ( {children}) => {
   
    const [currUser, setcurrUser] = useState(null);

    const value={
        currUser
    }

    return ( 
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>

     );
}
 


export default AuthProvider;