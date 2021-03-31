import React from "react";
import LineGraph from "../LineGraph/LineGraph";
import "./NewsFeed.css";

function NewsFeed() {
  return (
    <div className="newsFeed">
      <div className="newsFeed__container">
        <div className="newsFeed__chartSection">
          <div className="chart__PortfolioValue">
            <h1>$114,858</h1>
            <p>+44.53 (+0.04%) Today</p>
          </div>
          <div className="newsFeed__chart">
            <LineGraph />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsFeed;
