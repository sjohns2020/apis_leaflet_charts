import React, {useState} from "react";
import { Chart } from "react-google-charts";

const ChartsContainer = ({chartData}) => {

    const [selectedArticle, setSelectedArticle] = useState(null)

    if (!chartData) return "...Loading"
    console.log(chartData)

    // console.log(chartData)
    
    //Cerate data for chats by cleaning Urban Dict Data
    // dataSet = [
    // ['Word', 'UpVotes', 'DownVotes']  added using unshift at the end of cleaning my data. (see line 35)
    // ['Javascript', 29, 4]
    // ['Javascript', 28, 6]
    // ['Javascript', 258, 89]
    // ['Javascript', 35, 100]
    // ['javascript', 70, 14]
    // ['javascript', 82, 46]
    // ['javascript', 14, 9]
    // ['javascript', 29, 58]
    // ['JavaScript', 1, 3]
    // ['javascript', 2, 13]
    //  ]
    const dataSet = chartData.map((data, index) => {
        // this sets our dataSet to be an array with nested arrays, each holding only a word, and two numbers to use for my bar chart.  
        // your data needs to be usefull for whatever chart you are rendering
        // this example shows a bar chart 
        // - the word will be the label for each bar
        // - the two numbers will represent two bars on each label. 
        return [data.word.toLowerCase(), data.thumbs_up, data.thumbs_down]
    })
    dataSet.unshift(["Word", "UpVotes", "DownVotes"])


    // Chart events - read the documentation 
    // https://www.react-google-charts.com/docs/quick-walkthrough#listen-to-chart-events
    const chartEvents = [
        {
          eventName: "ready",
          callback: ({ chartWrapper, google }) => {
            // we need to grab the chart to using the getSelection() function
            const chart = chartWrapper.getChart();
            // we need the data table to use the getValue() function
            const data = chartWrapper.getDataTable();
            google.visualization.events.addListener(chart, "select", function () {
            // getSelection make the bars clickable but only gives back row and column numbers
            const selection = chart.getSelection();
            // console.log("Selected ", data);
            if (selection.length > 0) {
                // getValue returns the actual value attached to each row/column
                let thumbsUp = data.getValue(selection[0].row, 1)
                let thumbsDown = data.getValue(selection[0].row, 2)
                let selectedArticle = chartData.find((data) => data.thumbs_up === thumbsUp && data.thumbs_down === thumbsDown )
                setSelectedArticle(selectedArticle) 
            }
        });
      }    
    }
  ];
      
    // options need to be difined for the chart
    // this handles the title and axis values
    const options = {
    title: "Urban Dictionary posts by Likes",
    chartArea: { width: "50%" },
    hAxis: {
        title: "Number of Votes",
        minValue: 0,
    },
    vAxis: {
        title: "Word",
    },
    };


    return ( 
        <>
        <Chart
            chartType="BarChart"
            className="chart"
            data={dataSet}
            options={options}
            chartEvents={chartEvents}
            />
            
        {/* div that displays if out select a bar in the bar chart */}
        {selectedArticle ?
            <div className="selected-word">
                <span>Word </span>
                <span><strong>{selectedArticle.word.toUpperCase()} {" - -  "}  {selectedArticle.thumbs_up} &#128077;  {selectedArticle.thumbs_down} &#128078; </strong></span>
                <br/>
                <span>Definition  </span>
                <span><strong>{selectedArticle.definition}</strong></span>
                <br/>
                <span>Example  </span>
                <span><strong>{selectedArticle.example}</strong></span>
            </div>
        : null}
        </>
     );
}
 
export default ChartsContainer;