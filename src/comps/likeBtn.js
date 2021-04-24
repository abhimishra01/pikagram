import React from 'react';
import {fireStore} from "../firebaseConfig";
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';

const LikeButton = ({id,likes}) => {
    const databaseRef = fireStore.collection('images');
    const likeHandleEvent = ()=>{
        databaseRef.doc(id).update({
            likes: likes+1
        });  
    }
    return ( 
            <button
            className="like-btn"
            onClick={likeHandleEvent}
            > <FavoriteOutlinedIcon id="like"/>
           {likes}</button>
       
     );
}
 
export default LikeButton;