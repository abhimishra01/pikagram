import React from 'react';
import useFirestore from '../hooks/useFirestore';
import {motion} from 'framer-motion';

const ImageGrid = ({setSelectedImg}) =>{

    const { doc } = useFirestore('images');
    // console.log(doc);
    return (
        <div className='img-grid'>
           {doc && doc.map((docs) =>   
               (<motion.div
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
           ))}

        </div>
    );
}

export default ImageGrid;