import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Axios from "axios";
import '../App.css';
import '../css/ReportFormatting.css';
import moment from 'moment';


function ReportHighPriority() {
  let { id } = useParams();
  const [task, setTask] = useState([]);
  const [job, setJob] = useState([])

  // Fetch Tasks
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await Axios.get("/api/tasks/priority/high");
        setTask(response.data);
      } catch (err) {

      }
    }
    fetchTasks()
  }, [])
  // Fetch Jobs
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await Axios.get("/api/jobs/priority/high");
        setJob(response.data);
      } catch (err) {

      }
    }
    fetchJobs()
  }, [])

  
  return (
    <div className="report section-to-print">
      <div>
        <h1 className="report-name">🚨<br />High Priority Items</h1>
      </div>
      {task.map((task, key) => {
        return <>
          <div className="task-data" key={task.id}>
            <h5><b>TASK: </b>{task.name}</h5>
            <p><b>Complete by: </b> {moment(task.date_due).format("MMMM Do YYYY")}</p>
            <p>{task.description}</p>
            <p>
              <b>Time Required:</b> {task.time_req} minutes<br />
              <b>Good Weather Required:</b>Yes<br />
              <b>Number of People Required:</b> {task.num_people_req}<br />
              <b>Items Required:</b> {task.req_items}<br />
              <b>Cost:</b> ${task.cost}<br />
            </p>
          </div></>
      })}
       {job.map((job, key) => {
        return <>
          <div className="task-data"  key={job.id}>
            <h5><b>JOB: </b>{job.name}</h5>
            <p><b>Complete by: </b> {moment(job.date_due).format("MMMM Do YYYY")}</p>
            <p><b>Included:</b> {job.includes}</p>
            <p><b>Not Included:</b> {job.not_included}</p>
            <p><b>Target Cost:</b> ${job.target_cost}<br /></p>
          </div></>
      })}
    </div >

  )


}

export default ReportHighPriority;