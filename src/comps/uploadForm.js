import React, { useState } from 'react';

const UploadForm =()=>{

// store the file in local piece of state
// to set track on it and keep updating acc
const [file, setFile] = useState(null);

// creating an array of allowed file types to be uploaded 
const allowedImageTypes = ['image/png', 'image/jpeg'];

// creating an error state to store our error
const [error, setError] = useState(null);


    const changeHandler = (evt)=>{
        // grabbing the file uploading during the event 
        let selected = evt.target.files[0]; // getting first file from files, as some uploads might allow us to select multiple files
        // console.log(selected); 
        // contains all info / attributes about the file


        // truthy when selected will actually have a file and matches into one of allowed fiel types
        if (selected && allowedImageTypes.includes(selected.type)){
            setFile(selected);
            // setting error to empty string 
            setError("");
        } 
        else{ 
            // giving error update if invalid file type
            setFile(null);
            setError("Please select an image file (png or jpeg)!")
        }
    }
    return (
        <form>
            <input type="file"
            onChange={changeHandler}
            />
            <div className='output'>
                {error && <div className='error'>{error}</div>}
            </div>
        </form>
    )
}


export default UploadForm;