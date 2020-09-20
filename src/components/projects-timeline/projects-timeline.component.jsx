import React from "react";
import Zoom from "react-reveal/Zoom";


import "./projects-timeline.styles.css";

export default function TimeLine() {
  return (
    <div id="projects">

<div className="services-section">
      <div className="inner-width">
        <Zoom duration={2000}>
        <h1 className="section-title">Our Services</h1>
        </Zoom>
        <div className="border"></div>
        <div className="services-container">
        <Zoom duration={2000}>

          <div className="service-box">
            <div className="service-icon">
              <i className="fas fa-paint-brush"></i>
            </div>
            <div className="service-title">Web Designs</div>
            <div className="service-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eaque ratione rem porro, nihil.
            </div>
          </div>
            </Zoom>
        <Zoom duration={2000}>

          <div className="service-box">
            <div className="service-icon">
              <i className="fas fa-code"></i>
            </div>
            <div className="service-title">Web Development</div>
            <div className="service-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eaque ratione rem porro, nihil.
            </div>
          </div>
            </Zoom>
        <Zoom duration={2000}>

          <div className="service-box">
            <div className="service-icon">
              <i className="fas fa-brush"></i>
            </div>
            <div className="service-title">Responsive Designs</div>
            <div className="service-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eaque ratione rem porro, nihil.
            </div>
          </div>
            </Zoom>
        <Zoom duration={2000}>

          <div className="service-box">
            <div className="service-icon">
              <i className="fas fa-object-ungroup"></i>
            </div>
            <div className="service-title">Edit Sections</div>
            <div className="service-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eaque ratione rem porro, nihil.
            </div>
          </div>
              </Zoom>
        <Zoom duration={2000}>

          <div className="service-box">
            <div className="service-icon">
              <i className="fas fa-database"></i>
            </div>
            <div className="service-title">Databases</div>
            <div className="service-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eaque ratione rem porro, nihil.
            </div>
          </div>
            </Zoom>
        <Zoom duration={2000}>

          <div className="service-box">
            <div className="service-icon">
              <i className="fab fa-android"></i>
            </div>
            <div className="service-title">Android</div>
            <div className="service-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eaque ratione rem porro, nihil.
            </div>
          </div>
          </Zoom>
        </div>
      </div>
    </div>



          </div>
  );
}
