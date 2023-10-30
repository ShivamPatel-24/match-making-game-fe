// ScoreModal.js
import React, { useState } from 'react';
import './ScoreModal.css';

function ScoreModal({ isOpen, closeModal, postScore, calculateScore }) {
  const [playerName, setPlayerName] = useState('');

  if (!isOpen) {
    return null;
  }

  return (
    <div className="score-modal">
      <h2>Congratulations!</h2>
      <p>Your score is {calculateScore(playerName)}</p>
      <input
        type="text"
        placeholder="Your Name"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
      />
      {playerName.trim() === '' && <p className="error">Please enter your name.</p>}
      <button onClick={() => postScore(playerName)}>Yes</button>
      <button onClick={closeModal}>No</button>
    </div>
  );
}

export default ScoreModal;
