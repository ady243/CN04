import React from "react";
import "./moi.css";

export const Services = ({ items, Heading }) => {
  return (
    <>
      <div className="about_services">
        <Heading title="Training x Lifestyle" />
        {/* <div className="about_services_boxs"> */}
        {/* {items.serives.map((item) => (
            <>
              <div className='card'>
                <div className='icon'>
                  <span>{item.icon}</span>
                </div>
                <div className='text'>
                  <h3>{item.title}</h3>
                  <label>{item.text}</label>
                  <p>{item.decs}</p>
                </div>
              </div>
            </>
          ))} */}
        <div className="moi">
          <div>
            <img src="https://zupimages.net/up/23/08/ir6g.jpeg" alt=""></img>
          </div>

          <div>
            <img src="https://zupimages.net/up/23/08/jwle.jpeg" alt=""></img>
          </div>
          <div>
            <img src="https://zupimages.net/up/23/08/yd5v.jpeg" alt=""></img>
          </div>
          <div>
            <img src="https://zupimages.net/up/23/08/w8ql.jpeg" alt=""></img>
          </div>
          <div>
            <img src="https://zupimages.net/up/23/08/fx1z.jpeg" alt=""></img>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};
