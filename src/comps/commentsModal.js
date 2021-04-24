import React from 'react';
import {motion} from 'framer-motion';
import {fireStore} from "../firebaseConfig";
import  firebase from 'firebase/app'; 
import {useState} from 'react';

const CmtModal = ({comments,imgId,setSelectedCmtBtn}) =>{
    const databaseRef = fireStore.collection('images');
    const [comment, setComment] = useState(null);
    const closeBackdrop = (evt)=>{
        if(evt.target.classList.contains('backdrop')){
            setSelectedCmtBtn(null);}
    }
    const handleSubmit = (evt)=>{
        evt.preventDefault();
        if (comment){
            databaseRef.doc(imgId).update({
                comments: firebase.firestore.FieldValue.arrayUnion(comment)
            });      
        }
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
            initial={{y:"-500vh"}}
            animate={{y:0}}>
        <textarea
         onChange={(event)=>setComment(event.target.value)}
        name="CommentBox" id="" cols="60" rows="10"
      placeholder="comment"></textarea>
        <button>Comment</button>
       </motion.form>
         <motion.div className="cmnts-section">
                 <ul>
                 {comments.map(comment =>{
                    return (
                         <li
                         id={imgId} 
                         className="comments">
                             {comment}
                         </li>
                     )
                 })}
                 <li
                 style={{color:"yellow"}}
                 >Note: This feature is currently work in progress, please reload comment box in order to see new comments</li>
                 </ul>
        </motion.div> 
        </motion.div>
    )
}


export default CmtModal;