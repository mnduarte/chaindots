import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCountries } from "../../redux/Country/action";

import { CountryCard, Search } from "../../components";
import "./styles.css";
import { Select } from "../../components/Select";

const regions = [
  "All",
  "Americas",
  "Africa",
  "Oceania",
  "Europe",
  "Asia",
  "Antarctic",
];

export const CountriesList = () => {
  const navigate = useNavigate();
  const dispatch: any = useDispatch();
  const { countries, loading, error } = useSelector(
    ({ countryReducer }: any) => ({
      ...countryReducer,
    })
  );
  const [filteredCountries, setFilteredCountries] = useState<any>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [regionText, setRegionText] = useState<string>("");

  const filterCountries = () => {
    return setFilteredCountries(
      countries.filter(
        (country: any) =>
          country.name.official.toLowerCase().includes(searchText) &&
          regionText !== "All" &&
          country.region.includes(regionText)
      )
    );
  };

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  useEffect(filterCountries, [searchText, regionText, countries]);

  return (
    <>
      <div className="container-action">
        <Search value={searchText} onChange={setSearchText} />
        <Select
          options={regions}
          onChange={(region) => setRegionText(region !== "All" ? region : "")}
          placeholder="Filter by Region"
        />
      </div>
      <div className="countries-list">
        {Boolean(filteredCountries) &&
          filteredCountries.map((country: any, i: number) => {
            const [firstCapital] = country.capital || "None";

            return (
              <CountryCard
                key={i}
                flagImg={country.flags.png}
                name={country.name.official}
                population={country.population}
                region={country.region}
                capital={firstCapital}
                code={country.cca3}
                onClick={(code: string) => navigate(`/detail/${code}`)}
              />
            );
          })}
      </div>
    </>
  );
};
