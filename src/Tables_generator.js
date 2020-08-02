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

function HighScoreTable(props) {
  return props.info.map((infoScore) => (
    <tfoot>
      <tr>
        <th scope="col">HIGH SCORES: {infoScore.name}</th>
      </tr>
      <tr className="row">
        {infoScore.scores.map((name) => (
          <td>
            {name.n} {name.s}
          </td>
        ))}
      </tr>
    </tfoot>
  ));
}

export default TablesGenerator;
