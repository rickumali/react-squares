import './App.css';
import Square from './Square.js';
import CountFieldEntry from './CountFieldEntry';

function App() {
  return (
    <div className="App">
      <CountFieldEntry name="Row"/>
      <CountFieldEntry name="Column"/>
      <div>
        <div className='board-row'>
          <Square/>
          <Square/>
          <Square/>
        </div>
        <div className='board-row'>
          <Square/>
          <Square/>
          <Square/>
        </div>
        <div className='board-row'>
          <Square/>
          <Square/>
          <Square/>
        </div>
      </div>
    </div>
  );
}

export default App;
