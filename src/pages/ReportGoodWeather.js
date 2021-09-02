import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Axios from "axios";
import '../App.css';
import '../css/ReportFormatting.css';
import printJS from 'print-js';


function ReportMonth() {
  let { id } = useParams();
  const [task, setTask] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {

      try {
        const response = await Axios.get("http://localhost:1337/api/tasks/date-report/weather");
        setTask(response.data);
      } catch (err) {

      }
    }
    fetchTasks()
  }, [])

  const WeatherToggle = () => {
     if (task.req_good_weather = 1) {
      return "Yes"
    } else {
      return "No"
    }
  }
  
  const DateDisplay = () => {
    let dueDate = task.date_due
    if (dueDate) {
      return dueDate
    } else {
      return "No"
    }
 }

  return (
    <div className="report">
      <div>
        <h1 className="report-name">☀️<br />Tasks That Require Good Weather</h1>
      </div>
      {task.map((task, key) => {
        return <>
          <div className="task-data" id="task-data" key={task.id}>
            <h5>{task.name}</h5>
            <p><b>Complete by:</b> {DateDisplay()}</p>
            <p>{task.description}</p>
            <p>
              <b>Time Required:</b> {task.time_req} minutes<br />
              <b>Good Weather Required:</b> {WeatherToggle()}<br />
              <b>Number of People Required:</b> {task.num_people_req}<br />
              <b>Items Required:</b> {task.req_items}<br />
              <b>Cost:</b> ${task.cost}<br />
            </p>
          </div></>
      })}
    </div >
  )


}

export default ReportMonth;