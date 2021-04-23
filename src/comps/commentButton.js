import React from 'react';
import Emoji from 'a11y-react-emoji';

const CommentsBtn = ({imgid,setSelectedCmtBtn,setimgId}) => {
   
    const updateStates = ()=>{
        setSelectedCmtBtn(true);
        setimgId(imgid);
    }

    return ( 
            <button
            onClick={updateStates}
            className="like-btn"
            > <Emoji symbol="💭" label="comment" /></button>
       
     );
}
 
export default CommentsBtn;