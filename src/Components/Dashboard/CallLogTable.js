import React from "react";
import CallIcon from "../../Assets/Images/Dashboard/callRed2.svg";
import callHistory from "../../data/callHistory.json";

export const CallLogTable = () => {
    
  return (
    <div className="card p-3">
      <h6 className="text-start fw_500 fs_23">
        <img src={CallIcon} className="mb-1" height="24" width="24" /> Call Log
        Summary Table
      </h6>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Call Id</th>
              <th>Date</th>
              <th>Time</th>
              <th>Caller Name</th>
              <th>Caller Number</th>
              <th>Type</th>
              <th>Status</th>
              <th>Duration</th>
              <th>Agent Name</th>
            </tr>
          </thead>
          <tbody>
            {callHistory.map((call, index) => (
              <tr key={index}>
                <td>{call.id}</td>
                <td>{call.date}</td>
                <td>{call.time}</td>
                <td>{call.caller}</td>
                <td>{call.phone}</td>
                <td>{call.type}</td>
                <td>{call.status}</td>
                <td>{call.duration}</td>
                <td>{call.agent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
