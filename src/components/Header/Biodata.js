import React from "react";
import CV from "../../assets/CV.pdf";


const Biodata = () => {
  return (
    <div className="bioData_btn">
      <a className="btn" href={CV}>
        Dowonload
      </a>
      <a className="btn btn-primary" href="#contact">
        Lest's Talk
      </a>
    </div>
  );
};

export default Biodata;
