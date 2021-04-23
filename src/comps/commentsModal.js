import React from 'react';
import {motion} from 'framer-motion';
import {fireStore} from "../firebaseConfig";
import  firebase from 'firebase/app'; 
import {useState} from 'react';

const CmtModal = ({comments,imgId,setSelectedCmtBtn}) =>{
    const databaseRef = fireStore.collection('images');
    const userData = databaseRef.doc(imgId).get();
    const [comment, setComment] = useState("");
    console.log(comments);
    const closeBackdrop = (evt)=>{
        if(evt.target.classList.contains('backdrop')){
            setSelectedCmtBtn(null);}
    }
    const handleSubmit = (evt)=>{
        console.log(imgId);
        evt.preventDefault();
        databaseRef.doc(imgId).update({
            commments: firebase.firestore.FieldValue.arrayUnion(comment)
        });  
        setComment("");
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
        <motion.div>
                 {comments.map(comment =>{
                   console.log(comment);
                   //  return (
                    //      <div 
                         
                    //      className="comments">
                             
                    //      </div>
                    //  )
                 })}
        </motion.div>
        </motion.div>
    )
}


export default CmtModal;