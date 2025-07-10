import React from 'react';
import { FaEyeSlash, FaSortAmountDown, FaFilter, FaThLarge, FaDownload, FaUpload, FaShareAlt, FaPlus } from 'react-icons/fa';
import './index.css';

const records = [
  {
    id: 1,
    jobRequest: "Launch social media campaign",
    submitted: "15-11-2024",
    status: "In-process",
    submitter: "Aisha Patel",
    assigned: "Sophie Choudhury",
    priority: "Medium",
    dueDate: "20-11-2024",
    estValue: "₹6,200,000",
  },
  {
    id: 2,
    jobRequest: "Update press kit",
    submitted: "28-10-2024",
    status: "Need to start",
    submitter: "Irfan Khan",
    assigned: "Tejas Pandey",
    priority: "High",
    dueDate: "30-10-2024",
    estValue: "₹3,500,000",
  },
  {
    id: 3,
    jobRequest: "Finalize user testing feedback",
    submitted: "05-12-2024",
    status: "In-process",
    submitter: "Mark Johnson",
    assigned: "Rachel Lee",
    priority: "Medium",
    dueDate: "10-12-2024",
    estValue: "₹4,750,000",
  },
  {
    id: 4,
    jobRequest: "Design new features",
    submitted: "10-01-2025",
    status: "Complete",
    submitter: "Emily Green",
    assigned: "Tom Wright",
    priority: "Low",
    dueDate: "15-01-2025",
    estValue: "₹5,900,000",
  },
  {
    id: 5,
    jobRequest: "Prepare financial report Q4",
    submitted: "25-01-2025",
    status: "Blocked",
    submitter: "Jessica Brown",
    assigned: "Kevin Smith",
    priority: "Low",
    dueDate: "30-01-2025",
    estValue: "₹2,800,000",
  },
];

function App() {
  return (
    <div className="container">
      <h1>Spreadsheet View</h1>
      <div className="tool">
        <div className="tool-left">
          <button><FaEyeSlash /> Hide Fields</button>
          <button><FaSortAmountDown /> Sort</button>
          <button><FaFilter /> Filter</button>
          <button><FaThLarge /> Cell View</button>
        </div>
        <div className="tool-right">
          <button><FaDownload /> Import</button>
          <button><FaUpload /> Export</button>
          <button><FaShareAlt /> Share</button>
          <button className="action"><FaPlus /> New Action</button>
        </div>
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Job Request</th>
              <th>Submitted</th>
              <th>Status</th>
              <th>Submitter</th>
              <th>Assigned</th>
              <th>Priority</th>
              <th>Due Date</th>
              <th>Est. Value</th>
            </tr>
          </thead>
          <tbody>
            {records.map((v) => {
              const s = `status-badge status-${v.status.split(' ').join('-')}`;
              const p = `first-${v.first}`;
              return (
                <tr key={v.id}>
                  <td>{v.id}</td>
                  <td>{v.jobRequest}</td>
                  <td>{v.submitted}</td>
                  <td><span className={s}>{v.status}</span></td>
                  <td>{v.submitter}</td>
                  <td>{v.assigned}</td>
                  <td className={p}>{v.first}</td>
                  <td>{v.dueDate}</td>
                  <td>{v.estValue}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="footer">
        <div className="active">All Orders</div>
        <div>Pending</div>
        <div>Reviewed</div>
        <div>Arrived</div>
        <div>+</div>
      </div>
    </div>
  );
}

export default App;
