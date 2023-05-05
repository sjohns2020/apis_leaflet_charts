import React, {useState, useEffect} from "react"
import UrbanDictionary from "../components/urbanDictionary";

const UrbanDictionaryContainer = ({handleChartData}) => {

    //State
    const [articals, setArticals] = useState([]);
    const [searchWord, setSearchWord] = useState("Javascript")
    
    //useEffect
    useEffect(() => {
        getArticals(searchWord)
    }, [searchWord])
    
    // API fetch
    const getArticals = (searchWord) => {
        fetch(`https://api.urbandictionary.com/v0/define?term=${searchWord}`)
        .then(res => res.json())
        .then(result => {
            setArticals(result.list)
            // when the data is returned I also want to updated this in the parent app.js so it can hand it down to the chart container.
            handleChartData(result.list)})
        // If there's a network error (e.g. no internet connection)
        .catch(err => console.error(`Loading error: ${err}`));
        }
    
    if (!articals.length) return "Loading..."

    return ( 
        <UrbanDictionary articals={articals} setSearchWord={setSearchWord}/>
     );
}
 
export default UrbanDictionaryContainer;