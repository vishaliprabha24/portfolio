import React from "react";
import NavBar from "./NavBar/NavBar";
import { TypeAnimation } from "react-type-animation";
import profile from "../.././assets/images/profile4.jpg";
import "./_header.scss";
function Header(props) {
  return (
    <div>
      <NavBar />
      <div className="header" id="home">
        <div className="profile">
          <div className="details">
            <div className="name">
              <TypeAnimation
                sequence={["Hi,I'm Vishali prabha", 1000]}
                speed={10}
                spy={true}
                repeat={Infinity}
                wrapper="div"
                className="text-animation"
              />
            </div>
            <div className="role">
              <h1>
                I have 3+ Years of Experience with efficient and knowledgeable
                coding skills as a Frontend Web Developer. Coordinated and
                collaborative team player with attention to detail, Graphic
                design skills, and UI/UX Skils. Apart from Technical knowledge,
                having some basic knowledge in non technical role as well in the
                field of Payroll Processing and HR Operations. As a quick
                learner, desire to learn new technologies and upskill myself.
              </h1>
            </div>
          </div>
          <div className="picture">
            <div>
              <img src={profile} alt="profile" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
