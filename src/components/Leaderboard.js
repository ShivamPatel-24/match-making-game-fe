import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Leaderboard.css';

function Leaderboard() {
    const [leaderboardData, setLeaderboardData] = useState([]);
  
    useEffect(() => {
      // Make an API request to fetch leaderboard data
      axios.get('https://match-making-game-766cb3f24122.herokuapp.com/api/leaderboard')
        .then((response) => {
          // Set the fetched data to the state
          setLeaderboardData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching leaderboard data:', error);
        });
    }, []);
  
    return (
      <div className="leaderboard">
        <button className="navigate-button">
          <Link to="/">Go to Home Page</Link>
        </button>
        <div className="description">
          <h3>Leaderboard</h3>
        </div>

        <table>
          <thead>
            <tr>
              <td>Rank</td>
              <td>Player</td>
              <td>Score</td>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((entry, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <p>{entry.Player}</p>
                </td>
                <td>{entry.Score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default Leaderboard;
