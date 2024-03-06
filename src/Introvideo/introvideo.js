import React from "react";
import introVideo from '../assets/introvideo.mp4';
import "./introvideo.css"; // Import a CSS file for styling

const IntroVideo = () => {
    return (
        <div className="introVideo">
             <div className="stackedView">
                sujanpokhreofc@gmail.com
            </div>
            <video
                autoPlay
                muted
                loop
                playsInline // Add this for iOS support
                className="video"
            >
                <source src={introVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="introText">
                
            </div>
        </div>
    );
};

export default IntroVideo;
