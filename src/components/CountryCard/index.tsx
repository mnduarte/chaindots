import { CountryProps } from "../../types";
import "./styles.css";

export const CountryCard = ({
  flagImg,
  name,
  population,
  region,
  capital,
  code,
  onClick,
}: CountryProps) => (
  <div className="country-card border-shadow" onClick={() => onClick(code)}>
    <div className="patch" style={{ backgroundImage: `url(${flagImg})` }} />
    <div className="content">
      <h3>{name}</h3>
      <span className="details">Population: {population}</span>
      <span className="details">Region: {region}</span>
      <span className="details">Capital: {capital}</span>
    </div>
  </div>
);
