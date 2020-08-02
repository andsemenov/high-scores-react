import React from "react";
import TablesGenerator from "./Tables_generator.js";
import "./App.css";
import allCountryScores from "./score.js";

function App() {
  return <TablesGenerator infoScores={allCountryScores} />;
}

export default App;
