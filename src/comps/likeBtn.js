import React from 'react';
import {fireStore} from "../firebaseConfig";
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import {useAuth} from '../context/AuthContext';



const LikeButton = ({id,likes}) => {

    const {currentUser} = useAuth();

    const databaseRef = fireStore.collection(currentUser.email);
    const likeHandleEvent = ()=>{
        databaseRef.doc(id).update({
            likes: likes+1
        });  
    }
    return ( 
            <button
            className="like-btn"
            onClick={likeHandleEvent}
            > <FavoriteOutlinedIcon fontSize="small" id="like"/>
           {likes}</button>
       
     );
}
 
export default LikeButton;