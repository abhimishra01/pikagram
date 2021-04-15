import React,{useState} from 'react';

const Modal = () =>{
    const [selectedImg, setSelectedImg] = useState(null);
    return (
        <div className='backdrop'>
            <img src="" alt="enlarged"/>
        </div>
    )
}


export default Modal;