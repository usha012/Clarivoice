import React, { useState } from "react";
import { Tab } from "./Tab";
import { ReactComponent as DashboardIcon } from "../../Assets/Images/Dashboard/dashboardIcon.svg";
import { ReactComponent as TicketsIcon } from "../../Assets/Images/Dashboard/ticketsIcon.svg";
import { ReactComponent as SettingsIcon } from "../../Assets/Images/Dashboard/settingsIcon.svg";
import { ReactComponent as PerformanceIcon } from "../../Assets/Images/Dashboard/perforamceIcon.svg";
import { ReactComponent as CallLogsIcon } from "../../Assets/Images/Dashboard/callIcon.svg";

export const Tabs = () => {
	const [activetab, setActiveTab] = useState("Dashboard");

	const tabsData = [
		{label: "Dashboard", icon: DashboardIcon},
		{label: "Tickets", icon: TicketsIcon},
		{label: "Settings", icon: SettingsIcon},
		{label: "Performance", icon: PerformanceIcon},
		{label: "Call Logs", icon: CallLogsIcon}
	]

	return (
		<div className="tabs px-4 py-5 h-100">
			{
				tabsData.map(tab => (
					<Tab 
						label={tab.label} 
						Icon={tab.icon} 
						active={tab.label === activetab} 
						onClick={() => setActiveTab(tab.label)}
					/>
				))
			}
			
		</div>
	);
};
