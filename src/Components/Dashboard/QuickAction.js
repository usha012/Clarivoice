import React from "react";

export const QuickAction = () => {
  return (
    <div className="card mb-3 quickActions text-start">
      <h6 className="fw_500">Quick Actions</h6>
      <p className="my-1 d-flex align-items-center">
        <div className="me-2 fw_500 text-white big-badge d-flex align-items-center justify-content-center bg-primary">
          25
        </div>{" "}
        Calls Active
      </p>
      <hr className="m-0" />
      <p className="my-1 d-flex align-items-center">
        <div className="me-2 fw_500 text-white big-badge d-flex align-items-center justify-content-center bg-warning">
          7
        </div>{" "}
        Calls Waiting
      </p>
      <hr className="m-0" />
      <p className="my-1 d-flex align-items-center">
        <div className="me-2 fw_500 text-white big-badge d-flex align-items-center justify-content-center bg-secondary">
          15
        </div>{" "}
        Calls on Hold
      </p>
      <hr className="m-0 mb-4" />

      <div className="tickets text-start">
        <h6 className="fw_500">Tickets</h6>
        <table className="table table-sm">
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Payment processing delays</td>
              <td>
                <span className="badge bg-primary fw_400 primary">Open</span>
              </td>
              <td>
                <a href="#">View</a>
              </td>
            </tr>
            <tr>
              <td>Order not delivered</td>
              <td>
                <span className="badge bg-success fw_400 success">
                  Resolved
                </span>
              </td>
              <td>
                <a href="#">View</a>
              </td>
            </tr>
            <tr>
              <td>Login Issue</td>
              <td>
                <span className="badge bg-danger fw_400 danger">
                  In Progress
                </span>
              </td>
              <td>
                <a href="#">View</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
