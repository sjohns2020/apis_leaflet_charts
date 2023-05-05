import React, {useState} from "react";

const Reddit = ({reddits, setSearchWord}) => {

    const [search, setSearch] = useState(null)

    // redditNodes maps over array of reddits and returns an li for each element
    const redditNodes = reddits.map((reddit) => {
      // This if check needed to filter out data that did not show any test in its selftext property. 
      // Not all elements had this paragraph and wanted rid of these.
      if (reddit.data.selftext)
      return (
        <li className="link" key={reddit.data.url}>
            <h3>{reddit.data.title}</h3>
            <p>{reddit.data.selftext}</p>
            <a href={reddit.data.url}>View Thread</a>
        </li>
      )
    })

    // Form onSubmit handler function
    const handleSubmit = (e) => {
        e.preventDefault()
        setSearchWord(e.target.search.value)
        setSearch(e.target.search.value)
        e.target.reset()
    }

    return ( 
        <div className="g">
        <div className="title-search">
            <h1>Reddit</h1>
            <form onSubmit={handleSubmit}>
                <label id="reddit">Search: </label>
                <input type="text" name="search" htmlFor="reddit"/>
                <input type="submit" value="Go"/>
            </form>
            {/* if there is a search word entered then render an h3 */}
            {search ? <h3>Search results for: <i>{search}</i></h3> : null }
        </div>

        <ul className="ul">
        {/* If readits array has a length greater than 0 then it will be truthy and will return redditNodes */}
        {reddits.length ? redditNodes : <h4> No threads on this search</h4> }
        </ul>

        </div>
     );
}
 
export default Reddit;