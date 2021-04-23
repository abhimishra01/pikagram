import React from 'react';
import Emoji from 'a11y-react-emoji';
import {fireStore} from "../firebaseConfig";

const DeleteBtn = ({id}) => {
    const databaseRef = fireStore.collection('images');
    const likeHandleEvent = ()=>{
        databaseRef.doc(id).delete()
        .then(()=>{
            console.log("Deleted Successfully");
        })
    }
    return ( 
            <button
            className="like-btn"
            onClick={likeHandleEvent}
            > <Emoji symbol="❌" label="delete" /></button>
       
     );
}
 
export default DeleteBtn;