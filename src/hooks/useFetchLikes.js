import { useState, useEffect } from 'react';
import {useLike} from './useLike';

const useFetchLikes = (id) => {
    const likes = uselike(id);
    return {likes};
}
 
export default useFetchLikes;