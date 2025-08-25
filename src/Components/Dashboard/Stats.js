import React from "react";
import Stats0 from "../../Assets/Images/Dashboard/callGreen.svg";
import Stats1 from "../../Assets/Images/Dashboard/callBlue.svg";
import Stats2 from "../../Assets/Images/Dashboard/callRed.svg";
import Stats3 from "../../Assets/Images/Dashboard/totalTime.svg";

export const Stats = () => {
  const stats = [
    "Incoming Calls",
    "Outgoing Calls",
    "Abandoned Calls",
    "Total time in Calls",
  ];
  const statsIcon = [Stats0, Stats1, Stats2, Stats3];

  return (
    <div className="row">
      {stats.map((title, i) => (
        <div className="col-md-3 mb-4" key={i}>
          <div className="card callCard p-3 h-100 d-flex flex-column text-start pointer">
            <img src={statsIcon[i]} className="mb-1" height="24" width="24" />
            <h6 className="fw_500 mb-0">{title}</h6>
            <h4 className="text-muted fs_9 fw_500">Last 7 Days</h4>
            <small className="fs_21 fw_600">524</small>
          </div>
        </div>
      ))}
    </div>
  );
};
