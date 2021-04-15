import React from 'react';
import useFirestore from '../hooks/useFirestore';


const ImageGrid = ({setSelectedImg}) =>{

    const { doc } = useFirestore('images');
    // console.log(doc);
    return (
        <div className='img-grid'>
           {doc && doc.map((docs) =>   
               (<div
                onClick={() =>setSelectedImg(docs.url)}
                 className='image-wrap' 
               key={docs.id}>
                   <img class='img' src={docs.url} alt='uploaded pic'></img>
               </div>
           ))}

        </div>
    );
}

export default ImageGrid;