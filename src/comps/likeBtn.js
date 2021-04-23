import React from 'react';
import {useState} from 'react';
import Emoji from 'a11y-react-emoji'

const LikeButton = () => {
    const [likeCounter, setlikeCounter] = useState(0);
    
    const likeHandleEvent = ()=>{
            setlikeCounter(likeCounter++);
    }

    return ( 
        <div className="like-btn">
            <button
            onClick={likeHandleEvent}
            > <Emoji symbol="💕" label="love" />
            {likeCounter}
            </button>
        </div>
     );
}
 
export default LikeButton;