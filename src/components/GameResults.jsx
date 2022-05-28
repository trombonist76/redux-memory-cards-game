import React from "react";
import { useSelector } from "react-redux";
import { secToDate } from "../services";

export default function GameResults() {
  const recentGames = useSelector((state) => state.recentGames.games);


  return (
    <div className={`stats ${recentGames.length < 1 && "invisible"}`}>
      <div className="gameResults">
        <h3>Recent Game Results</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Games</th>
              <th>Score</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {recentGames.map((game, index) => (
              <tr key={index} className="game">
                <td>{index + 1}</td>
                <td>{game.point}</td>
                <td>{secToDate(game.time)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
