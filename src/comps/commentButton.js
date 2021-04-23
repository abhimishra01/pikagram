import React from 'react';
import Emoji from 'a11y-react-emoji';

const CommentsBtn = ({id}) => {
   
    return ( 
            <button
            className="like-btn"
            onClick={handleClickEvent}
            > <Emoji symbol="💭" label="comment" />
           {likes}</button>
       
     );
}
 
export default CommentsBtn;