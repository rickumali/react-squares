import './App.css';
import CountFieldEntry from './CountFieldEntry';
import RowOfSquares from './RowOfSquares';

function App() {
  return (
    <div className="App">
      <CountFieldEntry name="Row"/>
      <CountFieldEntry name="Column"/>
      <div>
        <RowOfSquares columns={3}/>
        <RowOfSquares columns={3}/>
        <RowOfSquares columns={3}/>
        <RowOfSquares columns={3}/>
      </div>
    </div>
  );
}

export default App;
