import React from "react";
import "../../../design/layoutdesign/navbar.scss"; //
import { _bannerImage } from "../../../data/metadata";

export const LandpageBanner = () => {
  return (
    <>
      <div id="homebanner">
        <video autoPlay loop muted className="video">
          <source src="src/videos/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay_banner">
          <div className="homebanner_container">
            <h1>
              Empower your
              <br /> Fitness Journey
            </h1>
            <h3>{_bannerImage.txt_assist}</h3>
            <div className="btn_join">
              <button style={{ backgroundColor: "orange", color: "white"}}>Join Member</button>
              <button>Watch Full Video</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">STARGYM</div>
      <ul className="menu">
        <li className="menu-item">
          <a href="#">SERVICES</a>
        </li>
        <li className="menu-item">
          <a href="#">PROGRAMS</a>
        </li>
        <li className="menu-item">
          <a href="#">SHOP</a>
        </li>
        <li className="menu-item">
          <a href="#">CONTACT US</a>
        </li>
      </ul>
      <div className="join-button">
        <a href="#" className="button">
          GET STARTED
        </a>
      </div>
    </nav>
  );
};
