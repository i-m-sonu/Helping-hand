import Achievement from "./components/Achievement";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Homepage from "./components/homepage";
import Skill from "./components/Skill";
import "./globals.css";

const layout = () => {
  return (
    <>
      <div className="layout">
        <Navbar />
        <Homepage />

        <Education />

        <Project />

        <Skill/>
       
        <Achievement/>
        <Footer />
      </div>
    </>
  );
};

export default layout;
