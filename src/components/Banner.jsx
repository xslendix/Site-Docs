import React from "react";
import Link from "@docusaurus/Link";

function BannerText() {
  return (
    <div className="bannerContent">
      <p>
        <img align="center" width="150px" src="logos/TempleOS.jpg"/>
      </p>
      <h1 id="heading">
        TempleOS Docs
      </h1>
      
      

      <div className="bannerBtns">
        <Link
          to="CHANGEEEEEEEEEEE"
          style={{ textDecoration: "none" }}
          >
          
          <button className="banner_btn">
          
          <span>🤿 Dive In!</span>
          </button>
       
        </Link>

      
      </div>
    </div>
  );
}

function Banner() {
  return (
    <div className="banner">
      <BannerText />
      {/* 
      <img
        className="bannerImg"
        src="img/TempleOS_Sreenshot.png"
        alt="Exodia Demo"
      />
      */}
      
      
    </div>
  );
}

export default Banner;
