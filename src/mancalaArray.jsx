import './App.css';
import * as Functions from './Functions.jsx';
import React, { useState } from 'react';
// import Container from './Container';
function App() {

  // let mancalaBoard = [4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0];
  // const container1 = () => {
  //   for (let i = 1; i <= mancalaBoard[0]; i++) {
  //     mancalaBoard[i] += 1;
  //   }
  //   mancalaBoard[0] = 0;
    
  // };
  
  // const [count1, setCount1] = useState(0);
  // const [deCount1, setDeCount1] = useState(0);
  // const [count2, setCount2] = useState(0);
  // const [deCount2, setDeCount2] = useState(0);
  return (
    <div className='App'>
      <h1>MANCALA</h1>
      <h3 id='text'> </h3>
      <div className='board'>
        <div className='player1Points'>{mancalaBoard[13]}</div>
        <div className='containers'>
          <div className='player1Containers'>
            <div
              className='container'
              id='player1Container1'
              onClick={() => {
                // setCount1(count1 + 1);
                // setDeCount1(deCount1 - count1);
                // increment1();
                // decrement1();
                container1();
                Functions.text1();
              }}
            >
              {mancalaBoard[0]}
              {/* <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div> */}
            </div>
            <div
              className='container'
              id='player1Container2'
              onClick={() => {
                // setCount1(count1 + 1);
                // setDeCount1(deCount1 - count1);

                // increment1();
                // decrement2();
                Functions.text2();
              }}
            >
              {mancalaBoard[1]}
              {/* <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div> */}
            </div>
            <div
              className='container'
              id='player1Container3'
              onClick={() => {
                // increment1();
                // decrement1();
                Functions.text3();
              }}
            >
              {mancalaBoard[2]}
              {/* <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div> */}
            </div>
            <div
              className='container'
              id='player1Container4'
              onClick={() => {
                // increment1();
                // decrement1();
                Functions.text4();
              }}
            >
              {mancalaBoard[3]}
              {/* <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div> */}
            </div>
            <div
              className='container'
              id='player1Container5'
              onClick={() => {
                // increment1();
                // decrement1();
                Functions.text5();
              }}
            >
              {mancalaBoard[4]}
              {/* <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div> */}
            </div>
            <div
              className='container'
              id='player1Container6'
              onClick={() => {
                // increment1();
                // decrement1();
                Functions.text6();
              }}
            >
              {mancalaBoard[5]}
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
                // increment1();
                // decrement1();
                Functions.text7();
              }}
            >
              {mancalaBoard[7]}
              {/* <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div> */}
            </div>
            <div
              className='container'
              id='player2Container2'
              onClick={() => {
                // increment1();
                // decrement1();
                Functions.text8();
              }}
            >
              {mancalaBoard[8]}
              {/* <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div> */}
            </div>
            <div
              className='container'
              id='player2Container3'
              onClick={() => {
                // increment1();
                // decrement1();
                Functions.text9();
              }}
            >
              {mancalaBoard[9]}
              {/* <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div> */}
            </div>
            <div
              className='container'
              id='player2Container4'
              onClick={() => {
                // increment1();
                // decrement1();
                Functions.text10();
              }}
            >
              {mancalaBoard[10]}
              {/* <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div> */}
            </div>
            <div
              className='container'
              id='player2Container5'
              onClick={() => {
                // increment1();
                // decrement1();
                Functions.text11();
              }}
            >
              {mancalaBoard[11]}
              {/* <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div> */}
            </div>
            <div
              className='container'
              id='player2Container6'
              onClick={() => {
                // increment1();
                // decrement1();
                Functions.text12();
              }}
            >
              {mancalaBoard[11]}
              {/* <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div>
              <div className='pebble'></div> */}
            </div>
          </div>
        </div>
        <div className='player2Points'>{mancalaBoard[6]}</div>
      </div>
    </div>
  );
}

export default App;
