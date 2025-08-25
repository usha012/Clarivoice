import React from 'react';
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, } from "chart.js";

ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement );

export const TotalCalls = () => {
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

  return (
    <div>
        <h6 className="text-start fw_500 fs_23">Total Calls</h6>
        <Line data={lineData} options={lineOptions} />
    </div>
  )
}
