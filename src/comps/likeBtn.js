import React from 'react';
import {useState} from 'react';
import Emoji from 'a11y-react-emoji';
import useLike from '../hooks/useLike';

const LikeButton = (id) => {
    const {like} = useLike(id);
    const [likes, setLikes] = useState(like)
    const likeHandleEvent = ()=>{
        setLikes(likes++);
    }
    return ( 
        <div className="like-btn">
            <button
            onClick={likeHandleEvent}
            > <Emoji symbol="💕" label="love" />
            {like}
            </button>
        </div>
     );
}
 
export default LikeButton;