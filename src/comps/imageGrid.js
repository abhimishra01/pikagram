import React from 'react';
import useFirestore from '../hooks/useFirestore';
import LikeButton from './likeBtn';
import DeleteBtn from './deleteButton';
import {motion} from 'framer-motion';


const ImageGrid = ({setSelectedImg}) =>{
    
    // const [likes, setLikes] = useState(0);
    // const handleLikeEvt = (id) =>{
    
    //      }
        const { doc } = useFirestore('images');
        // console.log(doc);
        return (
            <div className='img-grid'>
           {doc && doc.map((docs) =>   
               (<div className="imgCont">
                   <motion.div
            //    this attribute works whenever the images are shifted when new pic gets uploaded
            layout
            // hover effect on image    
            whileHover={{opacity:1}}
            onClick={() =>setSelectedImg(docs.url)}
            className='image-wrap' 
            key={docs.id}>
                   <motion.img class='img' src={docs.url} alt='uploaded pic'
                   initial={{opacity:0}}
                   animate={{opacity:1}}
                   transitio={{delay:1}}
                   />
               </motion.div>
           <div className="btns">
                 <LikeButton
                 id={docs.id}
                 likes={docs.likes}
                 />
                 <DeleteBtn
                 id={docs.id}
                 />
             </div>
               </div>
           ))}
              
        </div>
    );
}

export default ImageGrid;