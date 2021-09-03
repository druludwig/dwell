import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import '../App.css';
import '../css/AccountPage.css';
import Axios from "axios";
import moment from 'moment';

function MyAccount() {
  let { id } = useParams();
  const [task, setTask] = useState([])
  const [job, setJob] = useState([])

  // Fetch Tasks
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await Axios.get("/api/tasks");
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
        const response = await Axios.get("/api/jobs");
        setJob(response.data);
      } catch (err) {

      }
    }
    fetchJobs()
  }, [])


  return (
    <>
      <div className="task-container">
        <h1>Tasks</h1>
        {task.map((task, key) => {
          return <div className="card" key={task.id}>

            {/* <img src="./images/task-icon.png" className="card-img-top" alt="Task Icon" /> */}

            <div className="card-body">
              <h5 className="card-title right">{task.name}</h5>
              <p className="card-text right"><b>Due by:</b> {moment(job.date_due).format("MMMM Do YYYY")}</p>
              {/* <p className="right"><a href="#" className="btn btn-primary">View Details</a></p> */}
            </div>
          </div>
        })}
      </div>
      <hr />
      <div className="task-container">
        <h1>Jobs</h1>
        {job.map((job, key) => {
          return <div className="card" key={task.id}>

            {/* <img src="./images/task-icon.png" className="card-img-top" alt="Task Icon" /> */}

            <div className="card-body">
              <h5 className="card-title right">{job.name}</h5>
              <p className="card-text right"><b>Due by:</b> {moment(job.date_due).format("MMMM Do YYYY")}</p>
              {/* <p className="right"><a href="#" className="btn btn-primary">View Details</a></p> */}
            </div>
          </div>
        })}
      </div>
    </>
  )


}

export default MyAccount;
