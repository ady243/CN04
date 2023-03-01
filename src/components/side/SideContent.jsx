import React from "react";
import { side, socialIcon } from "../../data/data";
import sideImg from "../../images/side.jpg";
import { about } from "../../data/data";
import { Heading } from "../../common/Heading";
import { Info } from "../about/Info";
import "./side.css";

const Progress = ({ done, title, back }) => {
  return (
    <div className="progress">
      <div
        className={`progress_done ${back}`}
        style={{
          opacity: 1,
          width: `${done}%`,
          backgroundColor: "red",
        }}
      ></div>
      <div className="progress_num" style={{ backgroundColor: "red" }}>
        {/* <h4>{done}.</h4> */}
      </div>
      <div className="progress_title">
        <h3> {title}</h3>
      </div>
    </div>
  );
};

export const SideContent = () => {
  return (
    <>
      <section className="sideContent">
        <div className="sideContent_top">
          <div className="sideContent_top_img">
            <img src={sideImg} alt="side" width="100%" />
            <div className="sideContent_top_img_name">
              <h3>Caleb Ndunge</h3>
              <span>Athlète & Sport Business</span>
            </div>
          </div>
          <div className="sideContent_top_social">
            <div className="social" style={{ display: "flex" }}>
              {socialIcon.map((icons) => (
                <div
                  className={icons.class}
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    justifyContent: "space-between",
                  }}
                >
                  <span>
                    <a href="http://www.linkedin.com/in/caleb-ndunge-758303207">
                      {icons.icon1}
                    </a>
                  </span>
                  <span>
                    <a href="https://twitter.com/cnfour04">{icons.icon2}</a>
                  </span>
                  <span>
                    <a href="https://www.instagram.com/cnfour.04/">
                      {icons.icon3}
                    </a>
                  </span>
                  <span>
                    <a href="https://www.snapchat.com/add/caleb92x?share_id=GDxhJl2bStqLGH0IVR4XLg&locale=fr_FR">
                      {icons.icon5}
                    </a>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="sideContent_bottom">
          <div className="sideContent_bottom_buttonGroup"></div>
          {about.map((items) => {
            return (
              <>
                <div className="about_details">
                  <Info items={items} Heading={Heading} />
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};
