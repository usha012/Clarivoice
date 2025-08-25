import React from "react";
import Logo from "../Assets/Images/Dashboard/ClariVoice.svg";
import { Tabs } from "../Components/Dashboard/Tabs";
import { ReactComponent as SearchIcon } from "../Assets/Images/Dashboard/search.svg";
import { FilterButtons } from "../Components/Dashboard/FilterButtons";
import { Banner } from "../Components/Dashboard/Banner";
import { Stats } from "../Components/Dashboard/Stats";
import { CallLogTable } from "../Components/Dashboard/CallLogTable";
import { ServiceLevel } from "../Components/Dashboard/ServiceLevel";
import { TotalCalls } from "../Components/Dashboard/TotalCalls";
import { TopPerformer } from "../Components/Dashboard/TopPerformer";
import { QuickAction } from "../Components/Dashboard/QuickAction";
import MobileLogo from "../Assets/Images/Dashboard/mobile_logo.svg";


export default function Dashboard() {
  	

  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="container">
          <div className="p-4 logo d-none d-md-block">
			<a href="/">
            	<img src={Logo} className="img_fluid_100" />
			</a>
          </div>
          <div className="p-0 logo d-md-none">
			<a href="/">
            	<img src={MobileLogo} className="img_fluid_100" />
			</a>
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
              <Banner />

              <div className="card p-3 mb-3 bg-white">
				<Stats />
                <TotalCalls />
              </div>

              {/* Call Log Table */}
              <CallLogTable />

            </div>

            {/* Side Widgets */}
            <div className="col-md-4">
				<ServiceLevel />

              <TopPerformer />

              <QuickAction />

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
