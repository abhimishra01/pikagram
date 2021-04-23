import { useState, useEffect } from 'react';
import { fireStore} from "../firebaseConfig";


const useLike = (img_id) => {
    const [likes, setLikes] = useState('');   
    useEffect(() => {
    const databaseRef = fireStore.collection('images');
    databaseRef.get(img_id).then((response) =>console.log(response))
    .then(snapshot =>setLikes(snapshot.data()));
    },
    [img_id])
    return {likes}
}
 
export default useLike;