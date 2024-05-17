import style from "./CyborgButton.module.css";

const CyborgButton = (props) => {
  return (
    <a
      className={`${
        style.btn
      } btn rounded-pill py-2 px-4 text-capitalize text-decoration-none ${
        props.position === "absolute"
          ? `position-absolute ${style.btn_position}`
          : undefined
      }`}
      href="!#"
    >
      {props.btn}
    </a>
  );
};

export default CyborgButton;
