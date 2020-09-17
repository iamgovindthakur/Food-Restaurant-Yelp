import {useState,useEffect} from 'react';
import yelp from '../api/yelp';

export default () =>{

    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessgae] = useState("");
  
    const SearchApi = async (searchTerm) => {
      try {
        const response = await yelp.get("/search", {
          params: { limit: 50, term: searchTerm, location: "san jose" },
        });
        setResults(response.data.businesses);
      } catch (err) {
        setErrorMessgae("Something Went Wrong");
      }
    };
  
    useEffect(() => {
      SearchApi("pasta");
    }, []);

    return [SearchApi,results,errorMessage];

};