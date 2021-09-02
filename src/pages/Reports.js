import { Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import '../App.css';
import '../css/Reports.css';
import Axios from "axios";

function ReportPage() {
  return (
    <>
    <div className="report-container">
      <h1>Task Reports</h1>
      <p><em>Tasks are items performed by you, family, and friends.</em></p>
      <Link to="/ReportNext7Days"><button type="button" className="btn btn-info">Next 7 Days</button></Link>
      <br />
      <br />
      <Link to="/ReportNext30Days"><button type="button" className="btn btn-info">Next 30 Days</button></Link>
      <br />
      <br />
      <Link to="/ReportGoodWeather"><button type="button" className="btn btn-info">Good Weather Tasks</button></Link>
      <br />
      <br />
      <Link to="/ReportHelpRequired"><button type="button" className="btn btn-info">Help Required Tasks</button></Link>
    </div>
    <div>
      <h1>Job Reports</h1>
      <p>Jobs are items performed by hired workers</p>
      <p>(list of all jobs with print report button for each)</p>
    </div>    
    </>
  );

}

function NextWeek() {
  console.log('week report here')
  useEffect(() => {
    Axios.get("http://localhost:1337/api/tasks/")
      .then((response) => {
        if (response) {
          
        }
      })
  })


}


function NextMonth() {
  console.log('month report here')
}

function GoodWeather() {
  console.log('sunny day report here')
}

function HelpNeeded() {
  console.log('report of 2+ person tasks here')
}
export default ReportPage;
