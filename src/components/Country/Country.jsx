import { useState } from "react";
import "./Country.css";

const Country = ({ country }) => {
  const { name, flags, population, area, cca3 } = country;
  const [visited, setVisited] = useState(false);
  const [color, setColor] = useState(true);
  const [buttonColor, setButtonColor] = useState(false);

  const handleVisite = () => {
    setVisited(!visited);
    setColor(!color);
    setButtonColor(!buttonColor)
  };

  return (
    <div className="country colume">
      <h3>Name : {name.common} </h3>
      <img src={flags.png} alt="" />
      <p>Population : {population}</p>
      <p>Area {area}</p>
      <p>CCA3: {cca3}</p>
      <button
        style={{ backgroundColor: color ? "black" : "green", outline: "none" , color: buttonColor ? 'white': 'red'}}
        onClick={handleVisite}
      >
        {visited ? " Visited" : "Visit"}
      </button>
      <p>{visited ? " I have visit this country" : " I want to visit the country"}</p>
      
    </div>
  );
};

export default Country;
