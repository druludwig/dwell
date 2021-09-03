import React, { useState, useEffect } from 'react';
import '../App.css';
import '../css/EntryForms.css';
import Axios from "axios";

function NewTaskForm() {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('')
  const [date_due, setDateDue] = useState('')
  const [time_req, setTimeRequired] = useState('')
  const [num_people_req, setPeopleRequired] = useState('')
  const [cost, setCost] = useState('')
  const [req_items, setItemsRequired] = useState('')
  const [priority_high, setPriorityHigh] = useState('false')
  const [req_good_weather, setGoodWeather] = useState('false')

  const saveNewTask = () => {
    Axios.post("/api/tasks", {
      name: name,
      description: description,
      date_due: date_due,
      time_req: time_req,
      num_people_req: num_people_req,
      cost: cost,
      req_items: req_items,
      priority_high: priority_high,
      req_good_weather: req_good_weather,
    }).then(() => {
      window.location.assign('/account')
    })
  }

  return (
    <div className="App">
      {/* Instructions - MAKE THIS COLLAPSIBLE SOON*/}
      <div className="instructions-list">
      <ul>
        <li>Tasks are items performed by you, family, and friends.</li>
        <li>Don't spare the details! This entry is used to build on-screen reports and printed material.</li>
      </ul>
      </div>

      <div class="add-task-form">
        {/* Task Name Entry*/}
        <label className="label">Task Name</label>
        <input type="text" name="name" onChange={(e) => {
          setName(e.target.value)
        }}
        />
        {/* Description Entry */}
        <label className="label">Description</label>
        <textarea type="text" name="description" onChange={(e) => {
          setDescription(e.target.value)
        }}
        />
        {/* Date Due Entry */}
        <label className="label">Due Date</label>
        <input type="date" name="date_due" onChange={(e) => {
          setDateDue(e.target.value)
        }}
        />
        {/* Time Required Entry */}
        <label className="label">Number of minutes to complete</label>
        <input type="text" name="time_req" onChange={(e) => {
          setTimeRequired(e.target.value)
        }}
        />
        {/* Number of People Required Entry */}
        <label className="label">Number of people required</label>
        <input type="text" name="num_people_req" onChange={(e) => {
          setPeopleRequired(e.target.value)
        }}
        />
        {/* Cost Entry */}
        <label className="label">Estimated Cost</label>
        <input type="text" name="cost" onChange={(e) => {
          setCost(e.target.value)
        }}
        />
        {/* Required Items Entry */}
        <label className="label">List items and equipment required</label>
        <input type="text" name="req_items" onChange={(e) => {
          setItemsRequired(e.target.value)
        }}
        />
        {/* High Priority Checkbox */}
        <label className="label">High Priority?</label>
        <input type="checkbox" name="priority_high" onChange={(e) => {
          setPriorityHigh(true)
        }}
        />
        {/* Good Weather Checkbox */}
        <label className="label">Good Weather Required?</label>
        <select type="checkbox" name="req_good_weather" onChange={(e) => {
          setGoodWeather(true)
        }}> 
        <option>Yes</option>
        <option>No</option>
        </select>
        <p></p>
        <button onClick={saveNewTask}>Submit</button>

      </div>
    </div>
  );
}

export default NewTaskForm;
