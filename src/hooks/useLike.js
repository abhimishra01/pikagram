import { useState, useEffect } from 'react';
import { fireStore, timestamp } from "../firebaseConfig";


const useLike = (img_id) => {
    const [likes, setLikes] = useState('');   
    useEffect(() => {
    const databaseRef = fireStore.collection("images");
    databaseRef.collection('images').doc(img_id).get("likes")
    .then(snapshot =>setLikes(snapshot.data()));
    },
    [img_id])
    return {likes}
}
 
export default useLike;