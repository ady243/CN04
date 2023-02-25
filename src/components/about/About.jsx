import React from "react";
import { Heading } from "../../common/Heading";
import { about } from "../../data/data";
import { Bio } from "./Bio";

import { Services } from "./Services";

export const About = () => {
  return (
    <>
      <section className="about">
        <div className="container">
          {about.map((items) => {
            return (
              <>
                <div className="about_details">
                  <Bio items={items} Heading={Heading} />
                </div>
                <div>
                  <Services items={items} Heading={Heading} />
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};
