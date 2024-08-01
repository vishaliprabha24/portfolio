import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./_experience.scss";
import { ReactComponent as Profile } from "../.././assets/images/ADP.svg";
import ADP from "./ADP";
// import ADP from "./ADP";
function Experience(props) {
  return (
    <div className="experience">
      <h2>Work Experience</h2>
      <VerticalTimeline lineColor="#000000" animate="true" className="timeline">
        <VerticalTimelineElement
          style={{ color: "black" }}
          date="2020 - 2021"
          iconStyle={{ background: "#86367b", color: "#fff" }}
        >
          <h4 className="vertical-timeline-element-title">Trainee</h4>
          <i style={{ color: "red" }}></i>
          <h5
            className="vertical-timeline-element-subtitle"
            style={{ color: "#0000ff" }}
          >
            Cognizant Technology Solutions
          </h5>
          <p style={{ paddingLeft: "15px" }}>
            <ul>
              <li>
                Engage with mentors and opportunity to implement acquired skills
                in real world scenarios by using low level programming
                languages.
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          style={{ color: "black" }}
          date="2021 - 2023"
          iconStyle={{ background: "#86367b", color: "#fff" }}
        >
          <h4 className="vertical-timeline-element-title">
            Assistant System Engineer
          </h4>
          <h5
            className="vertical-timeline-element-subtitle"
            style={{ color: "red" }}
          >
            Tata Consultancy Services
          </h5>
          <p style={{ paddingLeft: "15px" }}>
            <ul>
              <li>
                Responsible for the development of webpages in WIX Website
                Development Tool - Low code Platform.
              </li>
              <li>
                Responsible for creating and scheduling emailers using email
                templates or code in a platform called MAILCHIMP.
              </li>
              <li>
                Translation of UI/UX Wireframes to visual elements in the tool.
              </li>
              <li>
                Analysing needs, product requirements to create or implement a
                design.
              </li>
              <li>
                Monitor and maintain brand consistency across all the websites
                under the particular project.
              </li>
              <li>
                Basic knowledge of image authoring tools, ability to crop,
                resize, or perform small adjustments on an image which are used
                in the webpages.
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          style={{ color: "black" }}
          date="2023 - PRESENT"
          iconStyle={{ background: "#86367b", color: "#fff" }}
        >
          <h4 className="vertical-timeline-element-title">
            System Engineer (Developer)
          </h4>
          <h5
            className="vertical-timeline-element-subtitle"
            style={{ color: "red" }}
          >
            Tata Consultancy Services
          </h5>
          <p style={{ paddingLeft: "15px" }}>
            <ul>
              <li>
                Proficiency in HTML, CSS and other relevant programming
                languages for the development of websites.
              </li>
              <li>
                Design wireframes to actual code that will produce the visual
                elements of the website. Building reusable codes and libraries
                for future use..
              </li>
              <li>
                Monitoring website traffic, troubleshooting website problems and
                bugs.
              </li>
              <li>
                Design overall architecture of the webpages using code and
                evolve it to ensure maximum performance and stability.
              </li>
              <li>
                Understanding differences between multiple delivery platforms
                such as mobile vs desktop, and optimising output to match the
                specific platform.
              </li>
              <li>
                Working with programmers, web designers and project managers.
                Having good oral and written communication skills.
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
