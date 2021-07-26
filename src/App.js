import './App.css';

function App() {
  return (
    <div className='App'>
      <p>MANCALA</p>
      <div className='board'>
        <div className='player1Points'></div>
        <div className='containers'>
          <div className='player1Containers'>
            <div className='container' id='player1Container1'>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
            </div>
            <div className='container' id='player1Container2'>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
            </div>
            <div className='container' id='player1Container3'>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
            </div>
            <div className='container' id='player1Container4'>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
            </div>
            <div className='container' id='player1Container5'>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
            </div>
            <div className='container' id='player1Container6'>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
            </div>
          </div>
          <div className='player2Containers'>
            <div className='container' id='player2Container1'>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
            </div>
            <div className='container' id='player2Container2'>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
            </div>
            <div className='container' id='player2Container3'>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
            </div>
            <div className='container' id='player2Container4'>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
            </div>
            <div className='container' id='player2Container5'>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
            </div>
            <div className='container' id='player2Container6'>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
            </div>
          </div>
        </div>
        <div className='player2Points'></div>
      </div>
    </div>
  );
}

export default App;
