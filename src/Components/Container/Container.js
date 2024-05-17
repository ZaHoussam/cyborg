import style from "./Container.module.css";

const Containter = (props) => {
  return (
    <div
      className={`container ${style.cyborg_content} rounded-3 px-lg-5 py-lg-5`}
    >
      {props.children}
    </div>
  );
};

export default Containter;
