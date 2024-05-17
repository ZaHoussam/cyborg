import style from "./SectionHeader.module.css";

const SectionHeader = (props) => {
  return (
    <>
      <h2 className={`${style.title} text-capitalize fw-bold`}>
        <span>{props.title_1}</span> {props.title_2}
      </h2>
    </>
  );
};

export default SectionHeader;
