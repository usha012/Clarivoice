import React from "react";
import { Doughnut } from "react-chartjs-2";

export const ServiceLevel = () => {
  const serviceLevel = 85; // % value
  const target = 82;

  const doughnutData = {
    labels: ["Service Level", "Remaining"],
    datasets: [
      {
        data: [serviceLevel, 100 - serviceLevel],
        backgroundColor: ["#80cbc4", "#2f80ed"],
        borderWidth: 0,
      },
    ],
  };
  const options = {
    cutout: "75%",
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

      const xCenter = width / 2;
      const yCenter = height / 2;

      ctx.font = "400 25.6px 'Poppins', sans-serif";
      ctx.fillStyle = "#000";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("Service level", xCenter, yCenter - 35);

      ctx.font = "500 34.6px 'Poppins', sans-serif";
      ctx.fillStyle = "#000";
      ctx.fillText(`${serviceLevel}%`, xCenter, yCenter);

      ctx.font = "400 15.6px 'Poppins', sans-serif";
      ctx.fillStyle = "#666";
      ctx.fillText(`Target-${target}%`, xCenter, yCenter + 30);
    },
  };

  return (
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
  );
};
