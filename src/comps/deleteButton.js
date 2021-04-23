import React from 'react';
import Emoji from 'a11y-react-emoji';
import {fireStore} from "../firebaseConfig";
import {useState} from 'react';

const DeleteBtn = ({id}) => {

    const [isInProgress, setisInProgress] = useState(false);
    const databaseRef = fireStore.collection('images');
    const likeHandleEvent = ()=>{
        setisInProgress(true);
        databaseRef.doc(id).delete()
        .then(()=>{
            setisInProgress(false);
            console.log("Deleted Successfully");
        })
    }
    return ( 
            <button
            className="like-btn"
            onClick={likeHandleEvent}
            > {isInProgress?"Deleting..":<Emoji symbol="❌" label="delete" />}</button>
       
     );
}
 
export default DeleteBtn;