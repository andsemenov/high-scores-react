import React from "react";
import HighScoreTable from "./HighScoreTable";

function TablesGenerator(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col"> High Scores per Countries</th>
        </tr>
      </thead>
      <HighScoreTable info={props.infoScores} func={props.sortPlayers} />
    </table>
  );
}

export default TablesGenerator;
