import React from "react";

function TablesGenerator(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col"> High Scores per Countries</th>
        </tr>
      </thead>
      <HighScoreTable info={props.infoScores} />
    </table>
  );
}

const PlayerScore = (props) =>
  sortPlayersScoresAscending(props.playerInfo).map((name, index) => (
    <td key={-index}>
      {name.n} {name.s}
    </td>
  ));

function HighScoreTable(props) {
  return props.info.map((infoScore, index) => (
    <tfoot>
      <tr>
        <th key={index} scope="col">
          HIGH SCORES: {infoScore.name}
        </th>
      </tr>
      <tr className="row">
        <PlayerScore playerInfo={infoScore.scores} />
      </tr>
    </tfoot>
  ));
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
export default TablesGenerator;
