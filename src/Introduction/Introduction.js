import React from "react";
import "./Introduction.css";
import { Link } from "react-scroll";

const Introduction = () => {
  return (
    <div id="aboutMe" className="introduction">
      <div className="logo">S</div>
      <div className="intro">I'm a mobile app & website developer based in Jhapa, Nepal.</div>

      <div className="listWrapper">
        <div className="networksSkills">
          <div className="networks">
            <span className="networkText">NETWORKS</span>
            <a href="https://yourwebsite.com" className="displayNetwork">Website</a>
            <a href="https://www.facebook.com/sujan.pokhrel.3745" className="displayNetwork">Facebook</a>
            <a href="https://www.instagram.com/sujan_s33/" className="displayNetwork">Instagram</a>
            <a href="https://www.linkedin.com/in/pokhrelsujan96in/" className="displayNetwork">LinkedIn</a>
            <a href="https://github.com/PokhrelSujan96" className="displayNetwork">Github</a>
          </div>

          <div className="skills">
            <span className="networkText">SKILLS & ABILITIES</span>
            <Link to="mobileApps" className="showcaseText" smooth={true} duration={500}>Mobile Apps</Link>
            <Link to="websites" className="showcaseText" smooth={true} duration={500}>Websites</Link>
            <Link to="androidIos" className="showcaseText" smooth={true} duration={500}>Android & iOS</Link>
            <Link to="branding" className="showcaseText" smooth={true} duration={500}>Branding</Link>
            <Link to="designing" className="showcaseText" smooth={true} duration={500}>Designing</Link>
          </div>
        </div>

        <div className="worksLanguages">
          <div className="works">
            <span className="networkText">PROJECTS & WORKS</span>
            <Link to="flutterDeveloper" className="showcaseText" smooth={true} duration={500}>Flutter Developer | Silicon Tech</Link>
            <Link to="koseliFoods" className="showcaseText" smooth={true} duration={500}>Koseli Foods</Link>
            <Link to="raraFoods" className="showcaseText" smooth={true} duration={500}>Rara Foods</Link>
            <Link to="funtasticEvents" className="showcaseText" smooth={true} duration={500}>Paathshala Portal</Link>
            <Link to="snapchat" className="showcaseText" smooth={true} duration={500}>Lauaayo Entertainment</Link>
          </div>

          <div className="languages">
            <span className="networkText">LANGUAGES</span>
            <Link to="dartFlutter" className="showcaseText" smooth={true} duration={500}>Dart | Flutter</Link>
            <Link to="cLanguage" className="showcaseText" smooth={true} duration={500}>C</Link>
            <Link to="androidIos" className="showcaseText" smooth={true} duration={500}>Android & iOS</Link>
            <Link to="branding" className="showcaseText" smooth={true} duration={500}>React</Link>
            <Link to="designing" className="showcaseText" smooth={true} duration={500}>Firebase</Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
