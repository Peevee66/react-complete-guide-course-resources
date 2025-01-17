const GameOver = ( { winner, onRestart } ) => {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It's a draw!</p>}
      <button onClick={onRestart}>Play Again</button>
    </div>
  );
};

export default GameOver;