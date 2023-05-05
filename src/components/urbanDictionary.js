import React, {useState} from "react";


const UrbanDictionary = ({articals, setSearchWord}) => {

    const [search, setSearch] = useState(null)

    const articalNodes = articals.map((article) => {

        return (
          <li className="link" key={article.defid}>
          <h3>Definition:</h3>
          <p>{article.definition}</p>
          <h3>Example: </h3>
          <p>{article.example}</p>
          <a href={article.permalink}>View in urban dictionary</a>
          </li>
        )
      })
  
      const handleSubmit = (e) => {
          e.preventDefault()
          setSearchWord(e.target.search.value)
          setSearch(e.target.search.value)
          e.target.reset()
      }
  

      return ( 
          <div className="g">
          <div className="title-search">
              <h1>Urban Dict</h1>
              <form onSubmit={handleSubmit}>
                  <label id="reddit">Search: </label>
                  <input type="text" name="search" htmlFor="reddit"/>
                  <input type="submit" value="Go"/>
              </form>
              {search ? <h3>Search results for: <i>{search}</i></h3> : null }
          </div>
          <ul className="ul">
            {articals.length ? articalNodes : <h4> No Articals on this search</h4> }
          </ul>
          </div>
       );
  }
export default UrbanDictionary;