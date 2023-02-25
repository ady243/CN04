import React from "react";

export const Info = ({ items, Heading }) => {
  return (
    <>
      {" "}
      <Heading title="about info" />
      <div className="about_details_content">
        {items.deatils.map((val) => (
          <>
            <div className="about_details_content_box">
              <div
                className="icon"
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                <span>{val.icon}</span>
                <span onClick={() => window.open("mailto:cndunge27@gmail.com")}>
                  {val.icon1}
                </span>
              </div>
              <div className="about_details_content_box_text">
                {/* <h4>{val.text}</h4>

                <span>{val.value}</span>
                <hr /> */}
              </div>
            </div>
          </>
        ))}
      </div>
      <div style={{ textAlign: "center" }}>
        <h4>Paris, France</h4>
      </div>
    </>
  );
};
