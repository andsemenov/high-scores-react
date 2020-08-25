import React, { useState } from "react";
import TablesGenerator from "./Tables_generator";
import ButtonOnTheTop from "./ButtonOnTheTop";
import "./App.css";
import allCountryScores from "./score";

function App() {
  let [state, setState] = useState("Ascending");
  let sortFunc;

  function changeState(state) {
    if (state === "Ascending") {
      setState((state = "Descending"));
    } else {
      setState((state = "Ascending"));
    }
  }
  if (state === "Ascending") {
    sortFunc = sortPlayersScoresDescending;
  } else {
    sortFunc = sortPlayersScoresAscending;
  }
  return (
    <div>
      <ButtonOnTheTop stateBtn={state} func={changeState} />
      <TablesGenerator
        infoScores={sortCountriesAlphabetically(allCountryScores)}
        sortPlayers={sortFunc}
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
