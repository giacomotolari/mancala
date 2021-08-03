import './App.css';
import * as Functions from './Functions.jsx';
function App() {
  return (
    <div className='App'>
      <p>MANCALA</p>
      <div className='board'>
        <div className='player1Points'>{0}</div>
        <div className='containers'>
          <div className='player1Containers'>
            <div
              className='container'
              id='player1Container1'
              onClick={Functions.movePebblesContainer1}
            >
              {4}
              {/* <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div> */}
            </div>
            <div className='container' id='player1Container2'>
              {4}
              {/* <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div> */}
            </div>
            <div className='container' id='player1Container3'>
              {4}
              {/* <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div> */}
            </div>
            <div className='container' id='player1Container4'>
              {4}
              {/* <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div> */}
            </div>
            <div className='container' id='player1Container5'>
              {4}
              {/* <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div> */}
            </div>
            <div className='container' id='player1Container6'>
              {4}
              {/* <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div> */}
            </div>
          </div>
          <div className='player2Containers'>
            <div className='container' id='player2Container1'>
              {4}
              {/* <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div> */}
            </div>
            <div className='container' id='player2Container2'>
              {4}
              {/* <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div> */}
            </div>
            <div className='container' id='player2Container3'>
              {4}
              {/* <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div> */}
            </div>
            <div className='container' id='player2Container4'>
              {4}
              {/* <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div> */}
            </div>
            <div className='container' id='player2Container5'>
              {4}
              {/* <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div> */}
            </div>
            <div className='container' id='player2Container6'>
              {4}
              {/* <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div> */}
            </div>
          </div>
        </div>
        <div className='player2Points'>{0}</div>
      </div>
    </div>
  );
}

export default App;
