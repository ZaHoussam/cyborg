// * Imports
import style from "./GamingLibrary.module.css";
import Header from "../../Components/SectionHeader/SectionHeader";
import CyborgButton from "../../Components/Button/CyborgButton";
import GamingItem from "../../Components/GaimgItem/GamingItem";
import gaminLib from "../../Data/GamingLib";
// ! Functions
const GamingLibrary = () => {
  const gameLibs = gaminLib.map((game) => (
    <GamingItem
      key={game.id}
      game={game.game}
      image={game.image}
      category={game.category}
      dateAded={game.dateAded}
      houresPlayed={game.houresPlayed}
      currently={game.currently}
    />
  ));
  return (
    <div
      className={`${style.gaming_library} my-5 border-raduis-section p-4 pb-5 position-relative`}
    >
      <Header title_1="your gaming" title_2="library" />
      <div className="gaming_items mt-5">{gameLibs}</div>
      <CyborgButton btn="view your library" position="absolute" />
    </div>
  );
};

// ^ Exports
export default GamingLibrary;
