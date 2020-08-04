import React from "react";

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

const PlayerScore = (props) =>
  props.playerfunc(props.playerInfo).map((name, index) => (
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
        <PlayerScore playerInfo={infoScore.scores} playerfunc={props.func} />
      </tr>
    </tfoot>
  ));
}

export default TablesGenerator;
