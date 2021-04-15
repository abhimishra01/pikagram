import React from 'react';

const Modal = ({selectedImg,setSelectedImg}) =>{

    const closeBackdrop = (evt)=>{
    
        // checking if the clicked is inside the image or outside the image -> we only need to close when outside the image is clicked
        if(evt.target.classList.contains('backdrop')){
        setSelectedImg(null);}
    }

    return (
        <div className='backdrop' onClick={closeBackdrop}>
            <img src={selectedImg} alt="enlarged"/>
        </div>
    )
}


export default Modal;