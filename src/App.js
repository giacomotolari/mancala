import './App.css';
import * as Functions from './Functions.jsx';
import React, { useState } from 'react';

function App() {
  // const [decrement1, setDecrement1] = useState(count1);
  const [count1, setCount1] = useState(4);
  const [count2, setCount2] = useState(4);
  const [count3, setCount3] = useState(4);
  const [count4, setCount4] = useState(4);
  const [count5, setCount5] = useState(4);
  const [count6, setCount6] = useState(4);
  const [countPoint1, setCountPoint1] = useState(0);


  function incrementCount1() {
    if (count1 === 1) {
      setCount2((prevCount) => prevCount + 1);
    }
    if (count1 === 2) {
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
    }
    if (count1 === 3) {
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
    }
    if (count1 === 4) {
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
    }
    if (count1 === 5) {
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
    }
    if (count1 === 6) {
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
    }
    // if (count1 === 0) {
    //   setCount1((prevCount) => prevCount + 0);
    // }
    // if (count1 === 0) {
    //   setCount1((prevCount) => prevCount + 0);
    // }
    // if (count1 === 0) {
    //   setCount1((prevCount) => prevCount + 0);
    // }
    // if (count1 === 0) {
    //   setCount1((prevCount) => prevCount + 0);
    // }
    // if (count1 === 0) {
    //   setCount1((prevCount) => prevCount + 0);}
     else {
       setCount1((prevCount) => prevCount + 0);
    }

    setCount1(0);
  }
  // const [count2, setCount2] = useState(4);
  // const [decrement2, setDecrement2] = useState(count2);
  // function incrementCount2() {
  //   if (decrement2 === 0) {
  //     setCount2((prevCount) => prevCount + 0);
  //   } else {
  //     setCount2((prevCount) => prevCount + 1);
  //   }

  //   setDecrement2(0);
  // }
  return (
    <div className='App'>
      <h1>MANCALA</h1>
      <h3 id='text'> </h3>
      <div className='board'>
        <div className='player1Points'>{0}</div>
        <div className='containers'>
          <div className='player1Containers'>
            <div
              className='container'
              id='player1Container1'
              onClick={() => {
                incrementCount1();
                Functions.text1();
              }}
            >
              {count1}
            </div>
            <div
              className='container'
              id='player1Container2'
              onClick={() => {
                // incrementCount2();
              
                Functions.text2();
              }}
            >
              {count2}
            </div>
            <div
              className='container'
              id='player1Container3'
              onClick={() => {
                Functions.text3();
              }}
            >
              {count3}
            </div>
            <div
              className='container'
              id='player1Container4'
              onClick={() => {
                Functions.text4();
              }}
            >
              {count4}
            </div>
            <div
              className='container'
              id='player1Container5'
              onClick={() => {
                Functions.text5();
              }}
            >
              {count5}
            </div>
            <div
              className='container'
              id='player1Container6'
              onClick={() => {
                Functions.text6();
              }}
            >
              {count6}
            </div>
          </div>
          <div className='player2Containers'>
            <div
              className='container'
              id='player2Container1'
              onClick={() => {
                Functions.text7();
              }}
            >
              {4}
            </div>
            <div
              className='container'
              id='player2Container2'
              onClick={() => {
                Functions.text8();
              }}
            >
              {4}
            </div>
            <div
              className='container'
              id='player2Container3'
              onClick={() => {
                Functions.text9();
              }}
            >
              {4}
            </div>
            <div
              className='container'
              id='player2Container4'
              onClick={() => {
                Functions.text10();
              }}
            >
              {4}
            </div>
            <div
              className='container'
              id='player2Container5'
              onClick={() => {
                Functions.text11();
              }}
            >
              {4}
            </div>
            <div
              className='container'
              id='player2Container6'
              onClick={() => {
                Functions.text12();
              }}
            >
              {4}
            </div>
          </div>
        </div>
        <div className='player2Points'>{countPoint1}</div>
      </div>
    </div>
  );
}

export default App;
