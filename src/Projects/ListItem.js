/* ListItem.js */

import React from 'react';

const ListItem = ({ imageSrc, heading, company, tech,description, use, link }) => (
  <div className="projectRow">
    <div className="colleft">
      <img src={imageSrc} alt={heading} />
    </div>
    <div className="colright">
      <div className="texts">
        <h2>{heading}</h2>
        <div className="companyName">{company}</div>
        <div className="framework">{tech}</div>
        <div className="description">{description}</div>
        <div className="use">{use}</div>
        <div className="view">
          <a href={link}>Visit Project</a>
        </div>
      </div>
    </div>
  </div>
);

export default ListItem;
