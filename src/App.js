import { useState } from 'react';
import './App.css';
import Board from './Board';
import CountFieldEntry from './CountFieldEntry';

function App() {
  const [rowCount, setRowCount] = useState(5);
  const [columnCount, setColumnCount] = useState(6);

  return (
    <div className="App">
      <CountFieldEntry name="Row" value={rowCount} />
      <CountFieldEntry name="Column" value={columnCount} />
      <Board rows={rowCount} columns={columnCount} />
    </div>
  );
}

export default App;
