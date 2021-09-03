import { Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import '../App.css';
import '../css/ReportIndex.css';
import Axios from "axios";

function ReportPage() {
  return (
    <>
      <div className="report-container">
        <h1>Global Reports</h1>
        <p><em>Includes tasks and jobs.</em></p>
        <Link to="/ReportHighPriority"><button type="button" className="btn btn-info">Show ALL High Priority Items</button></Link>

      </div>
      <div className="report-container">
        <h1>Task Reports</h1>
        <p><em>Tasks are items performed by you, family, and friends.</em></p>
        <Link to="/ReportAllTasks"><button type="button" className="btn btn-info">Show ALL Tasks</button></Link>
        <br />
        <br />
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
      <div className="report-container">
        <h1>Job Reports</h1>
        <p>Jobs are items performed by hired workers.</p>
        <Link to="/ReportAllJobs"><button type="button" className="btn btn-info">Show ALL Jobs</button></Link>

      </div>
    </>
  );

}




export default ReportPage;
