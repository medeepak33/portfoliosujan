import React from "react";
import workvideo from '../assets/workk.mp4';
import "./workplace.css"; // Import a CSS file for styling

const WorkPlace = () => {
    return (
        <div className="WorkVideo">
           
            <video
                autoPlay
                muted
                loop
                playsInline // Add this for iOS support
                className="video"
            >
                <source src={workvideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="workText">
                Flutter Developer at silicontech nepal pvt ltd
            </div>
        </div>
    );
};

export default WorkPlace;
