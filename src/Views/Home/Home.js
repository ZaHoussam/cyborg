// * Imports

import "./Home.module.css";
import Hero from "../../Sections/Hero/Hero";
import MostPopluar from "../../Sections/MostPopular/MostaPuplar";
import GamingLibrary from "../../Sections/GamingLibrary/GamingLibrary";

// ! Functions
const Home = () => {
  return (
    <div className="home py-3">
      <Hero title="welcome to cyborg" btn="browse now" />
      <MostPopluar />
      <GamingLibrary />
    </div>
  );
};

// ^ Exports
export default Home;
