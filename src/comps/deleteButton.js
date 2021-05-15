import React from 'react';
import {fireStore} from "../firebaseConfig";
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import {useAuth} from '../context/AuthContext';


const DeleteBtn = ({id}) => {
    const {currentUser} = useAuth();
    const databaseRef = fireStore.collection(currentUser.email);
    const deleteHandleEvent = ()=>{
        let userConfirmation = window.confirm("Do you really want to delete this image from your gallery?");
        if(userConfirmation){   
        databaseRef.doc(id).delete()
            .then(()=>{
                alert("Deleted Successfully");
            })
        }
    }
        return ( 
            <button
            className="like-btn"
            onClick={deleteHandleEvent}
            ><DeleteOutlinedIcon id="del" /></button>
            
            );
}
 
export default DeleteBtn;