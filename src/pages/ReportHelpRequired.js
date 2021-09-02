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
        const response = await Axios.get("http://localhost:1337/api/tasks/date-report/helpneeded");
        setTask(response.data);
      } catch (err) {

      }
    }
    fetchTasks()
  }, [])

  return (
    <div className="report">
      <div>
        <button type="button" className="btn btn-info" onClick={printJS('task-data', 'html')}>
          Print Report
        </button>
        <h1>Due Next 30 Days</h1>
      </div>
      {task.map((task, key) => {
        return <>
          <div className="task-data" id="task-data" key={task.id}>
            <h5>{task.name}</h5>
            <p><b>Complete by:</b> {task.date_due}</p>
            <p>{task.description}</p>
            <p>
              <b>Time Required:</b> {task.time_req} minutes<br />
              <b>Good Weather Required:</b> {task.req_good_weather}<br />
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