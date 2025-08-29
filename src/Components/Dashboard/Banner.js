import React from 'react'
import BannerImg from "../../Assets/Images/Dashboard/bannerImg.png";

export const Banner = () => {
  return (
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
  )
}
