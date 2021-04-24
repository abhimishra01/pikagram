import React,{useContext, useState,useEffect} from 'react';
import {firebaseAuth} from "../firebaseConfig";


const AuthContext = React.createContext();

const useAuth = () => {
    return useContext(AuthContext);
}
 
export default useAuth;

const AuthProvider = ( {children}) => {
   
    function signUp(email,paswd){
      return  firebaseAuth.createUserWithEmailAndPassword(email,paswd)
    }
    

    
    const [currUser, setcurrUser] = useState(null);

    const value={
        currUser,
        signUp
    }


    useEffect(() => {
        // we are declaring it with unsubscribe bcoz the following function returns a method with unsubscribes the listener whenever called
   const unsubscribe =firebaseAuth.onAuthStateChanged(user=>{
        setcurrUser(user);
    })
    return unsubscribe
    }, [])

    return ( 
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>

     );
}
 


export default AuthProvider;