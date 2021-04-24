import React from 'react';
import { FaComments } from 'react-icons/fa';

const CommentsBtn = ({setComments,comments,imgid,setSelectedCmtBtn,setimgId}) => {
   
    const updateStates = ()=>{
        setSelectedCmtBtn(true);
        setimgId(imgid);
        setComments(comments);
    }

    return ( 
            <button
            onClick={updateStates}
            className="like-btn"
            > <FaComments id="cmt"/></button>
       
     );
}
 
export default CommentsBtn;