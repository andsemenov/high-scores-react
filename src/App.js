import React, { useState } from "react";
import TablesGenerator from "./Tables_generator.js";
import "./App.css";
import allCountryScores from "./score.js";

function App() {
  let [state, setState] = useState("Ascending");
  let [sort, setSort] = useState(sortPlayersScoresDescending);
  function sortWhenClicked() {
    if (state === "Ascending") {
      setState((state = "Descending"));
      setSort((sort = sortPlayersScoresAscending));
    } else {
      setState((state = "Ascending"));
      setSort((sort = sortPlayersScoresDescending));
    }
  }
  console.log(state);
  console.log(sort);
  return (
    <div>
      <ButtonOnTheTop stateBtn={state} act={sortWhenClicked} />
      <TablesGenerator
        infoScores={sortCountriesAlphabetically(allCountryScores)}
        sortPlayers={sort}
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
  return <button onClick={props.act}>{props.stateBtn}</button>;
}

function sortPlayersScoresDescending(array) {
  array.sort(function (a, b) {
    return b.s - a.s;
  });
  return array;
}

function sortPlayersScoresAscending(array) {
  array.sort(function (a, b) {
    return a.s - b.s;
  });
  return array;
}

export default App;
