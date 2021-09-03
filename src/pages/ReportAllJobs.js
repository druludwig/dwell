import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Axios from "axios";
import '../App.css';
import '../css/ReportFormatting.css';
import moment from 'moment';


function ReportAllJobs() {
  let { id } = useParams();
  const [job, setjob] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await Axios.get("/api/jobs/");
        setjob(response.data);
      } catch (err) { }
    }
    fetchJobs()
  }, [])

  return (
    <div className="report section-to-print">
      <div>
        <h1 className="report-name">📄<br />All Jobs</h1>
        <p className="center">A clearly defined scope of work helps you obtain competitive estimates<br />and helps keep your contractor on track.</p>
      </div>
      {job.map((job, key) => {
        return <>
          <div className="task-data" key={job.id}>
            <h5>{job.name}</h5>
            <p><b>Complete by:</b> {moment(job.date_due).format("MMMM Do YYYY")}</p>
            <p><b>Included:</b> {job.includes}</p>
            <p><b>Not Included:</b> {job.not_included}</p>
            <p><b>Target Cost:</b> ${job.target_cost}<br /></p>
          </div></>
      })}
    </div >
  )


}

export default ReportAllJobs;