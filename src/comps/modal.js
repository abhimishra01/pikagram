import React from 'react';

const Modal = ({selectedImg,setSelectedImg}) =>{

    const closeBackdrop = (evt)=>{
        setSelectedImg(null);
    }

    return (
        <div className='backdrop' onClick={closeBackdrop}>
            <img src={selectedImg} alt="enlarged"/>
        </div>
    )
}


export default Modal;