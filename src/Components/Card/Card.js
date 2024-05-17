import style from "./Card.module.css";
import { FaStar, FaDownload } from "react-icons/fa";
const Card = (props) => {
  return (
    <div className="col">
      <div className={`card border-0 ${style.card_popular}`}>
        <img
          src={props.image}
          className="card-img-top w-100"
          alt={props.title}
        />
        <div className="card-body px-0 pb-0">
          <div className="card-title d-flex justify-content-between align-items-center text-capitalize">
            {props.title}
            <p
              className={`d-flex align-items-center ${style.cyborg_card_icons} mb-0`}
            >
              <span
                style={{ color: "var(--color-yellow)", marginRight: "1px" }}
              >
                <FaStar />
              </span>
              {props.evaevaluation}
            </p>
          </div>
          <div
            className={`card-title d-flex justify-content-between align-items-center text-capitalize ${style.cyborg_card_subtitle}`}
          >
            {props.subtitle}
            <p
              className={`d-flex align-items-center ${style.cyborg_card_icons} mb-0`}
            >
              <span
                style={{ color: "var(--color-primary)", marginRight: "1px" }}
              >
                <FaDownload />
              </span>
              {props.downloaded}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
