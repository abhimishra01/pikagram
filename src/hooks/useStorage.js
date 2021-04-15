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




}



