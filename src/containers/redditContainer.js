import React, {useState, useEffect} from "react";
import Reddit from "../components/reddit";

const RedditContainer = () => {

    // State
    const [reddits, setReddits] = useState([]);
    const [searchWord, setSearchWord] = useState("Javascript")
  
    // Api fetch is wrapped in a useEffect
    // useEffect will update every time the searchWord state is updated 
    // initially searchWord is set to "Javascript" on line 8.
    useEffect(() => {
      getReddits(searchWord)
    }, [searchWord])
  
    // API fetch
    const getReddits = (searchWord) => {
        fetch(`https://www.reddit.com/r/${searchWord}.json`)
        .then(res => res.json())
        .then(result => setReddits(result.data.children))
        // If there's a network error (e.g. no internet connection)
        .catch(err => console.error(`Loading songs error: ${err}`));
      }
  
    if (!reddits.length) return "Loading..."

    return ( 
        <Reddit reddits={reddits} setSearchWord={setSearchWord} />
     );
}
 
export default RedditContainer;