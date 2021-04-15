import {useState, useEffect} from 'react';
import {fireStore} from '../firebaseConfig';

const useFirestore = (collectionName)=> {
    const [doc, setDoc] = useState([]);   
 
    
    useEffect(()=>{
        
        // detailed explaination in useStorage.js available
        const unSubscribe = fireStore.collection(collectionName)
        // ordering our data  in date order in descending order
        .orderBy('createdAt', 'desc')
        .onSnapshot((snapshot)=>{
            let documents = [];

            snapshot.forEach(doc=>{
                document.push({...doc.data(),id:doc.id});
            });
            setDoc(documents);           
        })
        return ()=> unSubscribe(); // cleanup function
    },[collectionName]);
    return {docs};
}