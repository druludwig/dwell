import React, { useState, useEffect } from 'react';
import '../App.css';
import '../css/EntryForms.css';
import Axios from "axios";

function NewJobForm() {


  const [name, setName] = useState('');
  const [date_due, setDateDue] = useState('')
  const [priority_high, setPriorityHigh] = useState('false')
  const [includes, setIncludes] = useState('')
  const [not_included, setNotIncluded] = useState('')
  const [target_cost, setTargetCost] = useState('')


  const saveNewJob = () => {
    Axios.post("/api/jobs", {
      name: name,
      date_due: date_due,
      priority_high: priority_high,
      includes: includes,
      not_included: not_included,
      target_cost: target_cost,

    }).then(() => {
      window.location.assign('/account')
    })
  }


  return (
    <div>
      <h1>New Job</h1>
      <p>Jobs are tasks that you hire someone to complete.</p>
      <div class="add-task-form">
        {/* Job Name Entry*/}
        <label className="label">Job Name</label>
        <input type="text" name="name" onChange={(e) => {
          setName(e.target.value)
        }}
        />
        {/* Date Due Entry */}
        <label className="label">Due Date</label>
        <input type="date" name="date_due" onChange={(e) => {
          setDateDue(e.target.value)
        }}
        />
        {/* Target Cost Entry */}
        <label className="label">Estimated Cost</label>
        <input type="text" name="target_cost" onChange={(e) => {
          setTargetCost(e.target.value)
        }}
        />
        {/* What's Included Entry */}
        <label className="label">Included in Service</label>
        <textarea type="text" name="includes" onChange={(e) => {
          setIncludes(e.target.value)
        }}
        />
        {/* What's NOT Included Entry */}
        <label className="label">NOT Included in Service</label>
        <textarea type="text" name="includes" onChange={(e) => {
          setNotIncluded(e.target.value)
        }}
        />
        {/* High Priority Checkbox */}
        <label className="label">High Priority?</label>
        <select type="checkbox" name="priority_high" onChange={(e) => {
          setPriorityHigh(true)
        }}>
          <option>Yes</option>
          <option>No</option>
        </select>
        
        <button onClick={saveNewJob}>Submit</button>

      </div>

    </div>
  );

}

export default NewJobForm;
