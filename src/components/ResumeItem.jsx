import React from "react";
import parse from "html-react-parser";

const ResumeItem = ({ icon, year, title, desc }) => {
  return (
    <div className="resume__item">
      <div className="resume__icon">{icon}</div>

      <spam className="resume__date">{year}</spam>
      <h3 className="resume__subtitle">{parse(title)}</h3>
      <p className="resume__description">{desc}</p>
    </div>
  );
};

export default ResumeItem;
