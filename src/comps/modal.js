import React from 'react';

const Modal = ({selectedImg}) =>{
   return (
        <div className='backdrop'>
            <img src={selectedImg} alt="enlarged"/>
        </div>
    )
}


export default Modal;