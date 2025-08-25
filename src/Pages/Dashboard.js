import React from "react";
import Logo from "../Assets/Images/Dashboard/ClariVoice.svg";
import { Tabs } from "../Components/Dashboard/Tabs";
import { Line, Doughnut } from "react-chartjs-2";
import { ReactComponent as SearchIcon } from "../Assets/Images/Dashboard/search.svg";
import BannerImg from "../Assets/Images/Dashboard/bannerImg.png";
import Stats0 from "../Assets/Images/Dashboard/callGreen.svg";
import Stats1 from "../Assets/Images/Dashboard/callBlue.svg";
import Stats2 from "../Assets/Images/Dashboard/callRed.svg";
import Stats3 from "../Assets/Images/Dashboard/totalTime.svg";
import CallIcon from "../Assets/Images/Dashboard/callRed2.svg";
import User from "../Assets/Images/Dashboard/user.png";
import callHistory from "../data/callHistory.json"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { FilterButtons } from "../Components/Dashboard/FilterButtons";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const stats = [ "Incoming Calls", "Outgoing Calls", "Abandoned Calls", "Total time in Calls" ]
const statsIcon = [Stats0, Stats1, Stats2, Stats3,]
const serviceLevel = 85; // % value
const target = 82;

export default function Dashboard() {
  	// Line Chart Data
	const lineData = {
		labels: [
		"2012",
		"2013",
		"2014",
		"2015",
		"2016",
		"2017",
		"2018",
		"2019",
		"2020",
		"2021",
		],
		datasets: [
		{
			label: "Total Calls",
			data: [2, 7, 9, 11, 10, 13, 15, 13, 19, 20],
			borderColor: "#1a73e8",
			backgroundColor: "rgba(26,115,232,0.2)",
			tension: 0.3,
		},
		{
			label: "Abandoned Calls",
			data: [1, 3, 7, 10, 11, 12, 14, 16, 18, 19],
			borderColor: "#00c49f",
			backgroundColor: "rgba(0,196,159,0.2)",
			tension: 0.3,
		},
		],
	};

	const lineOptions = {
		responsive: true,
		plugins: { legend: { display: false } },
	};

  // Doughnut Chart Data
	const doughnutData = {
		labels: ["Service Level", "Remaining"],
		datasets: [
		{
			data: [serviceLevel, 100 - serviceLevel],
			backgroundColor: ["#80cbc4", "#2f80ed"], // blue & teal like your image
			borderWidth: 0,
		},
		],
	};
	const options = {
		cutout: "75%", // makes the ring thick
		plugins: {
		legend: { display: false },
		tooltip: { enabled: false },
		},
	};
	// Plugin for three custom texts
	const centerText = {
		id: "centerText",
		beforeDraw: (chart) => {
		const { ctx, width, height } = chart;
		ctx.save();

		// Chart center
		const xCenter = width / 2;
		const yCenter = height / 2;

		// Text 1: Service level
		ctx.font = "400 25.6px 'Poppins', sans-serif";
		ctx.fillStyle = "#000";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.fillText("Service level", xCenter, yCenter - 35);

		// Text 2: 85%
		ctx.font = "500 34.6px 'Poppins', sans-serif";
		ctx.fillStyle = "#000";
		ctx.fillText(`${serviceLevel}%`, xCenter, yCenter);

		// Text 3: Target-82%
		ctx.font = "400 15.6px 'Poppins', sans-serif";
		ctx.fillStyle = "#666";
		ctx.fillText(`Target-${target}%`, xCenter, yCenter + 30);
		},
	};

  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="container">
          <div className="p-4 logo">
            <img src={Logo} className="img_fluid_100" />
          </div>
        </div>
        <hr className="m-0" />
        <Tabs />
      </div>

      <div className="main_section">
        <div className="">
          {/* Top Bar */}
          <div className="container-fluid heading">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="heading fs_25 fw_400 d-flex align-items-center justify-content-center">
                Dashboard
              </h4>
              <div className="align-items-center justify-content-center d-none d-md-flex">
                <span className="search_box">
                  <SearchIcon className="" />
                  <input className="" placeholder="Search" />
                </span>
                <FilterButtons />
              </div>
            </div>
          </div>
          <hr className="m-0" />
        </div>

        <div className="banner container-fluid px-4 py-5">
          <div className="row">
            {/* Line Chart */}
            <div className="col-md-8">
              {/* Banner */}
              <div className="background card mb-3 text-white position-relative">
                <div className="row ">
                  <div className="col-md-8 text-start banner_text">
                    <h5 className="text-white fs_28 fw_500">
                      Your teammates are online
                    </h5>
                    <p className="mb-0 fw_500 fs_13_1">
                      Schedule your call, conference meeting or start a new chat
                      with a welcome message{" "}
                    </p>
                  </div>
                </div>
				<img className="position-absolute d-none d-lg-block" src={BannerImg} />
              </div>

              

              <div className="card p-3 mb-3 bg-white">
				<div className="row">
                {/* Stats Cards */}
                {stats.map((title, i) => (
                  <div className="col-md-3 mb-4" key={i}>
                    <div className="card callCard p-3 h-100 d-flex flex-column text-start pointer">
						<img src={statsIcon[i]} className="mb-1" height="24" width="24"/>
						<h6 className="fw_500 mb-0">{title}</h6>
						<h4 className="text-muted fs_9 fw_500">Last 7 Days</h4>
						<small className="fs_21 fw_600">524</small>
                    </div>
                  </div>
                ))}
              </div>
                <h6 className="text-start fw_500 fs_23">Total Calls</h6>
                <Line data={lineData} options={lineOptions} />
              </div>

              {/* Call Log Table */}
              <div className="card p-3">
                <h6 className="text-start fw_500 fs_23">
                   <img src={CallIcon} className="mb-1" height="24" width="24"/> Call Log Summary Table
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
            </div>

            {/* Side Widgets */}
            <div className="col-md-4">
				<div className="p-4 text-center">
					<Doughnut data={doughnutData} options={options} plugins={[centerText]} />
					<div className="mt-3">
					<h6 className="mb-0 text-muted">Average CSAT</h6>
					<h2 className="fw-bold">
						4.7 <small className="text-muted">of 5</small>
					</h2>
					<a href="/" className="text-primary small">
						see all response →
					</a>
					</div>
				</div>

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
							<span><span className="green dot" />Active</span>
						</span>
					</span>
					<span className="rating text-center">4.6</span>
				</div><hr className="m-0"/>
				<div className="my-2 performer fw_500 d-flex align-items-center justify-content-between text-muted">
					<span className="d-flex  align-items-center justify-content-center">
						<img src={User} width="25" height="25" className="me-2" />
						<span className="d-flex flex-column">
							<span>Marvin McKinney</span>
							<span><span className="grey dot" />Offline</span>
						</span>
					</span>
					<span className="rating text-center">5.7</span>
				</div><hr className="m-0"/>
				<div className="my-2 performer fw_500 d-flex align-items-center justify-content-between text-muted">
					<span className="d-flex align-items-center justify-content-center">
						<img src={User} width="25" height="25" className="me-2" />
						<span className="d-flex flex-column">
							<span>Bessie Cooper</span>
							<span><span className="yellow dot" />Away</span>
						</span>
					</span>
					<span className="rating text-center">5.5</span>
				</div><hr className="m-0" />
				<div className="my-2 performer fw_500 d-flex align-items-center justify-content-between text-muted">
					<span className="d-flex align-items-center justify-content-center">
						<img src={User} width="25" height="25" className="me-2" />
						<span className="d-flex flex-column">
							<span>Kathryn Murphy</span>
							<span><span className="yellow dot" />Away</span>
						</span>
					</span>
					<span className="rating text-center">7.6</span>
				</div><hr className="m-0" />
				<div className="my-2 performer fw_500 d-flex align-items-center justify-content-between text-muted">
					<span className="d-flex align-items-center justify-content-center">
						<img src={User} width="25" height="25" className="me-2" />
						<span className="d-flex flex-column">
							<span>Bessie Cooper</span>
							<span><span className="grey dot" />Offline</span>
						</span>
					</span>
					<span className="rating text-center">4.9</span>
				</div><hr className="m-0" />
              </div>

              <div className="card mb-3 quickActions text-start">
                <h6 className="fw_500">Quick Actions</h6>
                <p className="my-1 d-flex align-items-center">
                  <div className="me-2 fw_500 text-white big-badge d-flex align-items-center justify-content-center bg-primary">25</div> Calls Active
                </p>
				<hr className="m-0" />
                <p className="my-1 d-flex align-items-center">
                  <div className="me-2 fw_500 text-white big-badge d-flex align-items-center justify-content-center bg-warning">7</div> Calls Waiting
                </p>
				<hr className="m-0" />
                <p className="my-1 d-flex align-items-center">
                  <div className="me-2 fw_500 text-white big-badge d-flex align-items-center justify-content-center bg-secondary">15</div> Calls on Hold
                </p>
				<hr className="m-0 mb-4" />

				<div className="p-3 tickets text-start">
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
                        <span className="badge bg-success fw_400 success">Resolved</span>
                      </td>
                      <td>
                        <a href="#">View</a>
                      </td>
                    </tr>
                    <tr>
                      <td>Login Issue</td>
                      <td>
                        <span className="badge bg-danger fw_400 danger">In Progress</span>
                      </td>
                      <td>
                        <a href="#">View</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
