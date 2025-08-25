import React from "react";
import User from "../../Assets/Images/Dashboard/user.png";

export const TopPerformer = () => {
  return (
    <div className="performance card p-3 mb-3 text-start">
      <h6 className="heading1 fw_500 fs_14 text-dark">Top Performer</h6>
      <div className="heading2 fw_500 d-flex justify-content-between text-muted">
        <span>Agent</span>
        <span>CSAT</span>
      </div>
      <div className="my-2 performer fw_500 d-flex align-items-center justify-content-between text-muted">
        <span className="d-flex align-items-center justify-content-center">
          <img src={User} width="25" height="25" className="me-2" />
          <span className="d-flex flex-column">
            <span>Ajay Kumar</span>
            <span>
              <span className="green dot" />
              Active
            </span>
          </span>
        </span>
        <span className="rating text-center">4.6</span>
      </div>
      <hr className="m-0" />
      <div className="my-2 performer fw_500 d-flex align-items-center justify-content-between text-muted">
        <span className="d-flex  align-items-center justify-content-center">
          <img src={User} width="25" height="25" className="me-2" />
          <span className="d-flex flex-column">
            <span>Marvin McKinney</span>
            <span>
              <span className="grey dot" />
              Offline
            </span>
          </span>
        </span>
        <span className="rating text-center">5.7</span>
      </div>
      <hr className="m-0" />
      <div className="my-2 performer fw_500 d-flex align-items-center justify-content-between text-muted">
        <span className="d-flex align-items-center justify-content-center">
          <img src={User} width="25" height="25" className="me-2" />
          <span className="d-flex flex-column">
            <span>Bessie Cooper</span>
            <span>
              <span className="yellow dot" />
              Away
            </span>
          </span>
        </span>
        <span className="rating text-center">5.5</span>
      </div>
      <hr className="m-0" />
      <div className="my-2 performer fw_500 d-flex align-items-center justify-content-between text-muted">
        <span className="d-flex align-items-center justify-content-center">
          <img src={User} width="25" height="25" className="me-2" />
          <span className="d-flex flex-column">
            <span>Kathryn Murphy</span>
            <span>
              <span className="yellow dot" />
              Away
            </span>
          </span>
        </span>
        <span className="rating text-center">7.6</span>
      </div>
      <hr className="m-0" />
      <div className="my-2 performer fw_500 d-flex align-items-center justify-content-between text-muted">
        <span className="d-flex align-items-center justify-content-center">
          <img src={User} width="25" height="25" className="me-2" />
          <span className="d-flex flex-column">
            <span>Bessie Cooper</span>
            <span>
              <span className="grey dot" />
              Offline
            </span>
          </span>
        </span>
        <span className="rating text-center">4.9</span>
      </div>
      <hr className="m-0" />
    </div>
  );
};
