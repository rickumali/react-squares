import './App.css';
import Square from './Square.js';

function App() {
  return (
    <div className="App">
      <p>Enter Row</p>
      <p>Enter Col</p>
      <div>
        <div className='board-row'>
          <Square/>
        </div>
      </div>
    </div>
  );
}

export default App;
