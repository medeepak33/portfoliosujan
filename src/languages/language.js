import React from "react";
import languageVideo from '../assets/language.gif';
import "./language.css"; // Import a CSS file for styling

const Language = () => {
    return (
        <div className="LanguageVideo">
          
            <div className="video">
                <img src={languageVideo} alt="" srcset="" />
            </div>

            <div className="languageDesc">
                {/* Initially I learned C during my college (+2) days. After C i learned Html, Css & Js. Till the end of my higher secondary school, I completed learning C, Html, Css, Js, Wordpress, Flutter Basic, Adobe Xd, Figma */}
            </div>
        </div>
    );
};

export default Language;
