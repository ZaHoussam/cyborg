import CyborgButton from "../../Components/Button/CyborgButton";
import styled from "./Hero.module.css";
// ! Functions
const Hero = (props) => {
  return (
    <div
      className={`${styled.hero} d-flex flex-column justify-content-center border-raduis-section`}
    >
      <h3 className={`${styled.title} text-capitalize`}>{props.title}</h3>
      <h1 className={`${styled.big_title} my-5 text-uppercase`}>
        <span>browse</span> our popular games here
      </h1>
      <CyborgButton btn="browse now" />
    </div>
  );
};

export default Hero;
