import { CountryProps } from "../../types";
import { Link } from "react-router-dom";
import "./styles.css";

export const CountryPost = ({
  flagImg,
  name,
  population,
  region,
  subregion,
  capital,
  currencies,
  languages,
  borders = [],
}: CountryProps) => {
  return (
    <>
      <div className="patch" style={{ backgroundImage: `url(${flagImg})` }} />
      <div className="content">
        <h3>{name}</h3>
        <span className="details">Population: {population}</span>
        <span className="details">Region: {region}</span>
        <span className="details">Sub-Region: {subregion}</span>
        <span className="details">Capital: {capital}</span>
        <span className="details">Currencies: {currencies}</span>
        <span className="details">Languajes: {languages}</span>
        <span className="details">
          Borders:
          {borders.map((border: string) => (
            <Link key={border} to={`/detail/${border}`} reloadDocument>
              {border}{" "}
            </Link>
          ))}
        </span>
      </div>
    </>
  );
};
