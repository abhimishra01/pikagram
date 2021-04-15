import {useState, useEffect} from 'react';
import {fireStore} from '../firebaseConfig';

const useFirestore = (collectionName)=> {
    const [doc, setDoc] = useState([]);   
    
}