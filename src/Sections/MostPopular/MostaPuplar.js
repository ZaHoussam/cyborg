 // * Imports
import style from "./MostPopular.module.css";
import Header from "../../Components/SectionHeader/SectionHeader";
import Card from "../../Components/Card/Card";
import most_popular from "../../Data/MostPouplar";
import CyborgButton from "../../Components/Button/CyborgButton";
// ! Functions
const MostPopluar = () => {
  const cards = most_popular.map((card) => (
    <Card
      key={card.id}
      title={card.title}
      image={card.image}
      subtitle={card.subtitle}
      evaevaluation={card.evaluation}
      downloaded={card.downloaded}
    />
  ));

  return (
    <div
      className={`${style.most_popular} my-5 border-raduis-section p-4 pb-5 position-relative`}
    >
      <Header title_1="most popluar" title_2="right now" />
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mt-2 mb-4">
        {cards}
      </div>
      <CyborgButton btn="discover popular" position="absolute" />
    </div>
  );
};

// ^ Exports
export default MostPopluar;
