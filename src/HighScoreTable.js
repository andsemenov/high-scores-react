import React from "react";

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

const PlayerScore = (props) =>
  props.playerfunc(props.playerInfo).map((name, index) => (
    <td key={-index}>
      {name.n} {name.s}
    </td>
  ));

export default HighScoreTable;
