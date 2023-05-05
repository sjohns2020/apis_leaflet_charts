import React, {useState} from "react";

const Guardian = ({news, setSearchWord}) => {

    const [search, setSearch] = useState(null)



    const newsNodes = news.map((article) => {
        // newDate now contains a nicer string for the date in a format that I wanted.
        // "2022-08-11T18:11:39Z"
        // fixedDate splits this string at the T, returning an Array with ["2022-08-11", "18:11:39Z"] and return the first element -> "2022-08-11"
        const fixedDate = article.webPublicationDate.split("T")[0]
        // splitDate splits this string at the -, returning an Array with ["2022", "08", "11"]
        const splitdate = fixedDate.split("-")
        // newDate turns the array of strings back in to a single string separated with / -> 11/08/2022
        const newDate = `${splitdate[2]}/${splitdate[1]}/${splitdate[0]}`
        return (
          <li className="link" key={article.id}>
          <h3>{article.webTitle}</h3>
          <p>{newDate}</p>
          <a href={article.webUrl}>View Story</a>
          </li>
        )
      })
  
      const handleSubmit = (e) => {
          e.preventDefault()
          setSearchWord(e.target.search.value)
          setSearch(e.target.search.value)
          e.target.reset()
      }
  
    //   console.log(news)
      return ( 
          <div className="g">
          <div className="title-search">
              <h1>Guardian</h1>
              <form onSubmit={handleSubmit}>
                  <label id="reddit">Search: </label>
                  <input type="text" name="search" htmlFor="reddit"/>
                  <input type="submit" value="Go"/>
              </form>
              {search ? <h3>Search results for: <i>{search}</i></h3> : null }
          </div>
          <ul className="ul">
            {news.length ? newsNodes : <h4> No news on this search</h4> }
          </ul>
          </div>
       );
  }
   
 
export default Guardian;