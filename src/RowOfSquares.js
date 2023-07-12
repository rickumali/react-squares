import Square from "./Square";

function RowOfSquares({ columns}) {
  const cols = [];
  for (let i = 0; i < columns; i++) {
    cols.push(<Square key={i}/>);
  }
  return (
    <div className="board-row">
      { cols }
    </div>
  );
}

export default RowOfSquares;