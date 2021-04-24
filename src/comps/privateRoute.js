import {Route, Redirect} from 'react-router-dom';
import {useAuth}  from "../context/AuthContext";

const PrvRoute = ({component: Components,...rest}) => {
    
    const {currentUser} = useAuth();
    
    return ( 
        <Route>
            {...rest}
            render={props=>{
                currentUser?<Component {...props}/>:<Redirect to="/login"/> 
            }}
        </Route>
     );
}
 
export default PrvRoute;