// import NavBar from './Nav Bar/navbar';
import Introduction from "./Introduction/Introduction";
import IntroVideo from "./Introvideo/introvideo"
import Language from "./languages/language";
import WorkPlace from "./workPlace/workplace"
import Footer from "./footer/footer";
import ProjectGrid from "./Projects/projects";


function App() {
  return (
    <div className='App'>
      <Introduction />
      <IntroVideo />
      <ProjectGrid />

      <WorkPlace />
      <Language />
      <Footer />
    </div>
  );
}

export default App;
