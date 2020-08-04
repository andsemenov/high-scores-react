import React, { useState } from "react";
import TablesGenerator from "./Tables_generator.js";
import "./App.css";
import allCountryScores from "./score.js";

function App() {
  let [state, setState] = useState("Ascending");
  let [sort, setSort] = useState();
  function sortWhenClicked() {
    if (state === "Ascending") {
      setState((state = "Descending"));
    } else {
      setState((state = "Ascending"));
    }
    console.log(state);
    console.log(sort);
  }
  return (
    <div>
      <ButtonOnTheTop state={state} act={sortWhenClicked} />
      <TablesGenerator
        infoScores={sortCountriesAlphabetically(allCountryScores)}
        playerInfo={allCountryScores}
      />
    </div>
  );
}

function sortCountriesAlphabetically(array) {
  let countryScores = array.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  return countryScores;
}

function ButtonOnTheTop(props) {
  return <button onClick={props.act}>{props.state}</button>;
}

export default App;
