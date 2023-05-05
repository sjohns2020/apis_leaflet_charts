
import React, { useState } from 'react';
import './App.css';
import RedditContainer from './containers/redditContainer';
import GuardianContainer from './containers/guardianContainer';
import Map from './containers/map';
import UrbanDictionaryContainer from './containers/urbanDictionaryContainer';
import ChartsContainer from './containers/chartContainer';

function App() {

  // State holding the urban dictionary data pulled in from the api
  const [chartData, setChartData] = useState(null)

  // Call back pulling in data from the Urban Dictionary Container
  // Then setting the chartData state with the UD data.
  const handleChartData = (data) => {
    setChartData(data)
  }
  

  return (
    <div className="outer">
      <div className="apis">
        <div className="heading">
          <h1>API POLICE</h1>
        </div>

        {/* APIs Containers */}
        <div className="containers">
          <RedditContainer className="r" />
          <GuardianContainer className="g"  />
          {/* Passing handleChartData function to the Urban Dictionary container 
          to allow this current app.js component access to the UD data 
          so we can pass it down to the Chart component as a prop  */}
          <UrbanDictionaryContainer className="u" handleChartData={handleChartData} />
        </div>

      </div>

      <div className="grid-row2">

      {/* Charts Container */}
        <div className="google-charts">
        <h1 className="center">Google Charts</h1>
          <div className="install">
            <p>Installation:</p>
            <a href="https://www.react-google-charts.com/">https://www.react-google-charts.com/</a>
            <p>~ npm install --save react-google-charts</p>
          </div>
          {/* Passing down Chart data as a prop so charts can use the Urban Dicitonary data */}
          <ChartsContainer chartData={chartData} />
        </div>

      {/* Map Container */}
        <div className="leaflet">
          <h1 className="center">Leaflet Maps</h1>
          <div className="install">
            <p>Installation:</p>
            <a href="https://react-leaflet.js.org/">React Leaflet Docs</a>
            <p>~ npm install react react-dom leaflet</p>
            <p>~ npm install react-leaflet</p>
            <p>{" IN MAP COMPONENT: import { MapContainer, TileLayer, useMap } from 'react-leaflet'" }</p>
            <a href="https://leafletjs.com/examples/quick-start/">Leaflet Quick Start Docs</a>
            <p>in HTML header - pulic/index.html: </p>
            <p> CSS file:  {`  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
            integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
            crossorigin=""/>`}</p>
            <p>JS file goes below CSS file: {`  <script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"
            integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM="
            crossorigin=""></script>`}</p>
          </div>
          <Map /> 
        </div>

      </div>
  
      
    </div>
  );
}

export default App;
