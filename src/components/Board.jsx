import React, { useState } from 'react';
import * as Functions from '../Functions.jsx';
import Container from './Container.jsx';

const Board = () => {
  const pebble = <div className='pebble'></div>;
  let pebbles = [pebble, pebble, pebble, pebble];
  const emptyContainer = [];

  const [count1, setCount1] = useState(pebbles);
  const [count2, setCount2] = useState(pebbles);
  const [count3, setCount3] = useState(pebbles);
  const [count4, setCount4] = useState(pebbles);
  const [count5, setCount5] = useState(pebbles);
  const [count6, setCount6] = useState(pebbles);
  const [countPointPlayer1, setCountPoint1] = useState(
    useState(emptyContainer)
  );
  const [count7, setCount7] = useState(pebbles);
  const [count8, setCount8] = useState(pebbles);
  const [count9, setCount9] = useState(pebbles);
  const [count10, setCount10] = useState(pebbles);
  const [count11, setCount11] = useState(pebbles);
  const [count12, setCount12] = useState(pebbles);
  const [countPointPlayer2, setCountPoint2] = useState(
    useState(emptyContainer)
  );

  function incrementCount1() {
    if (count1 === 1) {
      setCount2((prevCount) => prevCount + pebble);
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
    if (count1 === 1 && count2 === emptyContainer) {
      setCountPoint1(countPointPlayer1 + count11);
      setCount11(emptyContainer);
    }
    if (count1 === 2 && count3 === emptyContainer) {
      setCountPoint1(countPointPlayer1 + count10);
      setCount10(emptyContainer);
    }
    if (count1 === 3 && count4 === emptyContainer) {
      setCountPoint1(countPointPlayer1 + count9);
      setCount9(emptyContainer);
    }
    if (count1 === 4 && count5 === emptyContainer) {
      setCountPoint1(countPointPlayer1 + count8);
      setCount8(emptyContainer);
    }
    if (count1 === 5 && count6 === emptyContainer) {
      setCountPoint1(countPointPlayer1 + count7);
      setCount7(emptyContainer);
    }
    if (count1 === 15 && count2 === emptyContainer) {
      setCountPoint1(countPointPlayer1 + count11 + 1);
      setCount11(emptyContainer);
    }
    if (count1 === 16 && count3 === emptyContainer) {
      setCountPoint1(countPointPlayer1 + count10 + 1);
      setCount10(emptyContainer);
    }
    if (count1 === 17 && count4 === emptyContainer) {
      setCountPoint1(countPointPlayer1 + count9 + 1);
      setCount9(emptyContainer);
    }
    if (count1 === 18 && count5 === emptyContainer) {
      setCountPoint1(countPointPlayer1 + count8 + 1);
      setCount8(emptyContainer);
    }
    if (count1 === 19 && count6 === emptyContainer) {
      setCountPoint1(countPointPlayer1 + count7 + 1);
      setCount7(emptyContainer);
    }

    setCount1(emptyContainer);
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
    if (count2 === 1 && count3 === emptyContainer) {
      setCountPoint1(countPointPlayer1 + count10);
      setCount10(emptyContainer);
    }
    if (count2 === 2 && count4 === emptyContainer) {
      setCountPoint1(countPointPlayer1 + count9);
      setCount9(emptyContainer);
    }
    if (count2 === 3 && count5 === emptyContainer) {
      setCountPoint1(countPointPlayer1 + count8);
      setCount8(emptyContainer);
    }
    if (count2 === 4 && count6 === emptyContainer) {
      setCountPoint1(countPointPlayer1 + count7);
      setCount7(emptyContainer);
    }
    if (count2 === 15 && count3 === emptyContainer) {
      setCountPoint1(countPointPlayer1 + count10 + 1);
      setCount10(emptyContainer);
    }
    if (count2 === 16 && count4 === emptyContainer) {
      setCountPoint1(countPointPlayer1 + count9 + 1);
      setCount9(emptyContainer);
    }
    if (count2 === 17 && count5 === emptyContainer) {
      setCountPoint1(countPointPlayer1 + count8 + 1);
      setCount8(emptyContainer);
    }
    if (count2 === 18 && count6 === emptyContainer) {
      setCountPoint1(countPointPlayer1 + count7 + 1);
      setCount7(emptyContainer);
    }
    setCount2(emptyContainer);
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
    if (count3 === 1 && count4 === emptyContainer) {
      setCountPoint1(countPointPlayer1 + count9);
      setCount9(emptyContainer);
    }
    if (count3 === 2 && count5 === emptyContainer) {
      setCountPoint1(countPointPlayer1 + count8);
      setCount8(emptyContainer);
    }
    if (count3 === 3 && count6 === emptyContainer) {
      setCountPoint1(countPointPlayer1 + count7);
      setCount7(emptyContainer);
    }
    if (count3 === 15 && count4 === emptyContainer) {
      setCountPoint1(countPointPlayer1 + count9 + 1);
      setCount9(emptyContainer);
    }
    if (count3 === 16 && count5 === emptyContainer) {
      setCountPoint1(countPointPlayer1 + count8 + 1);
      setCount8(emptyContainer);
    }
    if (count3 === 17 && count6 === emptyContainer) {
      setCountPoint1(countPointPlayer1 + count7 + 1);
      setCount7(emptyContainer);
    }
    setCount3(emptyContainer);
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
    if (count4 === 1 && count5 === emptyContainer) {
      setCountPoint1(countPointPlayer1 + count8);
      setCount8(emptyContainer);
    }
    if (count4 === 2 && count6 === emptyContainer) {
      setCountPoint1(countPointPlayer1 + count7);
      setCount7(emptyContainer);
    }
    if (count4 === 15 && count5 === emptyContainer) {
      setCountPoint1(countPointPlayer1 + count8 + 1);
      setCount8(emptyContainer);
    }
    if (count4 === 16 && count6 === emptyContainer) {
      setCountPoint1(countPointPlayer1 + count7 + 1);
      setCount7(emptyContainer);
    }
    setCount4(emptyContainer);
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
    if (count5 === 1 && count6 === emptyContainer) {
      setCountPoint1(countPointPlayer1 + count7);
      setCount7(emptyContainer);
    }
    if (count5 === 15 && count6 === emptyContainer) {
      setCountPoint1(countPointPlayer1 + count7 + 1);
      setCount7(emptyContainer);
    }
    setCount5(emptyContainer);
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
    if (count6 === 9 && count1 === emptyContainer) {
      setCountPoint1(countPointPlayer1 + count12 + 1);
      setCount12(emptyContainer);
    }
    if (count6 === 10 && count2 === emptyContainer) {
      setCountPoint1(countPointPlayer1 + count11 + 1);
      setCount11(emptyContainer);
    }
    if (count6 === 11 && count3 === emptyContainer) {
      setCountPoint1(countPointPlayer1 + count10 + 1);
      setCount10(emptyContainer);
    }
    if (count6 === 12 && count4 === emptyContainer) {
      setCountPoint1(countPointPlayer1 + count9 + 1);
      setCount9(emptyContainer);
    }
    if (count6 === 13 && count5 === emptyContainer) {
      setCountPoint1(countPointPlayer1 + count8 + 1);
      setCount8(emptyContainer);
    }
    if (count6 === 14 && count6 === emptyContainer) {
      setCountPoint1(countPointPlayer1 + count7 + 1);
      setCount7(emptyContainer);
    }
    setCount6(emptyContainer);
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
    if (count7 === 1 && count8 === emptyContainer) {
      setCountPoint2(countPointPlayer2 + count5);
      setCount5(emptyContainer);
    }
    if (count7 === 2 && count9 === emptyContainer) {
      setCountPoint2(countPointPlayer2 + count4);
      setCount4(emptyContainer);
    }
    if (count7 === 3 && count10 === emptyContainer) {
      setCountPoint2(countPointPlayer2 + count3);
      setCount3(emptyContainer);
    }
    if (count7 === 4 && count11 === emptyContainer) {
      setCountPoint2(countPointPlayer2 + count2);
      setCount2(emptyContainer);
    }
    if (count7 === 5 && count12 === emptyContainer) {
      setCountPoint2(countPointPlayer2 + count1);
      setCount1(emptyContainer);
    }
    if (count7 === 15 && count8 === emptyContainer) {
      setCountPoint2(countPointPlayer2 + count5 + 1);
      setCount5(emptyContainer);
    }
    if (count7 === 16 && count9 === emptyContainer) {
      setCountPoint2(countPointPlayer2 + count4 + 1);
      setCount4(emptyContainer);
    }
    if (count7 === 17 && count10 === emptyContainer) {
      setCountPoint2(countPointPlayer2 + count3 + 1);
      setCount3(emptyContainer);
    }
    if (count7 === 18 && count11 === emptyContainer) {
      setCountPoint2(countPointPlayer2 + count2 + 1);
      setCount2(emptyContainer);
    }
    if (count7 === 19 && count12 === emptyContainer) {
      setCountPoint2(countPointPlayer2 + count1 + 1);
      setCount1(emptyContainer);
    }
    setCount7(emptyContainer);
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
    if (count8 === 1 && count9 === emptyContainer) {
      setCountPoint2(countPointPlayer2 + count4);
      setCount4(emptyContainer);
    }
    if (count8 === 2 && count10 === 0) {
      setCountPoint2(countPointPlayer2 + count3);
      setCount3(emptyContainer);
    }
    if (count8 === 3 && count11 === emptyContainer) {
      setCountPoint2(countPointPlayer2 + count2);
      setCount2(emptyContainer);
    }
    if (count8 === 4 && count12 === emptyContainer) {
      setCountPoint2(countPointPlayer2 + count1);
      setCount1();
    }
    if (count8 === 15 && count9 === emptyContainer) {
      setCountPoint2(countPointPlayer2 + count4 + 1);
      setCount4(emptyContainer);
    }
    if (count8 === 16 && count10 === emptyContainer) {
      setCountPoint2(countPointPlayer2 + count3 + 1);
      setCount3(emptyContainer);
    }
    if (count8 === 17 && count11 === emptyContainer) {
      setCountPoint2(countPointPlayer2 + count2 + 1);
      setCount2(emptyContainer);
    }
    if (count8 === 18 && count12 === emptyContainer) {
      setCountPoint2(countPointPlayer2 + count1 + 1);
      setCount1(emptyContainer);
    }
    setCount8(emptyContainer);
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
    if (count9 === 1 && count10 === emptyContainer) {
      setCountPoint2(countPointPlayer2 + count3);
      setCount3(emptyContainer);
    }
    if (count9 === 2 && count11 === emptyContainer) {
      setCountPoint2(countPointPlayer2 + count2);
      setCount2(emptyContainer);
    }
    if (count9 === 3 && count12 === emptyContainer) {
      setCountPoint2(countPointPlayer2 + count1);
      setCount1(emptyContainer);
    }
    if (count9 === 15 && count10 === emptyContainer) {
      setCountPoint2(countPointPlayer2 + count3 + 1);
      setCount3(emptyContainer);
    }
    if (count9 === 16 && count11 === emptyContainer) {
      setCountPoint2(countPointPlayer2 + count2 + 1);
      setCount2(emptyContainer);
    }
    if (count9 === 17 && count12 === emptyContainer) {
      setCountPoint2(countPointPlayer2 + count1 + 1);
      setCount1(emptyContainer);
    }
    setCount9(emptyContainer);
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
    if (count10 === 1 && count11 === emptyContainer) {
      setCountPoint2(countPointPlayer2 + count2);
      setCount2(emptyContainer);
    }
    if (count10 === 2 && count12 === emptyContainer) {
      setCountPoint2(countPointPlayer2 + count1);
      setCount1(emptyContainer);
    }
    if (count10 === 15 && count11 === emptyContainer) {
      setCountPoint2(countPointPlayer2 + count2 + 1);
      setCount2(emptyContainer);
    }
    if (count10 === 16 && count12 === emptyContainer) {
      setCountPoint2(countPointPlayer2 + count1 + 1);
      setCount1(emptyContainer);
    }
    setCount10(emptyContainer);
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
    if (count11 === 1 && count12 === emptyContainer) {
      setCountPoint2(countPointPlayer2 + count1);
      setCount1(emptyContainer);
    }
    if ((count11 === 15) & emptyContainer & (count12 === emptyContainer)) {
      setCountPoint2(countPointPlayer2 + count1 + 1);
      setCount1(emptyContainer);
    }
    setCount11(emptyContainer);
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
    if (count12 === 9 && count7 === emptyContainer) {
      setCountPoint2(countPointPlayer2 + count6 + 1);
      setCount6(emptyContainer);
    }
    if (count12 === 10 && count8 === emptyContainer) {
      setCountPoint2(countPointPlayer2 + count5 + 1);
      setCount5(emptyContainer);
    }
    if (count12 === 11 && count9 === emptyContainer) {
      setCountPoint2(countPointPlayer2 + count4 + 1);
      setCount4(emptyContainer);
    }
    if (count12 === 12 && count10 === emptyContainer) {
      setCountPoint2(countPointPlayer2 + count3 + 1);
      setCount3(emptyContainer);
    }
    if (count12 === 13 && count11 === emptyContainer) {
      setCountPoint2(countPointPlayer2 + count2 + 1);
      setCount2(emptyContainer);
    }
    if (count12 === 14 && count12 === emptyContainer) {
      setCountPoint2(countPointPlayer2 + count1 + 1);
      setCount1(emptyContainer);
    }
    setCount12(emptyContainer);
  }
  return (
    <div className='board'>
      <div className='player2Points'>{countPointPlayer2}</div>
      <div className='containers'>
        <div className='player2Containers'>
          <Container
            count={count12}
            containerFunction={() => {
              incrementCount12();
              Functions.textMoveContainer12();
            }}
          />
          <Container
            count={count11}
            containerFunction={() => {
              incrementCount11();
              Functions.textMoveContainer11();
            }}
          />
          <Container
            count={count10}
            containerFunction={() => {
              incrementCount10();
              Functions.textMoveContainer10();
            }}
          />
          <Container
            count={count9}
            containerFunction={() => {
              incrementCount9();
              Functions.textMoveContainer9();
            }}
          />
          <Container
            count={count8}
            containerFunction={() => {
              incrementCount8();
              Functions.textMoveContainer8();
            }}
          />
          <Container
            count={count7}
            containerFunction={() => {
              incrementCount7();
              Functions.textMoveContainer7();
            }}
          />
        </div>
        <div className='player1Containers'>
          <Container
            count={count1}
            containerFunction={() => {
              incrementCount1();
              Functions.textMoveContainer1();
            }}
          />
          <Container
            count={count2}
            containerFunction={() => {
              incrementCount2();
              Functions.textMoveContainer2();
            }}
          />
          <Container
            count={count3}
            containerFunction={() => {
              incrementCount3();
              Functions.textMoveContainer3();
            }}
          />
          <Container
            count={count4}
            containerFunction={() => {
              incrementCount4();
              Functions.textMoveContainer4();
            }}
          />
          <Container
            count={count5}
            containerFunction={() => {
              incrementCount5();
              Functions.textMoveContainer5();
            }}
          />
          <Container
            count={count6}
            containerFunction={() => {
              incrementCount6();
              Functions.textMoveContainer6();
            }}
          />
        </div>
      </div>
      <div className='player1Points'>{countPointPlayer1}</div>
    </div>
  );
};

export default Board;
