import { Routes, Route } from "react-router-dom";
import "./App.css";

import { Layout } from "./components/Layout";
import { CountriesList } from "./containers/CountriesList";
import { CountryDetail } from "./containers/CountryDetail";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<CountriesList />} />
          <Route path="/detail/:code" element={<CountryDetail />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
