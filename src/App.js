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
  const [countPointPlayer1, setCountPoint1] = useState(0);
  const [count7, setCount7] = useState(4);
  const [count8, setCount8] = useState(4);
  const [count9, setCount9] = useState(4);
  const [count10, setCount10] = useState(4);
  const [count11, setCount11] = useState(4);
  const [count12, setCount12] = useState(4);
  const [countPointPlayer2, setCountPoint2] = useState(0);

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
      Functions.oneRoundMore();
    }
    if (count1 === 7) {
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
    }
    if (count1 === 8) {
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
    }
    if (count1 === 9) {
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
    }
    if (count1 === 10) {
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
    }
    if (count1 === 11) {
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
    }
    if (count1 === 12) {
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
    }
    if (count1 === 13) {
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
    }
    setCount1(0);
  }
  function incrementCount2() {
    if (count2 === 1) {
      setCount3((prevCount) => prevCount + 1);
    }
    if (count2 === 2) {
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
    }
    if (count2 === 3) {
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
    }
    if (count2 === 4) {
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
    }
    if (count2 === 5) {
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      Functions.oneRoundMore();
    }
    if (count2 === 6) {
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
    }
    if (count2 === 7) {
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
    }
    if (count2 === 8) {
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
    }
    if (count2 === 9) {
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
    }
    if (count2 === 10) {
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
    }
    if (count2 === 11) {
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
    }
    if (count2 === 12) {
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
    }
    if (count2 === 13) {
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
    }
    setCount2(0);
  }
  function incrementCount3() {
    if (count3 === 1) {
      setCount4((prevCount) => prevCount + 1);
    }
    if (count3 === 2) {
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
    }
    if (count3 === 3) {
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
    }
    if (count3 === 4) {
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      Functions.oneRoundMore();
    }
    if (count3 === 5) {
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
    }
    if (count3 === 6) {
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
    }
    if (count3 === 7) {
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
    }
    if (count3 === 8) {
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
    }
    if (count3 === 9) {
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
    }
    if (count3 === 10) {
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
    }
    if (count3 === 11) {
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
    }
    if (count3 === 12) {
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
    }
    if (count3 === 13) {
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
    }
    setCount3(0);
  }
  function incrementCount4() {
    if (count4 === 1) {
      setCount5((prevCount) => prevCount + 1);
    }
    if (count4 === 2) {
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
    }
    if (count4 === 3) {
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      Functions.oneRoundMore();
    }
    if (count4 === 4) {
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
    }
    if (count4 === 5) {
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
    }
    if (count4 === 6) {
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
    }
    if (count4 === 7) {
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
    }
    if (count4 === 8) {
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
    }
    if (count4 === 9) {
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
    }
    if (count4 === 10) {
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
    }
    if (count4 === 11) {
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
    }
    if (count4 === 12) {
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
    }
    if (count4 === 13) {
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
    }
    setCount4(0);
  }
  function incrementCount5() {
    if (count5 === 1) {
      setCount6((prevCount) => prevCount + 1);
    }
    if (count5 === 2) {
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      Functions.oneRoundMore();
    }
    if (count5 === 3) {
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
    }
    if (count5 === 4) {
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
    }
    if (count5 === 5) {
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
    }
    if (count5 === 6) {
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
    }
    if (count5 === 7) {
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
    }
    if (count5 === 8) {
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
    }
    if (count5 === 9) {
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
    }
    if (count5 === 10) {
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
    }
    if (count5 === 11) {
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
    }
    if (count5 === 12) {
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
    }
    if (count5 === 13) {
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
    }
    setCount5(0);
  }
  function incrementCount6() {
    if (count6 === 1) {
      setCountPoint1((prevCount) => prevCount + 1);
      Functions.oneRoundMore();
    }
    if (count6 === 2) {
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
    }
    if (count6 === 3) {
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
    }
    if (count6 === 4) {
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
    }
    if (count6 === 5) {
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
    }
    if (count6 === 6) {
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
    }
    if (count6 === 7) {
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
    }
    if (count6 === 8) {
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
    }
    if (count6 === 9) {
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
    }
    if (count6 === 10) {
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
    }
    if (count6 === 11) {
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
    }
    if (count6 === 12) {
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
    }
    if (count6 === 13) {
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
    }
    setCount6(0);
  }
  function incrementCount7() {
    if (count7 === 1) {
      setCount8((prevCount) => prevCount + 1);
    }
    if (count7 === 2) {
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
    }
    if (count7 === 3) {
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
    }
    if (count7 === 4) {
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
    }
    if (count7 === 5) {
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
    }
    if (count7 === 6) {
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      Functions.oneRoundMore();
    }
    if (count7 === 7) {
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
    }
    if (count7 === 8) {
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
    }
    if (count7 === 9) {
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
    }
    if (count7 === 10) {
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
    }
    if (count7 === 11) {
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
    }
    if (count7 === 12) {
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
    }
    if (count7 === 13) {
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
    }
    setCount7(0);
  }
  function incrementCount8() {
    if (count8 === 1) {
      setCount9((prevCount) => prevCount + 1);
    }
    if (count8 === 2) {
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
    }
    if (count8 === 3) {
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
    }
    if (count8 === 4) {
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
    }
    if (count8 === 5) {
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      Functions.oneRoundMore();
    }
    if (count8 === 6) {
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
    }
    if (count8 === 7) {
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
    }
    if (count8 === 8) {
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
    }
    if (count8 === 9) {
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
    }
    if (count8 === 10) {
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
    }
    if (count8 === 11) {
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
    }
    if (count8 === 12) {
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
    }
    if (count8 === 13) {
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
    }
    setCount8(0);
  }
  function incrementCount9() {
    if (count9 === 1) {
      setCount10((prevCount) => prevCount + 1);
    }
    if (count9 === 2) {
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
    }
    if (count9 === 3) {
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
    }
    if (count9 === 4) {
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      Functions.oneRoundMore();
    }
    if (count9 === 5) {
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
    }
    if (count9 === 6) {
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
    }
    if (count9 === 7) {
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
    }
    if (count9 === 8) {
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
    }
    if (count9 === 9) {
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
    }
    if (count9 === 10) {
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
    }
    if (count9 === 11) {
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
    }
    if (count9 === 12) {
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
    }
    if (count9 === 13) {
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
    }
    setCount9(0);
  }
  function incrementCount10() {
    if (count10 === 1) {
      setCount11((prevCount) => prevCount + 1);
    }
    if (count10 === 2) {
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
    }
    if (count10 === 3) {
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      Functions.oneRoundMore();
    }
    if (count10 === 4) {
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
    }
    if (count10 === 5) {
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
    }
    if (count10 === 6) {
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
    }
    if (count10 === 7) {
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
    }
    if (count10 === 8) {
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
    }
    if (count10 === 9) {
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
    }
    if (count10 === 10) {
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
    }
    if (count10 === 11) {
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
    }
    if (count10 === 12) {
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
    }
    if (count10 === 13) {
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
    }
    setCount10(0);
  }
  function incrementCount11() {
    if (count11 === 1) {
      setCount12((prevCount) => prevCount + 1);
    }
    if (count11 === 2) {
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      Functions.oneRoundMore();
    }
    if (count11 === 3) {
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
    }
    if (count11 === 4) {
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
    }
    if (count11 === 5) {
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
    }
    if (count11 === 6) {
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
    }
    if (count11 === 7) {
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
    }
    if (count11 === 8) {
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
    }
    if (count11 === 9) {
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
    }
    if (count11 === 10) {
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
    }
    if (count11 === 11) {
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
    }
    if (count11 === 12) {
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
    }
    if (count11 === 13) {
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
    }
    setCount11(0);
  }
  function incrementCount12() {
    if (count12 === 1) {
      setCountPoint2((prevCount) => prevCount + 1);
      Functions.oneRoundMore();
    }
    if (count12 === 2) {
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
    }
    if (count12 === 3) {
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
    }
    if (count12 === 4) {
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
    }
    if (count12 === 5) {
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
    }
    if (count12 === 6) {
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
    }
    if (count12 === 7) {
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
    }
    if (count12 === 8) {
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
    }
    if (count12 === 9) {
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
    }
    if (count12 === 10) {
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
    }
    if (count12 === 11) {
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
    }
    if (count12 === 12) {
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
    }
    if (count12 === 13) {
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
    }
    setCount12(0);
  }
  return (
    <div className='App'>
      <h1>MANCALA</h1>
      <h2 id='Specialtext'> </h2>
      <h3 id='text'> </h3>
      <div className='board'>
        <div className='player2Points'>{countPointPlayer2}</div>
        <div className='containers'>
          <div className='player2Containers'>
            <div
              className='container'
              id='player2Container12'
              onClick={() => {
                incrementCount12();
                Functions.textMoveContainer12();
              }}
            >
              {count12}
            </div>
            <div
              className='container'
              id='player2Container11'
              onClick={() => {
                incrementCount11();
                Functions.textMoveContainer11();
              }}
            >
              {count11}
            </div>
            <div
              className='container'
              id='player2Container10'
              onClick={() => {
                incrementCount10();
                Functions.textMoveContainer10();
              }}
            >
              {count10}
            </div>
            <div
              className='container'
              id='player2Container9'
              onClick={() => {
                incrementCount9();
                Functions.textMoveContainer4();
              }}
            >
              {count9}
            </div>
            <div
              className='container'
              id='player2Container8'
              onClick={() => {
                incrementCount8();
                Functions.textMoveContainer8();
              }}
            >
              {count8}
            </div>
            <div
              className='container'
              id='player2Container7'
              onClick={() => {
                incrementCount7();
                Functions.textMoveContainer7();
              }}
            >
              {count7}
            </div>
          </div>
          <div className='player1Containers'>
            <div
              className='container'
              id='player1Container1'
              onClick={() => {
                incrementCount1();
                Functions.textMoveContainer1();
              }}
            >
              {count1}
            </div>
            <div
              className='container'
              id='player1Container2'
              onClick={() => {
                incrementCount2();
                Functions.textMoveContainer2();
              }}
            >
              {count2}
            </div>
            <div
              className='container'
              id='player1Container3'
              onClick={() => {
                incrementCount3();
                Functions.textMoveContainer3();
              }}
            >
              {count3}
            </div>
            <div
              className='container'
              id='player1Container4'
              onClick={() => {
                incrementCount4();
                Functions.textMoveContainer4();
              }}
            >
              {count4}
            </div>
            <div
              className='container'
              id='player1Container5'
              onClick={() => {
                incrementCount5();
                Functions.textMoveContainer5();
              }}
            >
              {count5}
            </div>
            <div
              className='container'
              id='player1Container6'
              onClick={() => {
                incrementCount6();
                Functions.textMoveContainer6();
              }}
            >
              {count6}
            </div>
          </div>
        </div>
        <div className='player1Points'>{countPointPlayer1}</div>
      </div>
    </div>
  );
}

export default App;
