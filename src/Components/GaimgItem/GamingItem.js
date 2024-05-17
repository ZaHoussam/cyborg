// * Imports
import style from "./GamingItem.module.css";
import CyborgButton from "../Button/CyborgButton";
// ! Functions
const GamingItem = (props) => {
  const itemStyle =
    "col-sm-4 col-lg-2 mb-4 mb-md-0 mb-md-0 d-flex justify-content-md-start justify-content-center align-items-center";
  return (
    <ul
      className={`${style.gaming_item} pb-4 row ps-0 row justify-content-md-between justify-content-center align-items-center text-capitalize`}
    >
      <li className={`col-12 ${itemStyle}`}>
        <img src={props.image} alt={props.game} className="w-50 w-md-100" />
      </li>
      <li className={`${itemStyle} col-6`}>
        <ul className={style.name}>
          <li className="mb-1">{props.game}</li>
          <li>{props.category}</li>
        </ul>
      </li>
      <li className={`${itemStyle} col-6`}>
        <ul className={style.name}>
          <li className="mb-1">date added</li>
          <li>{props.dateAded}</li>
        </ul>
      </li>
      <li className={`${itemStyle} col-6`}>
        <ul className={style.name}>
          <li className="mb-1">houres played</li>
          <li>{props.houresPlayed}</li>
        </ul>
      </li>
      <li className={`${itemStyle} col-6`}>
        <ul className={style.name}>
          <li className="mb-1">currently</li>
          <li>{props.currently}</li>
        </ul>
      </li>
      <li className={`col-12 ${itemStyle}`}>
        <CyborgButton btn="download" />
      </li>
    </ul>
  );
};

// ^ Exports
export default GamingItem;
