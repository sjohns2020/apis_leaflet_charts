import React, {useState, useEffect} from "react";
import Guardian from "../components/guardian";

const GuardianContainer = () => {

    //State
    const [news, setNews] = useState([]);
    const [searchWord, setSearchWord] = useState("Javascript")
  
    //useEffect
    useEffect(() => {
      getNews(searchWord)
    }, [searchWord])
  
    // API fetch
    const getNews = (searchWord) => {
        fetch(`https://content.guardianapis.com/search?q=${searchWord}&format=json&api-key=test`)
        .then(res => res.json())
        .then(result => setNews(result.response.results))
        // If there's a network error (e.g. no internet connection)
        .catch(err => console.error(`Loading error: ${err}`));
      }
  
    if (!news.length) return "Loading..."

    return ( 
        <Guardian news={news} setSearchWord={setSearchWord}/>
     );
}
 
export default GuardianContainer;