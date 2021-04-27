import React from 'react';
import {fireStore} from "../firebaseConfig";
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import {useAuth} from '../context/AuthContext';


const DeleteBtn = ({id}) => {

    const {currentUser} = useAuth();

    const databaseRef = fireStore.collection(currentUser.email);
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