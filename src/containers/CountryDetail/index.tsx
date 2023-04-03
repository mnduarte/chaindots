import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCountry } from "../../redux/Country/action";
import "./styles.css";
import { CountryPost } from "../../components/CountryPost";

export const CountryDetail = () => {
  const { code } = useParams();
  const dispatch: any = useDispatch();
  const { country, loading, error } = useSelector(
    ({ countryReducer }: any) => ({
      ...countryReducer,
    })
  );

  useEffect(() => {
    dispatch(getCountry(code || ""));
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!country) {
    return <h2>Country not found</h2>;
  }

  const [firstCapital] = country.capital || "None";
  const currencies = Object.values(country.currencies)
    .map((currency: any) => currency.name)
    .join(", ");
  const languages = Object.values(country.languages).join(", ");
  const borders: string[] = Object.values(country.borders || {});

  return (
    <div className="country-detail border-shadow">
      <CountryPost
        flagImg={country.flags.png}
        name={country.name.official}
        population={country.population}
        region={country.region}
        subregion={country.subregion}
        capital={firstCapital}
        currencies={currencies}
        languages={languages}
        borders={borders}
      />
    </div>
  );
};
