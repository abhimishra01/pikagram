import React from 'react';
import {motion} from 'framer-motion';
import {fireStore} from "../firebaseConfig";
import  firebase from 'firebase/app'; 
import {useState} from 'react';

const CmtModal = ({imgId,setSelectedCmtBtn}) =>{
    const databaseRef = fireStore.collection('images');
    const [comment, setComment] = useState("");

    const closeBackdrop = (evt)=>{
    
        // checking if the clicked is inside the image or outside the image -> we only need to close when outside the image is clicked
        if(evt.target.classList.contains('backdrop')){
            setSelectedCmtBtn(null);}
    }

    const handleSubmit = (evt)=>{
        console.log(imgId);
        evt.preventDefault();
        databaseRef.doc(imgId).update({
            commments: firebase.firestore.FieldValue.arrayUnion(comment)
        });  
        closeBackdrop();
    }

    return (
        <motion.div className='backdrop'
        initial={{opacity:0}}
        animate={{opacity:1}}
        onClick={closeBackdrop}>
            <motion.form
        className="comments-form"
        onSubmit={handleSubmit}
            initial={{y:"-100vh"}}
            animate={{y:0}}>
        <textarea
         onChange={(event)=>setComment(event.target.value)}
        name="CommentBox" id="" cols="60" rows="10"
      placeholder="comment"></textarea>
        <button>Comment</button>
        </motion.form>
        </motion.div>
    )
}


export default CmtModal;