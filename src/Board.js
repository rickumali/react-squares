import RowOfSquares from "./RowOfSquares";

function Board({ rows, columns }) {
  const r = [];
  for (let i = 0; i < rows; i++) {
    r.push(<RowOfSquares key={i} columns={columns} />);
  }
  return (
    <div>
      {r}
    </div>
  );
}

export default Board;