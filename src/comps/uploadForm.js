import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
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
            <label>
            <input type="file"
            onChange={changeHandler}
            />
            <span>+</span>
            </label>
            <div className='output'>
              {/* if error comes then only the below element is shown */}
                {error && <div className='error'>{error}</div>}

                {/* output of file type shown after user uploads the valid file */}
                {/* if this is true && <then show this> */}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    )
}


export default UploadForm;