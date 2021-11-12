import React, { useState } from 'react';
import * as textsFunctions from './textsFunctions.jsx';
import Container from './containers/Container';
import PointsContainer from './containers/PointsContainer';
import audio1 from './pebbleSound.mp3';
// import audio2 from './sound2.mp3';
// import audio3 from './sound3.mp3';
import './board.css';

const Board = () => {
  const [containers, setContainers] = useState(new Array(12).fill(4));
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
  const [disablePlayer1, setDisablePlayer1] = React.useState(false);
  const [disablePlayer2, setDisablePlayer2] = React.useState(true);

  const containersOfPlayer1 = [count1, count2, count3, count4, count5, count6];
  const containersOfPlayer2 = [
    count7,
    count8,
    count9,
    count10,
    count11,
    count12,
  ];

  let sumContainersOfPlayer1 = containersOfPlayer1.reduce(
    (prev, curr) => prev + curr
  );

  let sumContainersOfPlayer2 = containersOfPlayer2.reduce(
    (prev, curr) => prev + curr
  );

  function getWinner() {
    if (countPointPlayer2 > countPointPlayer1) {
      textsFunctions.winnerPlayer2Text(
        countPointPlayer2 + sumContainersOfPlayer2
      );
    }
    if (countPointPlayer2 < countPointPlayer1) {
      textsFunctions.winnerPlayer1Text(
        countPointPlayer1 + sumContainersOfPlayer1
      );
    }
    if (
      countPointPlayer2 + sumContainersOfPlayer2 ===
      countPointPlayer1 + sumContainersOfPlayer1
    ) {
      textsFunctions.drawText();
    }
  }

  function disablePlayer1EnablePlayer2() {
    setDisablePlayer1(true);
    setDisablePlayer2(false);
    document.getElementById('roundOftext').innerHTML = 'PLAYER 2 PLAYS';
  }
  function disablePlayer2EnablePlayer1() {
    setDisablePlayer2(true);
    setDisablePlayer1(false);
    document.getElementById('roundOftext').innerHTML = 'PLAYER 1 PLAYS';
  }
  function onCleanSpecialText() {
    if (
      count1 !== 6 ||
      count2 !== 5 ||
      count3 !== 4 ||
      count4 !== 3 ||
      count5 !== 2 ||
      count6 !== 1 ||
      count7 !== 6 ||
      count8 !== 5 ||
      count9 !== 4 ||
      count10 !== 3 ||
      count11 !== 2 ||
      count12 !== 1
    ) {
      textsFunctions.cleanSpecialText();
    }
    if (
      count1 === 0 &&
      count2 === 0 &&
      count3 === 0 &&
      count4 === 0 &&
      count5 === 0 &&
      count6 === 0
    ) {
      textsFunctions.cleanSpecialText();
    }
    if (
      count7 === 0 &&
      count8 === 0 &&
      count9 === 0 &&
      count10 === 0 &&
      count11 === 0 &&
      count12 === 0
    ) {
      textsFunctions.cleanSpecialText();
    }
  }
  function onCleanSpecialTextWennPlayEnd() {
    if (
      count1 === 0 &&
      count2 === 0 &&
      count3 === 0 &&
      count4 === 0 &&
      count5 === 0 &&
      count6 === 0
    ) {
      textsFunctions.cleanSpecialText();
    }
  }

  const moveStones = (index) => {
    let pebbles = containers[index];
    if (pebbles + index === 7 || pebbles + index === 13) {
      textsFunctions.oneRoundMore();
    }
  };

  function container1() {
    if (count1 === 1) {
      setCount2((prevCount) => prevCount + 1);
      disablePlayer1EnablePlayer2();
    }
    if (count1 === 2) {
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      disablePlayer1EnablePlayer2();
    }
    if (count1 === 3) {
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      disablePlayer1EnablePlayer2();
    }
    if (count1 === 4) {
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      disablePlayer1EnablePlayer2();
    }
    if (count1 === 5) {
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      disablePlayer1EnablePlayer2();
    }
    if (count1 === 6) {
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      disablePlayer1EnablePlayer2();
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      textsFunctions.oneRoundMore();
    }
    if (count1 === 7) {
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      disablePlayer1EnablePlayer2();
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
      disablePlayer1EnablePlayer2();
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
      disablePlayer1EnablePlayer2();
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
      disablePlayer1EnablePlayer2();
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
      disablePlayer1EnablePlayer2();
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
      disablePlayer1EnablePlayer2();
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
      disablePlayer1EnablePlayer2();
    }

    if (count1 === 1 && count2 === 0) {
      setCountPoint1(countPointPlayer1 + count11);
      setCount11(0);
      disablePlayer1EnablePlayer2();
    }
    if (count1 === 2 && count3 === 0) {
      setCountPoint1(countPointPlayer1 + count10);
      setCount10(0);
      disablePlayer1EnablePlayer2();
    }
    if (count1 === 3 && count4 === 0) {
      setCountPoint1(countPointPlayer1 + count9);
      setCount9(0);
      disablePlayer1EnablePlayer2();
    }
    if (count1 === 4 && count5 === 0) {
      setCountPoint1(countPointPlayer1 + count9);
      setCount8(0);
      disablePlayer1EnablePlayer2();
    }
    if (count1 === 5 && count6 === 0) {
      setCountPoint1(countPointPlayer1 + count7);
      setCount7(0);
      disablePlayer1EnablePlayer2();
    }
    if (count1 === 15 && count7 === 0) {
      setCountPoint1(countPointPlayer1 + count11 + 1);
      setCount11(0);
      disablePlayer1EnablePlayer2();
    }
    if (count1 === 16 && count3 === 0) {
      setCountPoint1(countPointPlayer1 + count10 + 1);
      setCount10(0);
      disablePlayer1EnablePlayer2();
    }
    if (count1 === 17 && count4 === 0) {
      setCountPoint1(countPointPlayer1 + count9 + 1);
      setCount9(0);
      disablePlayer1EnablePlayer2();
    }
    if (count1 === 18 && count5 === 0) {
      setCountPoint1(countPointPlayer1 + count8 + 1);
      setCount8(0);
      disablePlayer1EnablePlayer2();
    }
    if (count1 === 19 && count6 === 0) {
      setCountPoint1(countPointPlayer1 + count7 + 1);
      setCount7(0);
      disablePlayer1EnablePlayer2();
    }

    setCount1(0);
  }

  const container2 = () => {
    if (count2 === 1) {
      setCount3((prevCount) => prevCount + 1);
      disablePlayer1EnablePlayer2();
    }
    if (count2 === 2) {
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      disablePlayer1EnablePlayer2();
    }
    if (count2 === 3) {
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      disablePlayer1EnablePlayer2();
    }
    if (count2 === 4) {
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      disablePlayer1EnablePlayer2();
    }
    if (count2 === 5) {
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      textsFunctions.oneRoundMore();
      disablePlayer2EnablePlayer1();
    }
    if (count2 === 6) {
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      disablePlayer1EnablePlayer2();
    }
    if (count2 === 7) {
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      disablePlayer1EnablePlayer2();
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
      disablePlayer1EnablePlayer2();
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
      disablePlayer1EnablePlayer2();
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
      disablePlayer1EnablePlayer2();
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
      disablePlayer1EnablePlayer2();
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
      disablePlayer1EnablePlayer2();
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
      disablePlayer1EnablePlayer2();
    }
    if (count2 === 1 && count3 === 0) {
      setCountPoint1(countPointPlayer1 + count10);
      setCount10(0);
      disablePlayer1EnablePlayer2();
    }
    if (count2 === 2 && count4 === 0) {
      setCountPoint1(countPointPlayer1 + count9);
      setCount9(0);
      disablePlayer1EnablePlayer2();
    }
    if (count2 === 3 && count5 === 0) {
      setCountPoint1(countPointPlayer1 + count8);
      setCount8(0);
      disablePlayer1EnablePlayer2();
    }
    if (count2 === 4 && count6 === 0) {
      setCountPoint1(countPointPlayer1 + count7);
      setCount7(0);
      disablePlayer1EnablePlayer2();
    }
    if (count2 === 15 && count3 === 0) {
      setCountPoint1(countPointPlayer1 + count10 + 1);
      setCount10(0);
      disablePlayer1EnablePlayer2();
    }
    if (count2 === 16 && count4 === 0) {
      setCountPoint1(countPointPlayer1 + count9 + 1);
      setCount9(0);
      disablePlayer1EnablePlayer2();
    }
    if (count2 === 17 && count5 === 0) {
      setCountPoint1(countPointPlayer1 + count8 + 1);
      setCount8(0);
      disablePlayer1EnablePlayer2();
    }
    if (count2 === 18 && count6 === 0) {
      setCountPoint1(countPointPlayer1 + count7 + 1);
      setCount7(0);
      disablePlayer1EnablePlayer2();
    }

    setCount2(0);
  };
  function container3() {
    if (count3 === 1) {
      setCount4((prevCount) => prevCount + 1);
      disablePlayer1EnablePlayer2();
    }
    if (count3 === 2) {
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      disablePlayer1EnablePlayer2();
    }
    if (count3 === 3) {
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      disablePlayer1EnablePlayer2();
    }
    if (count3 === 4) {
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      textsFunctions.oneRoundMore();
      disablePlayer2EnablePlayer1();
    }
    if (count3 === 5) {
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      disablePlayer1EnablePlayer2();
    }
    if (count3 === 6) {
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      disablePlayer1EnablePlayer2();
    }
    if (count3 === 7) {
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      disablePlayer1EnablePlayer2();
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
      disablePlayer1EnablePlayer2();
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
      disablePlayer1EnablePlayer2();
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
      disablePlayer1EnablePlayer2();
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
      disablePlayer1EnablePlayer2();
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
      disablePlayer1EnablePlayer2();
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
      disablePlayer1EnablePlayer2();
    }
    if (count3 === 1 && count4 === 0) {
      setCountPoint1(countPointPlayer1 + count9);
      setCount9(0);
      disablePlayer1EnablePlayer2();
    }
    if (count3 === 2 && count5 === 0) {
      setCountPoint1(countPointPlayer1 + count8);
      setCount8(0);
      disablePlayer1EnablePlayer2();
    }
    if (count3 === 3 && count6 === 0) {
      setCountPoint1(countPointPlayer1 + count7);
      setCount7(0);
      disablePlayer1EnablePlayer2();
    }
    if (count3 === 15 && count4 === 0) {
      setCountPoint1(countPointPlayer1 + count9 + 1);
      setCount9(0);
      disablePlayer1EnablePlayer2();
    }
    if (count3 === 16 && count5 === 0) {
      setCountPoint1(countPointPlayer1 + count8 + 1);
      setCount8(0);
      disablePlayer1EnablePlayer2();
    }
    if (count3 === 17 && count6 === 0) {
      setCountPoint1(countPointPlayer1 + count7 + 1);
      setCount7(0);
      disablePlayer1EnablePlayer2();
    }

    setCount3(0);
  }
  function container4() {
    if (count4 === 1) {
      setCount5((prevCount) => prevCount + 1);
      disablePlayer1EnablePlayer2();
    }
    if (count4 === 2) {
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      disablePlayer1EnablePlayer2();
    }
    if (count4 === 3) {
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      textsFunctions.oneRoundMore();
      disablePlayer2EnablePlayer1();
    }
    if (count4 === 4) {
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      disablePlayer1EnablePlayer2();
    }
    if (count4 === 5) {
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      disablePlayer1EnablePlayer2();
    }
    if (count4 === 6) {
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      disablePlayer1EnablePlayer2();
    }
    if (count4 === 7) {
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      disablePlayer1EnablePlayer2();
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
      disablePlayer1EnablePlayer2();
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
      disablePlayer1EnablePlayer2();
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
      disablePlayer1EnablePlayer2();
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
      disablePlayer1EnablePlayer2();
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
      disablePlayer1EnablePlayer2();
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
      disablePlayer1EnablePlayer2();
    }
    if (count4 === 1 && count5 === 0) {
      setCountPoint1(countPointPlayer1 + count8);
      setCount8(0);
      disablePlayer1EnablePlayer2();
    }
    if (count4 === 2 && count6 === 0) {
      setCountPoint1(countPointPlayer1 + count7);
      setCount7(0);
      disablePlayer1EnablePlayer2();
    }
    if (count4 === 15 && count5 === 0) {
      setCountPoint1(countPointPlayer1 + count8 + 1);
      setCount8(0);
      disablePlayer1EnablePlayer2();
    }
    if (count4 === 16 && count6 === 0) {
      setCountPoint1(countPointPlayer1 + count7 + 1);
      setCount7(0);
      disablePlayer1EnablePlayer2();
    }

    setCount4(0);
  }
  function container5() {
    if (count5 === 1) {
      setCount6((prevCount) => prevCount + 1);
      disablePlayer1EnablePlayer2();
    }
    if (count5 === 2) {
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      textsFunctions.oneRoundMore();
      disablePlayer2EnablePlayer1();
    }
    if (count5 === 3) {
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      disablePlayer1EnablePlayer2();
    }
    if (count5 === 4) {
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      disablePlayer1EnablePlayer2();
    }
    if (count5 === 5) {
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      disablePlayer1EnablePlayer2();
    }
    if (count5 === 6) {
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      disablePlayer1EnablePlayer2();
    }
    if (count5 === 7) {
      setCount6((prevCount) => prevCount + 1);
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      disablePlayer1EnablePlayer2();
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
      disablePlayer1EnablePlayer2();
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
      disablePlayer1EnablePlayer2();
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
      disablePlayer1EnablePlayer2();
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
      disablePlayer1EnablePlayer2();
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
      disablePlayer1EnablePlayer2();
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
      disablePlayer1EnablePlayer2();
    }
    if (count5 === 1 && count6 === 0) {
      setCountPoint1(countPointPlayer1 + count7);
      setCount7(0);
      disablePlayer1EnablePlayer2();
    }
    if (count5 === 15 && count6 === 0) {
      setCountPoint1(countPointPlayer1 + count7 + 1);
      setCount7(0);
      disablePlayer1EnablePlayer2();
    }

    setCount5(0);
  }
  function container6() {
    if (count6 === 1) {
      setCountPoint1((prevCount) => prevCount + 1);
      textsFunctions.oneRoundMore();
      disablePlayer2EnablePlayer1();
    }

    if (count6 === 2) {
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      disablePlayer1EnablePlayer2();
    }
    if (count6 === 3) {
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      disablePlayer1EnablePlayer2();
    }
    if (count6 === 4) {
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      disablePlayer1EnablePlayer2();
    }
    if (count6 === 5) {
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      disablePlayer1EnablePlayer2();
    }
    if (count6 === 6) {
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      disablePlayer1EnablePlayer2();
    }
    if (count6 === 7) {
      setCountPoint1((prevCount) => prevCount + 1);
      setCount7((prevCount) => prevCount + 1);
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      disablePlayer1EnablePlayer2();
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
      disablePlayer1EnablePlayer2();
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
      disablePlayer1EnablePlayer2();
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
      disablePlayer1EnablePlayer2();
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
      disablePlayer1EnablePlayer2();
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
      disablePlayer1EnablePlayer2();
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
      disablePlayer1EnablePlayer2();
    }
    if (count6 === 9 && count1 === 0) {
      setCountPoint1(countPointPlayer1 + count12 + 1);
      setCount12(0);
      disablePlayer1EnablePlayer2();
    }
    if (count6 === 10 && count2 === 0) {
      setCountPoint1(countPointPlayer1 + count11 + 1);
      setCount11(0);
      disablePlayer1EnablePlayer2();
    }
    if (count6 === 11 && count3 === 0) {
      setCountPoint1(countPointPlayer1 + count10 + 1);
      setCount10(0);
      disablePlayer1EnablePlayer2();
    }
    if (count6 === 12 && count4 === 0) {
      setCountPoint1(countPointPlayer1 + count9 + 1);
      setCount9(0);
      disablePlayer1EnablePlayer2();
    }
    if (count6 === 13 && count5 === 0) {
      setCountPoint1(countPointPlayer1 + count8 + 1);
      setCount8(0);
      disablePlayer1EnablePlayer2();
    }
    if (count6 === 14 && count6 === 0) {
      setCountPoint1(countPointPlayer1 + count7 + 1);
      setCount7(0);
      disablePlayer1EnablePlayer2();
    }

    setCount6(0);
  }
  function container7() {
    if (count7 === 1) {
      setCount8((prevCount) => prevCount + 1);
      disablePlayer2EnablePlayer1();
    }
    if (count7 === 2) {
      setCount8((prevCount) => prevCount + 1);
      disablePlayer2EnablePlayer1();
      setCount9((prevCount) => prevCount + 1);
    }
    if (count7 === 3) {
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      disablePlayer2EnablePlayer1();
      setCount10((prevCount) => prevCount + 1);
    }
    if (count7 === 4) {
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      disablePlayer2EnablePlayer1();
      setCount11((prevCount) => prevCount + 1);
    }
    if (count7 === 5) {
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      disablePlayer2EnablePlayer1();
      setCount12((prevCount) => prevCount + 1);
    }
    if (count7 === 6) {
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      textsFunctions.oneRoundMore();
      disablePlayer1EnablePlayer2();
    }
    if (count7 === 7) {
      setCount8((prevCount) => prevCount + 1);
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      disablePlayer2EnablePlayer1();
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
      disablePlayer2EnablePlayer1();
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
      disablePlayer2EnablePlayer1();
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
      disablePlayer2EnablePlayer1();
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
      disablePlayer2EnablePlayer1();
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
      disablePlayer2EnablePlayer1();
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
      disablePlayer2EnablePlayer1();
    }
    if (count7 === 1 && count8 === 0) {
      setCountPoint2(countPointPlayer2 + count5);
      setCount5(0);
      disablePlayer2EnablePlayer1();
    }
    if (count7 === 2 && count9 === 0) {
      setCountPoint2(countPointPlayer2 + count4);
      setCount4(0);
      disablePlayer2EnablePlayer1();
    }
    if (count7 === 3 && count10 === 0) {
      setCountPoint2(countPointPlayer2 + count3);
      setCount3(0);
      disablePlayer2EnablePlayer1();
    }
    if (count7 === 4 && count11 === 0) {
      setCountPoint2(countPointPlayer2 + count2);
      setCount2(0);
      disablePlayer2EnablePlayer1();
    }
    if (count7 === 5 && count12 === 0) {
      setCountPoint2(countPointPlayer2 + count1);
      setCount1(0);
      disablePlayer2EnablePlayer1();
    }
    if (count7 === 15 && count8 === 0) {
      setCountPoint2(countPointPlayer2 + count5 + 1);
      setCount5(0);
      disablePlayer2EnablePlayer1();
    }
    if (count7 === 16 && count9 === 0) {
      setCountPoint2(countPointPlayer2 + count4 + 1);
      setCount4(0);
      disablePlayer2EnablePlayer1();
    }
    if (count7 === 17 && count10 === 0) {
      setCountPoint2(countPointPlayer2 + count3 + 1);
      setCount3(0);
      disablePlayer2EnablePlayer1();
    }
    if (count7 === 18 && count11 === 0) {
      setCountPoint2(countPointPlayer2 + count2 + 1);
      setCount2(0);
      disablePlayer2EnablePlayer1();
    }
    if (count7 === 19 && count12 === 0) {
      setCountPoint2(countPointPlayer2 + count1 + 1);
      setCount1(0);
      disablePlayer2EnablePlayer1();
    }

    setCount7(0);
  }
  function container8() {
    if (count8 === 1) {
      setCount9((prevCount) => prevCount + 1);
      disablePlayer2EnablePlayer1();
    }
    if (count8 === 2) {
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      disablePlayer2EnablePlayer1();
    }
    if (count8 === 3) {
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      disablePlayer2EnablePlayer1();
    }
    if (count8 === 4) {
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      disablePlayer2EnablePlayer1();
    }
    if (count8 === 5) {
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      textsFunctions.oneRoundMore();
      disablePlayer1EnablePlayer2();
    }
    if (count8 === 6) {
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      disablePlayer2EnablePlayer1();
    }
    if (count8 === 7) {
      setCount9((prevCount) => prevCount + 1);
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      disablePlayer2EnablePlayer1();
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
      disablePlayer2EnablePlayer1();
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
      disablePlayer2EnablePlayer1();
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
      disablePlayer2EnablePlayer1();
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
      disablePlayer2EnablePlayer1();
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
      disablePlayer2EnablePlayer1();
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
      disablePlayer2EnablePlayer1();
    }
    if (count8 === 1 && count9 === 0) {
      setCountPoint2(countPointPlayer2 + count4);
      setCount4(0);
      disablePlayer2EnablePlayer1();
    }
    if (count8 === 2 && count10 === 0) {
      setCountPoint2(countPointPlayer2 + count3);
      setCount3(0);
      disablePlayer2EnablePlayer1();
    }
    if (count8 === 3 && count11 === 0) {
      setCountPoint2(countPointPlayer2 + count2);
      setCount2(0);
      disablePlayer2EnablePlayer1();
    }
    if (count8 === 4 && count12 === 0) {
      setCountPoint2(countPointPlayer2 + count1);
      setCount1();
      disablePlayer2EnablePlayer1();
    }
    if (count8 === 15 && count9 === 0) {
      setCountPoint2(countPointPlayer2 + count4 + 1);
      setCount4(0);
      disablePlayer2EnablePlayer1();
    }
    if (count8 === 16 && count10 === 0) {
      setCountPoint2(countPointPlayer2 + count3 + 1);
      setCount3(0);
      disablePlayer2EnablePlayer1();
    }
    if (count8 === 17 && count11 === 0) {
      setCountPoint2(countPointPlayer2 + count2 + 1);
      setCount2(0);
      disablePlayer2EnablePlayer1();
    }
    if (count8 === 18 && count12 === 0) {
      setCountPoint2(countPointPlayer2 + count1 + 1);
      setCount1(0);
      disablePlayer2EnablePlayer1();
    }

    setCount8(0);
  }
  function container9() {
    if (count9 === 1) {
      setCount10((prevCount) => prevCount + 1);
      disablePlayer2EnablePlayer1();
    }
    if (count9 === 2) {
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      disablePlayer2EnablePlayer1();
    }
    if (count9 === 3) {
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      disablePlayer2EnablePlayer1();
    }
    if (count9 === 4) {
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      textsFunctions.oneRoundMore();
      disablePlayer1EnablePlayer2();
    }
    if (count9 === 5) {
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      disablePlayer2EnablePlayer1();
    }
    if (count9 === 6) {
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      disablePlayer2EnablePlayer1();
    }
    if (count9 === 7) {
      setCount10((prevCount) => prevCount + 1);
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      disablePlayer2EnablePlayer1();
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
      disablePlayer2EnablePlayer1();
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
      disablePlayer2EnablePlayer1();
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
      disablePlayer2EnablePlayer1();
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
      disablePlayer2EnablePlayer1();
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
      disablePlayer2EnablePlayer1();
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
      disablePlayer2EnablePlayer1();
    }
    if (count9 === 1 && count10 === 0) {
      setCountPoint2(countPointPlayer2 + count3);
      setCount3(0);
      disablePlayer2EnablePlayer1();
    }
    if (count9 === 2 && count11 === 0) {
      setCountPoint2(countPointPlayer2 + count2);
      setCount2(0);
      disablePlayer2EnablePlayer1();
    }
    if (count9 === 3 && count12 === 0) {
      setCountPoint2(countPointPlayer2 + count1);
      setCount1(0);
      disablePlayer2EnablePlayer1();
    }
    if (count9 === 15 && count10 === 0) {
      setCountPoint2(countPointPlayer2 + count3 + 1);
      setCount3(0);
      disablePlayer2EnablePlayer1();
    }
    if (count9 === 16 && count11 === 0) {
      setCountPoint2(countPointPlayer2 + count2 + 1);
      setCount2(0);
      disablePlayer2EnablePlayer1();
    }
    if (count9 === 17 && count12 === 0) {
      setCountPoint2(countPointPlayer2 + count1 + 1);
      setCount1(0);
      disablePlayer2EnablePlayer1();
    }

    setCount9(0);
  }
  function container10() {
    if (count10 === 1) {
      setCount11((prevCount) => prevCount + 1);
      disablePlayer2EnablePlayer1();
    }
    if (count10 === 2) {
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      disablePlayer2EnablePlayer1();
    }
    if (count10 === 3) {
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      textsFunctions.oneRoundMore();
      disablePlayer1EnablePlayer2();
    }
    if (count10 === 4) {
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      disablePlayer2EnablePlayer1();
    }
    if (count10 === 5) {
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      disablePlayer2EnablePlayer1();
    }
    if (count10 === 6) {
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      disablePlayer2EnablePlayer1();
    }
    if (count10 === 7) {
      setCount11((prevCount) => prevCount + 1);
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      disablePlayer2EnablePlayer1();
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
      disablePlayer2EnablePlayer1();
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
      disablePlayer2EnablePlayer1();
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
      disablePlayer2EnablePlayer1();
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
      disablePlayer2EnablePlayer1();
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
      disablePlayer2EnablePlayer1();
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
      disablePlayer2EnablePlayer1();
    }
    if (count10 === 1 && count11 === 0) {
      setCountPoint2(countPointPlayer2 + count2);
      setCount2(0);
      disablePlayer2EnablePlayer1();
    }
    if (count10 === 2 && count12 === 0) {
      setCountPoint2(countPointPlayer2 + count1);
      setCount1(0);
      disablePlayer2EnablePlayer1();
    }
    if (count10 === 15 && count11 === 0) {
      setCountPoint2(countPointPlayer2 + count2 + 1);
      setCount2(0);
      disablePlayer2EnablePlayer1();
    }
    if (count10 === 16 && count12 === 0) {
      setCountPoint2(countPointPlayer2 + count1 + 1);
      setCount1(0);
      disablePlayer2EnablePlayer1();
    }

    setCount10(0);
  }
  function container11() {
    if (count11 === 1) {
      setCount12((prevCount) => prevCount + 1);
      disablePlayer2EnablePlayer1();
    }
    if (count11 === 2) {
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      textsFunctions.oneRoundMore();
      disablePlayer1EnablePlayer2();
    }
    if (count11 === 3) {
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      disablePlayer2EnablePlayer1();
    }
    if (count11 === 4) {
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      disablePlayer2EnablePlayer1();
    }
    if (count11 === 5) {
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      disablePlayer2EnablePlayer1();
    }
    if (count11 === 6) {
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      disablePlayer2EnablePlayer1();
    }
    if (count11 === 7) {
      setCount12((prevCount) => prevCount + 1);
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      disablePlayer2EnablePlayer1();
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
      disablePlayer2EnablePlayer1();
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
      disablePlayer2EnablePlayer1();
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
      disablePlayer2EnablePlayer1();
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
      disablePlayer2EnablePlayer1();
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
      disablePlayer2EnablePlayer1();
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
      disablePlayer2EnablePlayer1();
    }
    if (count11 === 1 && count12 === 0) {
      setCountPoint2(countPointPlayer2 + count1);
      setCount1(0);
      disablePlayer2EnablePlayer1();
    }
    if (count11 === 15 && count12 === 0) {
      setCountPoint2(countPointPlayer2 + count1 + 1);
      setCount1(0);
      disablePlayer2EnablePlayer1();
    }

    setCount11(0);
  }
  function container12() {
    if (count12 === 1) {
      setCountPoint2((prevCount) => prevCount + 1);
      textsFunctions.oneRoundMore();
      disablePlayer1EnablePlayer2();
    }
    if (count12 === 2) {
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      disablePlayer2EnablePlayer1();
    }
    if (count12 === 3) {
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      disablePlayer2EnablePlayer1();
    }
    if (count12 === 4) {
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      disablePlayer2EnablePlayer1();
    }
    if (count12 === 5) {
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      disablePlayer2EnablePlayer1();
    }
    if (count12 === 6) {
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      disablePlayer2EnablePlayer1();
    }
    if (count12 === 7) {
      setCountPoint2((prevCount) => prevCount + 1);
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
      setCount3((prevCount) => prevCount + 1);
      setCount4((prevCount) => prevCount + 1);
      setCount5((prevCount) => prevCount + 1);
      setCount6((prevCount) => prevCount + 1);
      disablePlayer2EnablePlayer1();
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
      disablePlayer2EnablePlayer1();
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
      disablePlayer2EnablePlayer1();
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
      disablePlayer2EnablePlayer1();
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
      disablePlayer2EnablePlayer1();
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
      disablePlayer2EnablePlayer1();
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
      disablePlayer2EnablePlayer1();
    }
    if (count12 === 9 && count7 === 0) {
      setCountPoint2(countPointPlayer2 + count6 + 1);
      setCount6(0);
      disablePlayer2EnablePlayer1();
    }
    if (count12 === 10 && count8 === 0) {
      setCountPoint2(countPointPlayer2 + count5 + 1);
      setCount5(0);
      disablePlayer2EnablePlayer1();
    }
    if (count12 === 11 && count9 === 0) {
      setCountPoint2(countPointPlayer2 + count4 + 1);
      setCount4(0);
      disablePlayer2EnablePlayer1();
    }
    if (count12 === 12 && count10 === 0) {
      setCountPoint2(countPointPlayer2 + count3 + 1);
      setCount3(0);
      disablePlayer2EnablePlayer1();
    }
    if (count12 === 13 && count11 === 0) {
      setCountPoint2(countPointPlayer2 + count2 + 1);
      setCount2(0);
      disablePlayer2EnablePlayer1();
    }
    if (count12 === 14 && count12 === 0) {
      setCountPoint2(countPointPlayer2 + count1 + 1);
      setCount1(0);
      disablePlayer2EnablePlayer1();
    }

    setCount12(0);
  }

  if (sumContainersOfPlayer1 === 0 || sumContainersOfPlayer2 === 0) {
    document.getElementById('roundOftext').innerHTML = 'GAME OVER ';
    document.getElementById('text').innerHTML =
      'calculate the points with the button';
    document.getElementById('calculater').style.display = 'block';
  }
  const gameFinish = () => {
    setCountPoint1(countPointPlayer1 + sumContainersOfPlayer1);
    setCountPoint2(countPointPlayer2 + sumContainersOfPlayer2);
    getWinner();
    setCount1(0);
    setCount2(0);
    setCount3(0);
    setCount4(0);
    setCount5(0);
    setCount6(0);
    setCount7(0);
    setCount8(0);
    setCount9(0);
    setCount10(0);
    setCount11(0);
    setCount12(0);
  };

  const start = (pebble) => {
    let i = 0;
    const timer = setInterval(() => {
      i < pebble ? new Audio(audio1).play() : clearInterval(timer);
      i++;
    }, 1000);
  };

  return (
    <div className='boardWrapper'>
      <button id='calculater' onClick={gameFinish}>
        CHECK THE WINNER
      </button>
      <div className='board'>
        <p className='pointsPlayer2'>{countPointPlayer2}</p>
        <PointsContainer count={countPointPlayer2} />
        <div className='containers'>
          <div className='player2Containers'>
            {containers.slice(0, 6).map((pebble,index) => (
              <Container
                count={pebble}
                containerFunction={() => {
                  onCleanSpecialText();
                  onCleanSpecialTextWennPlayEnd();
                  moveStones(index);
                  // container12();
                  // textsFunctions.textMoveContainer12();
                  start(pebble);
                }}
              />
            ))}
            {/* <Container
              disable={disablePlayer2}
              count={count12}
              containerFunction={() => {
                onCleanSpecialText();
                onCleanSpecialTextWennPlayEnd();
                container12();
                textsFunctions.textMoveContainer12();
                start(count12);
              }}
            />
            <Container
              disable={disablePlayer2}
              count={count11}
              containerFunction={() => {
                onCleanSpecialText();
                onCleanSpecialTextWennPlayEnd();
                container11();
                textsFunctions.textMoveContainer11();
                start();
              }}
            />
            <Container
              disable={disablePlayer2}
              count={count10}
              containerFunction={() => {
                onCleanSpecialText();
                onCleanSpecialTextWennPlayEnd();
                container10();
                textsFunctions.textMoveContainer10();
                start();
              }}
            />
            <Container
              disable={disablePlayer2}
              count={count9}
              containerFunction={() => {
                onCleanSpecialText();
                onCleanSpecialTextWennPlayEnd();
                container9();
                textsFunctions.textMoveContainer9();
                start();
              }}
            />
            <Container
              disable={disablePlayer2}
              count={count8}
              containerFunction={() => {
                onCleanSpecialText();
                onCleanSpecialTextWennPlayEnd();
                container8();
                textsFunctions.textMoveContainer8();
                start();
              }}
            />
            <Container
              disable={disablePlayer2}
              count={count7}
              containerFunction={() => {
                onCleanSpecialText();
                onCleanSpecialTextWennPlayEnd();
                container7();
                textsFunctions.textMoveContainer7();
                start();
              }}
            /> */}
          </div>

          <div className='player1Containers'>
            <Container
              disable={disablePlayer1}
              count={count1}
              containerFunction={() => {
                onCleanSpecialText();
                onCleanSpecialTextWennPlayEnd();
                container1();
                textsFunctions.textMoveContainer1();
                start();
              }}
            />
            <Container
              disable={disablePlayer1}
              count={count2}
              containerFunction={() => {
                onCleanSpecialText();
                onCleanSpecialTextWennPlayEnd();
                container2();
                textsFunctions.textMoveContainer2();
                start();
              }}
            />
            <Container
              disable={disablePlayer1}
              count={count3}
              containerFunction={() => {
                onCleanSpecialText();
                onCleanSpecialTextWennPlayEnd();
                container3();
                textsFunctions.textMoveContainer3();
                start();
              }}
            />
            <Container
              disable={disablePlayer1}
              count={count4}
              containerFunction={() => {
                onCleanSpecialText();
                onCleanSpecialTextWennPlayEnd();
                container4();
                textsFunctions.textMoveContainer4();
                start();
              }}
            />
            <Container
              disable={disablePlayer1}
              count={count5}
              containerFunction={() => {
                onCleanSpecialText();
                onCleanSpecialTextWennPlayEnd();
                container5();
                textsFunctions.textMoveContainer5();
                start();
              }}
            />
            <Container
              disable={disablePlayer1}
              count={count6}
              containerFunction={() => {
                onCleanSpecialText();
                onCleanSpecialTextWennPlayEnd();
                container6();
                textsFunctions.textMoveContainer6();
                start();
              }}
            />
          </div>
          {/* <small>player 1</small> */}
        </div>

        <PointsContainer count={countPointPlayer1} />
        <p className='pointsPlayer1'>{countPointPlayer1}</p>
      </div>
    </div>
  );
};

export default Board;
