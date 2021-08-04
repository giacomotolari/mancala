import './App.css';
import * as Functions from './Functions.jsx';
import React, { useState } from 'react';
// import Container from './Container';
function App() {
  let pointPLayer1 = 0;
  let container1 = 4;
  let container2 = 4;
  let container3 = 4;
  let container4 = 4;
  let container5 = 4;
  let container6 = 4;
  let pointPLayer2 = 0;
  let container7 = 4;
  let container8 = 4;
  let container9 = 4;
  let container10 = 4;
  let container11 = 4;
  let container12 = 4;

  const [count1, setCount1] = useState(0);
  const increment1 = () => {
    setCount1(count1 + 1);
  };
  function decrement1() {
    container1 = 0;
  }

  const [count2, setCount2] = useState(0);
  const increment2 = () => {
    setCount2(count2 + 1);
  };
  const [count3, setCount3] = useState(0);
  const increment3 = () => {
    setCount3(count3 + 1);
  };
  const [count4, setCount4] = useState(0);
  const increment4 = () => {
    setCount4(count4 + 1);
  };
  const [count5, setCount5] = useState(0);
  const increment5 = () => {
    setCount5(count5 + 1);
  };
  const [count6, setCount6] = useState(0);
  const increment6 = () => {
    setCount6(count6 + 1);
  };
  const [count7, setCount7] = useState(0);
  const increment7 = () => {
    setCount7(count7 + 1);
  };
  const [count8, setCount8] = useState(0);
  const increment8 = () => {
    setCount8(count8 + 1);
  };
  const [count9, setCount9] = useState(0);
  const increment9 = () => {
    setCount9(count9 + 1);
  };
  const [count10, setCount10] = useState(0);
  const increment10 = () => {
    setCount10(count10 + 1);
  };
  const [count11, setCount11] = useState(0);
  const increment11 = () => {
    setCount11(count11 + 1);
  };
  const [count12, setCount12] = useState(0);
  const increment12 = () => {
    setCount12(count12 + 1);
  };

  return (
    <div className='App'>
      <h1>MANCALA</h1>
      <h3 id='text'> </h3>
      <div className='board'>
        <div className='player1Points'>{pointPLayer1}</div>
        <div className='containers'>
          <div className='player1Containers'>
            <div
              className='container'
              id='player1Container1'
              onClick={() => {
                increment1();
                decrement1();
                Functions.text1();
              }}
            >
              {container1}
              {/* <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div> */}
            </div>
            <div
              className='container'
              id='player1Container2'
              onClick={() => {
                increment2();
                // decrement2();
                Functions.text2();
              }}
            >
              {container2 + count1}
              {/* <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div> */}
            </div>
            <div
              className='container'
              id='player1Container3'
              onClick={() => {
                increment1();
                decrement1();
                Functions.text3();
              }}
            >
              {container3 + count1 + count2}
              {/* <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div> */}
            </div>
            <div
              className='container'
              id='player1Container4'
              onClick={() => {
                increment1();
                decrement1();
                Functions.text4();
              }}
            >
              {container4 + count1 + count2 + count3}
              {/* <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div> */}
            </div>
            <div
              className='container'
              id='player1Container5'
              onClick={() => {
                increment1();
                decrement1();
                Functions.text5();
              }}
            >
              {container5}
              {/* <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div> */}
            </div>
            <div
              className='container'
              id='player1Container6'
              onClick={() => {
                increment1();
                decrement1();
                Functions.text6();
              }}
            >
              {container6}
              {/* <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div> */}
            </div>
          </div>
          <div className='player2Containers'>
            <div
              className='container'
              id='player2Container1'
              onClick={() => {
                increment1();
                decrement1();
                Functions.text7();
              }}
            >
              {container7}
              {/* <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div> */}
            </div>
            <div
              className='container'
              id='player2Container2'
              onClick={() => {
                increment1();
                decrement1();
                Functions.text8();
              }}
            >
              {container8}
              {/* <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div> */}
            </div>
            <div
              className='container'
              id='player2Container3'
              onClick={() => {
                increment1();
                decrement1();
                Functions.text9();
              }}
            >
              {container9}
              {/* <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div> */}
            </div>
            <div
              className='container'
              id='player2Container4'
              onClick={() => {
                increment1();
                decrement1();
                Functions.text10();
              }}
            >
              {container10}
              {/* <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div> */}
            </div>
            <div
              className='container'
              id='player2Container5'
              onClick={() => {
                increment1();
                decrement1();
                Functions.text11();
              }}
            >
              {container11}
              {/* <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div> */}
            </div>
            <div
              className='container'
              id='player2Container6'
              onClick={() => {
                increment1();
                decrement1();
                Functions.text12();
              }}
            >
              {container12}
              {/* <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div> */}
            </div>
          </div>
        </div>
        <div className='player2Points'>{pointPLayer2}</div>
      </div>
    </div>
  );
}

export default App;
