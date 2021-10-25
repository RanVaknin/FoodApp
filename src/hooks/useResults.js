import { useEffect, useState } from "react";
import yelp from "../api/yelp";

const cache = new Map();

export default ()=>{
    const [results,setResults] = useState([]);

    const getResult = async (term) =>{
        if(cache.has(term)){
            console.log('pulling from cache')
            setResults(cache.get(term));
        } else{
            console.log('pulling from API')
            try {
                const response = await yelp.get(`/search?term=${term}&location=seattle&limit=50`);
                setResults(response.data.businesses)
                
                if(cache.size <= 10){
                    cache.set(term,response.data.businesses);
                } else {
                    cache.clear();
                    cache.set(term,response.data.businesses);
                }
            } catch (error) {
                console.log(error);
            }
        }
        console.log(`size: ${cache.size}`,'\n', term)
    }  
    
    useEffect(()=>{
        getResult('local')
    },[])

    return [results, getResult];

}