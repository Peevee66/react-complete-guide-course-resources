const Log = ( { gameTurns } ) => {
  return (
    <ol id="log">
      {gameTurns.map((turn, index) => (
        <li key={index}>
          <strong>{turn.player}</strong> selected square {turn.square.row}, {turn.square.col}
        </li>
      ))}
    </ol>
  );
};

export default Log;