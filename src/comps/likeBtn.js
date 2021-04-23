import React from 'react';
import Emoji from 'a11y-react-emoji';
import {fireStore} from "../firebaseConfig";

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
            > <Emoji symbol="💕" label="love" />
           {likes}</button>
       
     );
}
 
export default LikeButton;