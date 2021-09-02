import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import '../App.css';
import '../css/AccountPage.css';
import Axios from "axios";

function MyAccount() {
  let { id } = useParams();
  const [task, setTask] = useState([])

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await Axios.get("http://localhost:1337/api/tasks");
        setTask(response.data);
      } catch (err) {

      }
    }
    fetchTasks()
  }, [])

  return (
    <div className="task-container">
      {task.map((task, key) => {
        return <div className="card" key={task.id}>

          <img src="./images/task-icon.png" className="card-img-top" alt="Task Icon" />

          <div className="card-body">
            <h5 className="card-title right">{task.name}</h5>
            <p className="card-text right">Due: {task.date_due}</p>
            <p className="right"><a href="#" className="btn btn-primary">View Details</a></p>
          </div>
        </div>
      })}
    </div>
  )


}

export default MyAccount;
