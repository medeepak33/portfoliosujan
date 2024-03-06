/* Projects.js */

import React from "react";
import ListItem from "./ListItem";
import { motion } from "framer-motion";
import PackageImage from '../assets/timelinePackage.jpg';
import animatedSolar from '../assets/solarPlanet.jpg';
import koseli from '../assets/foodapp.jpg';
import expressCv from '../assets/expresscv.jpg';
import "./projects.css";

const Projects = () => {
  const items = [
    {
      imageSrc: PackageImage,
      heading: 'Dynamic Timeline Tile Flutter',
      company: 'Self Pub Package',
      tech: 'Flutter | Dart',
      description: 'Dynamic Timeline Tile Flutter - Flutter pub package / library to create a dynamic timeline tile',
      use: 'Plugin Design | Package Creation & Deployment',
      link: "https://pub.dev/packages/dynamic_timeline_tile_flutter"
    },
    {
      imageSrc: koseli,
      heading: 'Rara Foods | Food Delivery App',
      company: 'Silicontech Nepal Pvt Ltd',
      tech: 'Flutter | Dart',
      description: 'Rara Foods - Multi-Vendors Foods delivery system to be launched in australia',
      use: 'Mobile App Ui Design | Frontend Development | Api',
      link: ""
    }
  ];

  return (
    <div className="projectGallery">
      <div className="projectHeader">
        FEATURED WORK
      </div>
      <div className="gallery">
        {items.map((item, index) => (
          <ListItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
