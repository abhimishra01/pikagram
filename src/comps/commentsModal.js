import React from 'react';
import {motion} from 'framer-motion';
import {fireStore} from "../firebaseConfig";

const CmtModal = ({selectedCmtBtn,setSelectedCmtBtn}) =>{
    const databaseRef = fireStore.collection('images');
    const handleClickEvent = ()=>{
        databaseRef.doc(id).update({
            likes: likes+1
        });  
    }

const closeBackdrop = (evt)=>{
    
        // checking if the clicked is inside the image or outside the image -> we only need to close when outside the image is clicked
        if(evt.target.classList.contains('backdrop')){
        setSelectedImg(null);}
    }

    return (
        <motion.div className='backdrop'
        initial={{opacity:0}}
        animate={{opacity:1}}
        onClick={closeBackdrop}>
            {/* <motion.img
            // this property takes the img off the screen on y axis and then animates accordingly
            initial={{y:"-100vh"}}
            animate={{y:0}}
            src={selectedImg} alt="enlarged"/> */}
        <textarea name="" id="" cols="30" rows="10">Input here</textarea>
        </motion.div>
    )
}


export default CmtModal;