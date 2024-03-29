import "./styles.css";
import housesForSale from "./data/housesForSale";
import HouseCard from "./components/HouseCard";

export default function App() {

  const houseCards = housesForSale.map((houseData, index, array) => {
    return (
      <HouseCard houseData={houseData} index={index} array={array}/>
    );
  });

  return (
    <div className="wrapper">
      <header>
        <img className="logo" src="images/logo.png" />
      </header>
      <div className="house-cards-container">{houseCards}</div>
    </div>
  );
}
