// React Hooks :- a way to create small reusable components in order to use them wherever needed
import { useState, useEffect } from 'react';
import { projectStorage } from "../firebaseConfig";

const useStorage = (file)=> {
     // file param comes from our file state component

    //  creating 3 pieces of states with diff purposes
    // Progress
    const [progress, setProgress] = useState(0);
    
    // error
    const [error, setError] = useState(null);
    
    // image url after its uploaded and use URL to show in our page
    const [url, setURL] = useState(null);


    /**
     * We will be using "projectStorage" sdk to upload the file incoming from user to storage.
     * We will use progress and url for the maganging status of image upload
     * We will use url to manage our database into our react app and show on gallery
     * All these need to be done in continuity as file value changes overtime whenver user uploads the data
     * So we will enclose all this login inside useEffect() function
     * useEffect(()=>{
     * do something (logic function)
     * },[dependency])
     * 
     * useEffect() will be fired everytime the dependency changes
     */

    useEffect(() => {
    
        //    references
        const storageRef = projectStorage.ref(file.name); // create a reference to the file inside default firebase storage
        
        // putting the file using that reference
        /**
         * storage.Ref.put(file) is a method to upload file -> asynchronous function
         * attaching a listener to the same to fire whenever the certain event happens
         * storage.Ref.put(file).on('state_changed') => progress changes, upload complete are diff states states
         * we will fire another function in second argument of listener after state changes
         */
        storageRef.put(file).on('state_changed', (snapshot) => {
            // snapshot is snapshot of time of that upload at that moment of time
            // state_change event happens more than 2 3 times during the whole cycle of upload so the second argument function will run accordingly

            // now we will figure out progress of  the upload 
            // snap.bytesTransferred => property of snapshot tells us no of bytes transferred at that very moment
            // snap.totalBytes => property to tell total size of file  
            let percentage = (snapshot.bytesTransferred / snapshot.TotalBytes) * 100;
            // upload percentage
            setProgress(percentage);

            
        }, (err)=>{
            setError(err);
        }// third argument in this is also a function if error comes
        ,async () => {
            // fourth argument , a function , fires when upload is completed
            const url = await storageRef.getDownloadURL();

            setURL(url); 
            // both url vars are inside diff scopes in our code so none does overrides anyone
        }
        ) 
        
    }, [file]);

    return {progress, url, error};

    // if we set this hook inside any component, these are the values which we are going to access.

}

export default useStorage;



