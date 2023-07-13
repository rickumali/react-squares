import './App.css';
import Board from './Board';
import CountFieldEntry from './CountFieldEntry';

function App() {
  return (
    <div className="App">
      <CountFieldEntry name="Row"/>
      <CountFieldEntry name="Column"/>
      <Board rows={3} columns={3} />
    </div>
  );
}

export default App;
