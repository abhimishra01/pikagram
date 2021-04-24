import React from 'react';
import {fireStore} from "../firebaseConfig";
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';


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
            ><DeleteOutlinedIcon id="del" /></button>
       
     );
}
 
export default DeleteBtn;