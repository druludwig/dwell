// Import necessities
import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from "axios";
import { Route, Links } from 'react-router-dom';

// Import pages
import Home from "./pages/Home";
import AccountPage from "./pages/AccountPage";
import NewTask from "./pages/NewTask";
import NewJob from "./pages/NewJob";
import Reports from "./pages/Reports";
import Navigation from './components/Navigation';
import ReportNext7Days from './pages/ReportNext7Days';
import ReportNext30Days from './pages/ReportNext30Days';
import ReportGoodWeather from './pages/ReportGoodWeather';
import ReportHelpRequired from './pages/ReportHelpRequired';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route exact path="/account" component={AccountPage} />
      <Route exact path="/newtask" component={NewTask} />
      <Route exact path="/newjob" component={NewJob} />
      <Route exact path="/reports" component={Reports} />
      <Route exact path="/ReportNext7Days" component={ReportNext7Days} />
      <Route exact path="/ReportNext30Days" component={ReportNext30Days} />
      <Route exact path="/ReportGoodWeather" component={ReportGoodWeather} />
      <Route exact path="/ReportHelpRequired" component={ReportHelpRequired} />
    </div>
  )
};

export default App;
