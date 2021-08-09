import './board.css';
import React, { useState } from 'react';
import * as Functions from '../../../Functions.jsx';
import Container from './container/Container.jsx';
// const Board = () => {
  // let pebble = <div className='pebble'></div>;
  // const [count1, setCount1] = useState(4);
  // const [count2, setCount2] = useState(4);
  // const [count3, setCount3] = useState(4);
  // const [count4, setCount4] = useState(4);
  // const [count5, setCount5] = useState(4);
  // const [count6, setCount6] = useState(4);
  // const [countPointPlayer1, setCountPoint1] = useState(0);
  // const [count7, setCount7] = useState(4);
  // const [count8, setCount8] = useState(4);
  // const [count9, setCount9] = useState(4);
  // const [count10, setCount10] = useState(4);
  // const [count11, setCount11] = useState(4);
  // const [count12, setCount12] = useState(4);
  // const [countPointPlayer2, setCountPoint2] = useState(0);

  // TRASFORM THE NUMBERS IN HTML TAG WIHT CSS STYLES
  // function convertNumberToPebble1() {
  //   if (count1 === 1) {
  //     setCount1(pebble);
  //   }
  //   if (count1 === 2) {
  //     setCount1([pebble, pebble]);
  //   }
  //   if (count1 === 3) {
  //     setCount1([pebble, pebble, pebble]);
  //   }
  //   if (count1 === 4) {
  //     setCount1([pebble, pebble, pebble, pebble]);
  //   }
  //   if (count1 === 5) {
  //     setCount1([pebble, pebble, pebble, pebble, pebble]);
  //   }
  //   if (count1 === 6) {
  //     setCount1([pebble, pebble, pebble, pebble, pebble, pebble]);
  //   }
  //   if (count1 === 7) {
  //     setCount1([pebble, pebble, pebble, pebble, pebble, pebble, pebble]);
  //   }
  //   if (count1 === 8) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count1 === 9) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count1 === 10) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count1 === 11) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count1 === 12) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count1 === 13) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  // }
  // function convertNumberToPebble2() {
  //   if (count2 === 1) {
  //     setCount1(pebble);
  //   }
  //   if (count2 === 2) {
  //     setCount1([pebble, pebble]);
  //   }
  //   if (count2 === 3) {
  //     setCount1([pebble, pebble, pebble]);
  //   }
  //   if (count2 === 4) {
  //     setCount1([pebble, pebble, pebble, pebble]);
  //   }
  //   if (count2 === 5) {
  //     setCount1([pebble, pebble, pebble, pebble, pebble]);
  //   }
  //   if (count2 === 6) {
  //     setCount1([pebble, pebble, pebble, pebble, pebble, pebble]);
  //   }
  //   if (count2 === 7) {
  //     setCount1([pebble, pebble, pebble, pebble, pebble, pebble, pebble]);
  //   }
  //   if (count2 === 8) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count2 === 9) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count2 === 10) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count2 === 11) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count2 === 12) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count2 === 13) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  // }
  // function convertNumberToPebble3() {
  //   if (count3 === 1) {
  //     setCount1(pebble);
  //   }
  //   if (count3 === 2) {
  //     setCount1([pebble, pebble]);
  //   }
  //   if (count3 === 3) {
  //     setCount1([pebble, pebble, pebble]);
  //   }
  //   if (count3 === 4) {
  //     setCount1([pebble, pebble, pebble, pebble]);
  //   }
  //   if (count3 === 5) {
  //     setCount1([pebble, pebble, pebble, pebble, pebble]);
  //   }
  //   if (count3 === 6) {
  //     setCount1([pebble, pebble, pebble, pebble, pebble, pebble]);
  //   }
  //   if (count3 === 7) {
  //     setCount1([pebble, pebble, pebble, pebble, pebble, pebble, pebble]);
  //   }
  //   if (count3 === 8) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count3 === 9) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count3 === 10) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count3 === 11) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count3 === 12) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count3 === 13) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  // }
  // function convertNumberToPebble4() {
  //   if (count4 === 1) {
  //     setCount1(pebble);
  //   }
  //   if (count4 === 2) {
  //     setCount1([pebble, pebble]);
  //   }
  //   if (count4 === 3) {
  //     setCount1([pebble, pebble, pebble]);
  //   }
  //   if (count4 === 4) {
  //     setCount1([pebble, pebble, pebble, pebble]);
  //   }
  //   if (count4 === 5) {
  //     setCount1([pebble, pebble, pebble, pebble, pebble]);
  //   }
  //   if (count4 === 6) {
  //     setCount1([pebble, pebble, pebble, pebble, pebble, pebble]);
  //   }
  //   if (count4 === 7) {
  //     setCount1([pebble, pebble, pebble, pebble, pebble, pebble, pebble]);
  //   }
  //   if (count4 === 8) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count4 === 9) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count4 === 10) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count4 === 11) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count4 === 12) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count4 === 13) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  // }
  // function convertNumberToPebble5() {
  //   if (count5 === 1) {
  //     setCount1(pebble);
  //   }
  //   if (count5 === 2) {
  //     setCount1([pebble, pebble]);
  //   }
  //   if (count5 === 3) {
  //     setCount1([pebble, pebble, pebble]);
  //   }
  //   if (count5 === 4) {
  //     setCount1([pebble, pebble, pebble, pebble]);
  //   }
  //   if (count5 === 5) {
  //     setCount1([pebble, pebble, pebble, pebble, pebble]);
  //   }
  //   if (count5 === 6) {
  //     setCount1([pebble, pebble, pebble, pebble, pebble, pebble]);
  //   }
  //   if (count5 === 7) {
  //     setCount1([pebble, pebble, pebble, pebble, pebble, pebble, pebble]);
  //   }
  //   if (count5 === 8) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count5 === 9) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count5 === 10) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count5 === 11) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count5 === 12) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count5 === 13) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  // }
  // function convertNumberToPebble6() {
  //   if (count6 === 1) {
  //     setCount1(pebble);
  //   }
  //   if (count6 === 2) {
  //     setCount1([pebble, pebble]);
  //   }
  //   if (count6 === 3) {
  //     setCount1([pebble, pebble, pebble]);
  //   }
  //   if (count6 === 4) {
  //     setCount1([pebble, pebble, pebble, pebble]);
  //   }
  //   if (count6 === 5) {
  //     setCount1([pebble, pebble, pebble, pebble, pebble]);
  //   }
  //   if (count6 === 6) {
  //     setCount1([pebble, pebble, pebble, pebble, pebble, pebble]);
  //   }
  //   if (count6 === 7) {
  //     setCount1([pebble, pebble, pebble, pebble, pebble, pebble, pebble]);
  //   }
  //   if (count6 === 8) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count6 === 9) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count6 === 10) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count6 === 11) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count6 === 12) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count6 === 13) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  // }
  // function convertNumberToPebble7() {
  //   if (count7 === 1) {
  //     setCount1(pebble);
  //   }
  //   if (count7 === 2) {
  //     setCount1([pebble, pebble]);
  //   }
  //   if (count7 === 3) {
  //     setCount1([pebble, pebble, pebble]);
  //   }
  //   if (count7 === 4) {
  //     setCount1([pebble, pebble, pebble, pebble]);
  //   }
  //   if (count7 === 5) {
  //     setCount1([pebble, pebble, pebble, pebble, pebble]);
  //   }
  //   if (count7 === 6) {
  //     setCount1([pebble, pebble, pebble, pebble, pebble, pebble]);
  //   }
  //   if (count7 === 7) {
  //     setCount1([pebble, pebble, pebble, pebble, pebble, pebble, pebble]);
  //   }
  //   if (count7 === 8) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count7 === 9) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count7 === 10) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count7 === 11) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count7 === 12) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count7 === 13) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  // }
  // function convertNumberToPebble8() {
  //   if (count8 === 1) {
  //     setCount1(pebble);
  //   }
  //   if (count8 === 2) {
  //     setCount1([pebble, pebble]);
  //   }
  //   if (count8 === 3) {
  //     setCount1([pebble, pebble, pebble]);
  //   }
  //   if (count8 === 4) {
  //     setCount1([pebble, pebble, pebble, pebble]);
  //   }
  //   if (count8 === 5) {
  //     setCount1([pebble, pebble, pebble, pebble, pebble]);
  //   }
  //   if (count8 === 6) {
  //     setCount1([pebble, pebble, pebble, pebble, pebble, pebble]);
  //   }
  //   if (count8 === 7) {
  //     setCount1([pebble, pebble, pebble, pebble, pebble, pebble, pebble]);
  //   }
  //   if (count8 === 8) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count8 === 9) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count8 === 10) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count8 === 11) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count8 === 12) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count8 === 13) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  // }
  // function convertNumberToPebble9() {
  //   if (count9 === 1) {
  //     setCount1(pebble);
  //   }
  //   if (count9 === 2) {
  //     setCount1([pebble, pebble]);
  //   }
  //   if (count9 === 3) {
  //     setCount1([pebble, pebble, pebble]);
  //   }
  //   if (count9 === 4) {
  //     setCount1([pebble, pebble, pebble, pebble]);
  //   }
  //   if (count9 === 5) {
  //     setCount1([pebble, pebble, pebble, pebble, pebble]);
  //   }
  //   if (count9 === 6) {
  //     setCount1([pebble, pebble, pebble, pebble, pebble, pebble]);
  //   }
  //   if (count9 === 7) {
  //     setCount1([pebble, pebble, pebble, pebble, pebble, pebble, pebble]);
  //   }
  //   if (count9 === 8) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count9 === 9) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count9 === 10) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count9 === 11) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count9 === 12) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count9 === 13) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  // }
  // function convertNumberToPebble10() {
  //   if (count10 === 1) {
  //     setCount1(pebble);
  //   }
  //   if (count10 === 2) {
  //     setCount1([pebble, pebble]);
  //   }
  //   if (count10 === 3) {
  //     setCount1([pebble, pebble, pebble]);
  //   }
  //   if (count10 === 4) {
  //     setCount1([pebble, pebble, pebble, pebble]);
  //   }
  //   if (count10 === 5) {
  //     setCount1([pebble, pebble, pebble, pebble, pebble]);
  //   }
  //   if (count10 === 6) {
  //     setCount1([pebble, pebble, pebble, pebble, pebble, pebble]);
  //   }
  //   if (count10 === 7) {
  //     setCount1([pebble, pebble, pebble, pebble, pebble, pebble, pebble]);
  //   }
  //   if (count10 === 8) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count10 === 9) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count10 === 10) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count10 === 11) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count10 === 12) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count10 === 13) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  // }
  // function convertNumberToPebble11() {
  //   if (count11 === 1) {
  //     setCount1(pebble);
  //   }
  //   if (count11 === 2) {
  //     setCount1([pebble, pebble]);
  //   }
  //   if (count11 === 3) {
  //     setCount1([pebble, pebble, pebble]);
  //   }
  //   if (count11 === 4) {
  //     setCount1([pebble, pebble, pebble, pebble]);
  //   }
  //   if (count11 === 5) {
  //     setCount1([pebble, pebble, pebble, pebble, pebble]);
  //   }
  //   if (count11 === 6) {
  //     setCount1([pebble, pebble, pebble, pebble, pebble, pebble]);
  //   }
  //   if (count11 === 7) {
  //     setCount1([pebble, pebble, pebble, pebble, pebble, pebble, pebble]);
  //   }
  //   if (count11 === 8) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count11 === 9) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count11 === 10) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count11 === 11) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count11 === 12) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count11 === 13) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  // }
  // function convertNumberToPebble12() {
  //   if (count12 === 1) {
  //     setCount1(pebble);
  //   }
  //   if (count12 === 2) {
  //     setCount1([pebble, pebble]);
  //   }
  //   if (count12 === 3) {
  //     setCount1([pebble, pebble, pebble]);
  //   }
  //   if (count12 === 4) {
  //     setCount1([pebble, pebble, pebble, pebble]);
  //   }
  //   if (count12 === 5) {
  //     setCount1([pebble, pebble, pebble, pebble, pebble]);
  //   }
  //   if (count12 === 6) {
  //     setCount1([pebble, pebble, pebble, pebble, pebble, pebble]);
  //   }
  //   if (count12 === 7) {
  //     setCount1([pebble, pebble, pebble, pebble, pebble, pebble, pebble]);
  //   }
  //   if (count12 === 8) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count12 === 9) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count12 === 10) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count12 === 11) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count12 === 12) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (count12 === 13) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  // }
  // function convertNumberToPebblePointPlayer1() {
  //   if (countPointPlayer1 === 1) {
  //     setCount1(pebble);
  //   }
  //   if (countPointPlayer1 === 2) {
  //     setCount1([pebble, pebble]);
  //   }
  //   if (countPointPlayer1 === 3) {
  //     setCount1([pebble, pebble, pebble]);
  //   }
  //   if (countPointPlayer1 === 4) {
  //     setCount1([pebble, pebble, pebble, pebble]);
  //   }
  //   if (countPointPlayer1 === 5) {
  //     setCount1([pebble, pebble, pebble, pebble, pebble]);
  //   }
  //   if (countPointPlayer1 === 6) {
  //     setCount1([pebble, pebble, pebble, pebble, pebble, pebble]);
  //   }
  //   if (countPointPlayer1 === 7) {
  //     setCount1([pebble, pebble, pebble, pebble, pebble, pebble, pebble]);
  //   }
  //   if (countPointPlayer1 === 8) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (countPointPlayer1 === 9) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (countPointPlayer1 === 10) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (countPointPlayer1 === 11) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (countPointPlayer1 === 12) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (countPointPlayer1 === 13) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  // }
  // function convertNumberToPebblePointPlayer2() {
  //   if (countPointPlayer2 === 1) {
  //     setCount1(pebble);
  //   }
  //   if (countPointPlayer2 === 2) {
  //     setCount1([pebble, pebble]);
  //   }
  //   if (countPointPlayer2 === 3) {
  //     setCount1([pebble, pebble, pebble]);
  //   }
  //   if (countPointPlayer2 === 4) {
  //     setCount1([pebble, pebble, pebble, pebble]);
  //   }
  //   if (countPointPlayer2 === 5) {
  //     setCount1([pebble, pebble, pebble, pebble, pebble]);
  //   }
  //   if (countPointPlayer2 === 6) {
  //     setCount1([pebble, pebble, pebble, pebble, pebble, pebble]);
  //   }
  //   if (countPointPlayer2 === 7) {
  //     setCount1([pebble, pebble, pebble, pebble, pebble, pebble, pebble]);
  //   }
  //   if (countPointPlayer2 === 8) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (countPointPlayer2 === 9) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (countPointPlayer2 === 10) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (countPointPlayer2 === 11) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (countPointPlayer2 === 12) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  //   if (countPointPlayer2 === 13) {
  //     setCount1([
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //       pebble,
  //     ]);
  //   }
  // }
  // LOGIK THAT MOVE THE PEBBLES TO THE CONTAINERS, AND RULES OF THE PLAY
  // function incrementCount1() {
  //   if (count1 === 1) {
  //     setCount2((prevCount) => prevCount + 1);
  //   }
  //   if (count1 === 2) {
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //   }
  //   if (count1 === 3) {
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //   }
  //   if (count1 === 4) {
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //   }
  //   if (count1 === 5) {
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //   }
  //   if (count1 === 6) {
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     Functions.oneRoundMore();
  //   }
  //   if (count1 === 7) {
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //   }
  //   if (count1 === 8) {
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //   }
  //   if (count1 === 9) {
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //   }
  //   if (count1 === 10) {
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //   }
  //   if (count1 === 11) {
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //   }
  //   if (count1 === 12) {
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //   }
  //   if (count1 === 13) {
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //   }
  //   if (count1 === 1 && count4 === 0) {
  //     setCountPoint1(countPointPlayer1 + count11);
  //     setCount11(0);
  //   }
  //   if (count1 === 2 && count3 === 0) {
  //     setCountPoint1(countPointPlayer1 + count10);
  //     setCount10(0);
  //   }
  //   if (count1 === 3 && count4 === 0) {
  //     setCountPoint1(countPointPlayer1 + count9);
  //     setCount9(0);
  //   }
  //   if (count1 === 4 && count5 === 0) {
  //     setCountPoint1(countPointPlayer1 + count9);
  //     setCount8(0);
  //   }
  //   if (count1 === 5 && count6 === 0) {
  //     setCountPoint1(countPointPlayer1 + count7);
  //     setCount7(0);
  //   }
  //   if (count1 === 15 && count7 === 0) {
  //     setCountPoint1(countPointPlayer1 + count11 + 1);
  //     setCount11(0);
  //   }
  //   if (count1 === 16 && count3 === 0) {
  //     setCountPoint1(countPointPlayer1 + count10 + 1);
  //     setCount10(0);
  //   }
  //   if (count1 === 17 && count4 === 0) {
  //     setCountPoint1(countPointPlayer1 + count9 + 1);
  //     setCount9(0);
  //   }
  //   if (count1 === 18 && count5 === 0) {
  //     setCountPoint1(countPointPlayer1 + count8 + 1);
  //     setCount8(0);
  //   }
  //   if (count1 === 19 && count6 === 0) {
  //     setCountPoint1(countPointPlayer1 + count7 + 1);
  //     setCount7(0);
  //   }

  //   setCount1(0);
  // }
  // function incrementCount2() {
  //   if (count7 === 1) {
  //     setCount3((prevCount) => prevCount + 1);
  //   }
  //   if (count2 === 2) {
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //   }
  //   if (count2 === 3) {
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //   }
  //   if (count2 === 4) {
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //   }
  //   if (count2 === 5) {
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     Functions.oneRoundMore();
  //   }
  //   if (count2 === 6) {
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //   }
  //   if (count2 === 7) {
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //   }
  //   if (count2 === 8) {
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //   }
  //   if (count2 === 9) {
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //   }
  //   if (count2 === 10) {
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //   }
  //   if (count2 === 11) {
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //   }
  //   if (count2 === 12) {
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //   }
  //   if (count2 === 13) {
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //   }
  //   if (count2 === 1 && count3 === 0) {
  //     setCountPoint1(countPointPlayer1 + count10);
  //     setCount10(0);
  //   }
  //   if (count2 === 2 && count4 === 0) {
  //     setCountPoint1(countPointPlayer1 + count9);
  //     setCount9(0);
  //   }
  //   if (count2 === 3 && count5 === 0) {
  //     setCountPoint1(countPointPlayer1 + count8);
  //     setCount8(0);
  //   }
  //   if (count2 === 4 && count6 === 0) {
  //     setCountPoint1(countPointPlayer1 + count7);
  //     setCount7(0);
  //   }
  //   if (count2 === 15 && count3 === 0) {
  //     setCountPoint1(countPointPlayer1 + count10 + 1);
  //     setCount10(0);
  //   }
  //   if (count2 === 16 && count4 === 0) {
  //     setCountPoint1(countPointPlayer1 + count9 + 1);
  //     setCount9(0);
  //   }
  //   if (count2 === 17 && count5 === 0) {
  //     setCountPoint1(countPointPlayer1 + count8 + 1);
  //     setCount8(0);
  //   }
  //   if (count2 === 18 && count6 === 0) {
  //     setCountPoint1(countPointPlayer1 + count7 + 1);
  //     setCount7(0);
  //   }
  //   setCount2(0);
  // }
  // function incrementCount3() {
  //   if (count3 === 1) {
  //     setCount4((prevCount) => prevCount + 1);
  //   }
  //   if (count3 === 2) {
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //   }
  //   if (count3 === 3) {
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //   }
  //   if (count3 === 4) {
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     Functions.oneRoundMore();
  //   }
  //   if (count3 === 5) {
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //   }
  //   if (count3 === 6) {
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //   }
  //   if (count3 === 7) {
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //   }
  //   if (count3 === 8) {
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //   }
  //   if (count3 === 9) {
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //   }
  //   if (count3 === 10) {
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //   }
  //   if (count3 === 11) {
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //   }
  //   if (count3 === 12) {
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //   }
  //   if (count3 === 13) {
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //   }
  //   if (count3 === 1 && count4 === 0) {
  //     setCountPoint1(countPointPlayer1 + count9);
  //     setCount9(0);
  //   }
  //   if (count3 === 2 && count5 === 0) {
  //     setCountPoint1(countPointPlayer1 + count8);
  //     setCount8(0);
  //   }
  //   if (count3 === 3 && count6 === 0) {
  //     setCountPoint1(countPointPlayer1 + count7);
  //     setCount7(0);
  //   }
  //   if (count3 === 15 && count4 === 0) {
  //     setCountPoint1(countPointPlayer1 + count9 + 1);
  //     setCount9(0);
  //   }
  //   if (count3 === 16 && count5 === 0) {
  //     setCountPoint1(countPointPlayer1 + count8 + 1);
  //     setCount8(0);
  //   }
  //   if (count3 === 17 && count6 === 0) {
  //     setCountPoint1(countPointPlayer1 + count7 + 1);
  //     setCount7(0);
  //   }
  //   setCount3(0);
  // }
  // function incrementCount4() {
  //   if (count4 === 1) {
  //     setCount5((prevCount) => prevCount + 1);
  //   }
  //   if (count4 === 2) {
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //   }
  //   if (count4 === 3) {
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     Functions.oneRoundMore();
  //   }
  //   if (count4 === 4) {
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //   }
  //   if (count4 === 5) {
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //   }
  //   if (count4 === 6) {
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //   }
  //   if (count4 === 7) {
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //   }
  //   if (count4 === 8) {
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //   }
  //   if (count4 === 9) {
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //   }
  //   if (count4 === 10) {
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //   }
  //   if (count4 === 11) {
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //   }
  //   if (count4 === 12) {
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //   }
  //   if (count4 === 13) {
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //   }
  //   if (count4 === 1 && count5 === 0) {
  //     setCountPoint1(countPointPlayer1 + count8);
  //     setCount8(0);
  //   }
  //   if (count4 === 2 && count6 === 0) {
  //     setCountPoint1(countPointPlayer1 + count7);
  //     setCount7(0);
  //   }
  //   if (count4 === 15 && count5 === 0) {
  //     setCountPoint1(countPointPlayer1 + count8 + 1);
  //     setCount8(0);
  //   }
  //   if (count4 === 16 && count6 === 0) {
  //     setCountPoint1(countPointPlayer1 + count7 + 1);
  //     setCount7(0);
  //   }
  //   setCount4(0);
  // }
  // function incrementCount5() {
  //   if (count5 === 1) {
  //     setCount6((prevCount) => prevCount + 1);
  //   }
  //   if (count5 === 2) {
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     Functions.oneRoundMore();
  //   }
  //   if (count5 === 3) {
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //   }
  //   if (count5 === 4) {
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //   }
  //   if (count5 === 5) {
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //   }
  //   if (count5 === 6) {
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //   }
  //   if (count5 === 7) {
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //   }
  //   if (count5 === 8) {
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //   }
  //   if (count5 === 9) {
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //   }
  //   if (count5 === 10) {
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //   }
  //   if (count5 === 11) {
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //   }
  //   if (count5 === 12) {
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //   }
  //   if (count5 === 13) {
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //   }
  //   if (count5 === 1 && count6 === 0) {
  //     setCountPoint1(countPointPlayer1 + count7);
  //     setCount7(0);
  //   }
  //   if (count5 === 15 && count6 === 0) {
  //     setCountPoint1(countPointPlayer1 + count7 + 1);
  //     setCount7(0);
  //   }
  //   setCount5(0);
  // }
  // function incrementCount6() {
  //   if (count6 === 1) {
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     Functions.oneRoundMore();
  //   }
  //   if (count6 === 2) {
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //   }
  //   if (count6 === 3) {
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //   }
  //   if (count6 === 4) {
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //   }
  //   if (count6 === 5) {
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //   }
  //   if (count6 === 6) {
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //   }
  //   if (count6 === 7) {
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //   }
  //   if (count6 === 8) {
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //   }
  //   if (count6 === 9) {
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //   }
  //   if (count6 === 10) {
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //   }
  //   if (count6 === 11) {
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //   }
  //   if (count6 === 12) {
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //   }
  //   if (count6 === 13) {
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //   }
  //   if (count6 === 9 && count1 === 0) {
  //     setCountPoint1(countPointPlayer1 + count12 + 1);
  //     setCount12(0);
  //   }
  //   if (count6 === 10 && count2 === 0) {
  //     setCountPoint1(countPointPlayer1 + count11 + 1);
  //     setCount11(0);
  //   }
  //   if (count6 === 11 && count3 === 0) {
  //     setCountPoint1(countPointPlayer1 + count10 + 1);
  //     setCount10(0);
  //   }
  //   if (count6 === 12 && count4 === 0) {
  //     setCountPoint1(countPointPlayer1 + count9 + 1);
  //     setCount9(0);
  //   }
  //   if (count6 === 13 && count5 === 0) {
  //     setCountPoint1(countPointPlayer1 + count8 + 1);
  //     setCount8(0);
  //   }
  //   if (count6 === 14 && count6 === 0) {
  //     setCountPoint1(countPointPlayer1 + count7 + 1);
  //     setCount7(0);
  //   }
  //   setCount6(0);
  // }
  // function incrementCount7() {
  //   if (count7 === 1) {
  //     setCount8((prevCount) => prevCount + 1);
  //   }
  //   if (count7 === 2) {
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //   }
  //   if (count7 === 3) {
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //   }
  //   if (count7 === 4) {
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //   }
  //   if (count7 === 5) {
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //   }
  //   if (count7 === 6) {
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     Functions.oneRoundMore();
  //   }
  //   if (count7 === 7) {
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //   }
  //   if (count7 === 8) {
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //   }
  //   if (count7 === 9) {
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //   }
  //   if (count7 === 10) {
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //   }
  //   if (count7 === 11) {
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //   }
  //   if (count7 === 12) {
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //   }
  //   if (count7 === 13) {
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //   }
  //   if (count7 === 1 && count8 === 0) {
  //     setCountPoint2(countPointPlayer2 + count5);
  //     setCount5(0);
  //   }
  //   if (count7 === 2 && count9 === 0) {
  //     setCountPoint2(countPointPlayer2 + count4);
  //     setCount4(0);
  //   }
  //   if (count7 === 3 && count10 === 0) {
  //     setCountPoint2(countPointPlayer2 + count3);
  //     setCount3(0);
  //   }
  //   if (count7 === 4 && count11 === 0) {
  //     setCountPoint2(countPointPlayer2 + count2);
  //     setCount2(0);
  //   }
  //   if (count7 === 5 && count12 === 0) {
  //     setCountPoint2(countPointPlayer2 + count1);
  //     setCount1(0);
  //   }
  //   if (count7 === 15 && count8 === 0) {
  //     setCountPoint2(countPointPlayer2 + count5 + 1);
  //     setCount5(0);
  //   }
  //   if (count7 === 16 && count9 === 0) {
  //     setCountPoint2(countPointPlayer2 + count4 + 1);
  //     setCount4(0);
  //   }
  //   if (count7 === 17 && count10 === 0) {
  //     setCountPoint2(countPointPlayer2 + count3 + 1);
  //     setCount3(0);
  //   }
  //   if (count7 === 18 && count11 === 0) {
  //     setCountPoint2(countPointPlayer2 + count2 + 1);
  //     setCount2(0);
  //   }
  //   if (count7 === 19 && count12 === 0) {
  //     setCountPoint2(countPointPlayer2 + count1 + 1);
  //     setCount1(0);
  //   }
  //   setCount7(0);
  // }
  // function incrementCount8() {
  //   if (count8 === 1) {
  //     setCount9((prevCount) => prevCount + 1);
  //   }
  //   if (count8 === 2) {
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //   }
  //   if (count8 === 3) {
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //   }
  //   if (count8 === 4) {
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //   }
  //   if (count8 === 5) {
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     Functions.oneRoundMore();
  //   }
  //   if (count8 === 6) {
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //   }
  //   if (count8 === 7) {
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //   }
  //   if (count8 === 8) {
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //   }
  //   if (count8 === 9) {
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //   }
  //   if (count8 === 10) {
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //   }
  //   if (count8 === 11) {
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //   }
  //   if (count8 === 12) {
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //   }
  //   if (count8 === 13) {
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //   }
  //   if (count8 === 1 && count9 === 0) {
  //     setCountPoint2(countPointPlayer2 + count4);
  //     setCount4(0);
  //   }
  //   if (count8 === 2 && count10 === 0) {
  //     setCountPoint2(countPointPlayer2 + count3);
  //     setCount3(0);
  //   }
  //   if (count8 === 3 && count11 === 0) {
  //     setCountPoint2(countPointPlayer2 + count2);
  //     setCount2(0);
  //   }
  //   if (count8 === 4 && count12 === 0) {
  //     setCountPoint2(countPointPlayer2 + count1);
  //     setCount1();
  //   }
  //   if (count8 === 15 && count9 === 0) {
  //     setCountPoint2(countPointPlayer2 + count4 + 1);
  //     setCount4(0);
  //   }
  //   if (count8 === 16 && count10 === 0) {
  //     setCountPoint2(countPointPlayer2 + count3 + 1);
  //     setCount3(0);
  //   }
  //   if (count8 === 17 && count11 === 0) {
  //     setCountPoint2(countPointPlayer2 + count2 + 1);
  //     setCount2(0);
  //   }
  //   if (count8 === 18 && count12 === 0) {
  //     setCountPoint2(countPointPlayer2 + count1 + 1);
  //     setCount1(0);
  //   }
  //   setCount8(0);
  // }
  // function incrementCount9() {
  //   if (count9 === 1) {
  //     setCount10((prevCount) => prevCount + 1);
  //   }
  //   if (count9 === 2) {
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //   }
  //   if (count9 === 3) {
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //   }
  //   if (count9 === 4) {
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     Functions.oneRoundMore();
  //   }
  //   if (count9 === 5) {
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //   }
  //   if (count9 === 6) {
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //   }
  //   if (count9 === 7) {
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //   }
  //   if (count9 === 8) {
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //   }
  //   if (count9 === 9) {
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //   }
  //   if (count9 === 10) {
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //   }
  //   if (count9 === 11) {
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //   }
  //   if (count9 === 12) {
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //   }
  //   if (count9 === 13) {
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //   }
  //   if (count9 === 1 && count10 === 0) {
  //     setCountPoint2(countPointPlayer2 + count3);
  //     setCount3(0);
  //   }
  //   if (count9 === 2 && count11 === 0) {
  //     setCountPoint2(countPointPlayer2 + count2);
  //     setCount2(0);
  //   }
  //   if (count9 === 3 && count12 === 0) {
  //     setCountPoint2(countPointPlayer2 + count1);
  //     setCount1(0);
  //   }
  //   if (count9 === 15 && count10 === 0) {
  //     setCountPoint2(countPointPlayer2 + count3 + 1);
  //     setCount3(0);
  //   }
  //   if (count9 === 16 && count11 === 0) {
  //     setCountPoint2(countPointPlayer2 + count2 + 1);
  //     setCount2(0);
  //   }
  //   if (count9 === 17 && count12 === 0) {
  //     setCountPoint2(countPointPlayer2 + count1 + 1);
  //     setCount1(0);
  //   }
  //   setCount9(0);
  // }
  // function incrementCount10() {
  //   if (count10 === 1) {
  //     setCount11((prevCount) => prevCount + 1);
  //   }
  //   if (count10 === 2) {
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //   }
  //   if (count10 === 3) {
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     Functions.oneRoundMore();
  //   }
  //   if (count10 === 4) {
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //   }
  //   if (count10 === 5) {
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //   }
  //   if (count10 === 6) {
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //   }
  //   if (count10 === 7) {
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //   }
  //   if (count10 === 8) {
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //   }
  //   if (count10 === 9) {
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //   }
  //   if (count10 === 10) {
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //   }
  //   if (count10 === 11) {
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //   }
  //   if (count10 === 12) {
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //   }
  //   if (count10 === 13) {
  //     setCount11((prevCount) => prevCount + 1);
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //   }
  //   if (count10 === 1 && count11 === 0) {
  //     setCountPoint2(countPointPlayer2 + count2);
  //     setCount2(0);
  //   }
  //   if (count10 === 2 && count12 === 0) {
  //     setCountPoint2(countPointPlayer2 + count1);
  //     setCount1(0);
  //   }
  //   if (count10 === 15 && count11 === 0) {
  //     setCountPoint2(countPointPlayer2 + count2 + 1);
  //     setCount2(0);
  //   }
  //   if (count10 === 16 && count12 === 0) {
  //     setCountPoint2(countPointPlayer2 + count1 + 1);
  //     setCount1(0);
  //   }
  //   setCount10(0);
  // }
  // function incrementCount11() {
  //   if (count11 === 1) {
  //     setCount12((prevCount) => prevCount + 1);
  //   }
  //   if (count11 === 2) {
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     Functions.oneRoundMore();
  //   }
  //   if (count11 === 3) {
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //   }
  //   if (count11 === 4) {
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //   }
  //   if (count11 === 5) {
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //   }
  //   if (count11 === 6) {
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //   }
  //   if (count11 === 7) {
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //   }
  //   if (count11 === 8) {
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //   }
  //   if (count11 === 9) {
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //   }
  //   if (count11 === 10) {
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //   }
  //   if (count11 === 11) {
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //   }
  //   if (count11 === 12) {
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //   }
  //   if (count11 === 13) {
  //     setCount12((prevCount) => prevCount + 1);
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //   }
  //   if (count11 === 1 && count12 === 0) {
  //     setCountPoint2(countPointPlayer2 + count1);
  //     setCount1(0);
  //   }
  //   if (count11 === 15 && count12 === 0) {
  //     setCountPoint2(countPointPlayer2 + count1 + 1);
  //     setCount1(0);
  //   }
  //   setCount11(0);
  // }
  // function incrementCount12() {
  //   if (count12 === 1) {
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     Functions.oneRoundMore();
  //   }
  //   if (count12 === 2) {
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //   }
  //   if (count12 === 3) {
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //   }
  //   if (count12 === 4) {
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //   }
  //   if (count12 === 5) {
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //   }
  //   if (count12 === 6) {
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //   }
  //   if (count12 === 7) {
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //   }
  //   if (count12 === 8) {
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //   }
  //   if (count12 === 9) {
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //   }
  //   if (count12 === 10) {
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //   }
  //   if (count12 === 11) {
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //   }
  //   if (count12 === 12) {
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //   }
  //   if (count12 === 13) {
  //     setCountPoint2((prevCount) => prevCount + 1);
  //     setCount1((prevCount) => prevCount + 1);
  //     setCount2((prevCount) => prevCount + 1);
  //     setCount3((prevCount) => prevCount + 1);
  //     setCount4((prevCount) => prevCount + 1);
  //     setCount5((prevCount) => prevCount + 1);
  //     setCount6((prevCount) => prevCount + 1);
  //     setCountPoint1((prevCount) => prevCount + 1);
  //     setCount7((prevCount) => prevCount + 1);
  //     setCount8((prevCount) => prevCount + 1);
  //     setCount9((prevCount) => prevCount + 1);
  //     setCount10((prevCount) => prevCount + 1);
  //     setCount11((prevCount) => prevCount + 1);
  //   }
  //   if (count12 === 9 && count7 === 0) {
  //     setCountPoint2(countPointPlayer2 + count6 + 1);
  //     setCount6(0);
  //   }
  //   if (count12 === 10 && count8 === 0) {
  //     setCountPoint2(countPointPlayer2 + count5 + 1);
  //     setCount5(0);
  //   }
  //   if (count12 === 11 && count9 === 0) {
  //     setCountPoint2(countPointPlayer2 + count4 + 1);
  //     setCount4(0);
  //   }
  //   if (count12 === 12 && count10 === 0) {
  //     setCountPoint2(countPointPlayer2 + count3 + 1);
  //     setCount3(0);
  //   }
  //   if (count12 === 13 && count11 === 0) {
  //     setCountPoint2(countPointPlayer2 + count2 + 1);
  //     setCount2(0);
  //   }
  //   if (count12 === 14 && count12 === 0) {
  //     setCountPoint2(countPointPlayer2 + count1 + 1);
  //     setCount1(0);
  //   }
  //   setCount12(0);
  // }

  // convertNumberToPebble1();
  // convertNumberToPebble2();
  // convertNumberToPebble3();
  // convertNumberToPebble4();
  // convertNumberToPebble5();
  // convertNumberToPebble6();
  // convertNumberToPebble7();
  // convertNumberToPebble8();
  // convertNumberToPebble9();
  // convertNumberToPebble10();
  // convertNumberToPebble11();
  // convertNumberToPebble12();
  // convertNumberToPebblePointPlayer1();
  // convertNumberToPebblePointPlayer2();

//   return (
//     <div className='board'>
//       <div className='player2Points'>{countPointPlayer2}</div>
//       <div className='containers'>
//         <div className='player2Containers'>
//           <Container
//             count={count12}
//             containerFunction={() => {
//               incrementCount12();
//               Functions.textMoveContainer12();
//             }}
//           />
//           <Container
//             count={count11}
//             containerFunction={() => {
//               incrementCount11();
//               Functions.textMoveContainer11();
//             }}
//           />
//           <Container
//             count={count10}
//             containerFunction={() => {
//               incrementCount10();
//               Functions.textMoveContainer10();
//             }}
//           />
//           <Container
//             count={count9}
//             containerFunction={() => {
//               incrementCount9();
//               Functions.textMoveContainer9();
//             }}
//           />
//           <Container
//             count={count8}
//             containerFunction={() => {
//               incrementCount8();
//               Functions.textMoveContainer8();
//             }}
//           />
//           <Container
//             count={count7}
//             containerFunction={() => {
//               incrementCount7();
//               Functions.textMoveContainer7();
//             }}
//           />
//         </div>
//         <div className='player1Containers'>
//           <Container
//             count={count1}
//             containerFunction={() => {
//               incrementCount1();
//               Functions.textMoveContainer1();
//             }}
//           />
//           <Container
//             count={count2}
//             containerFunction={() => {
//               incrementCount2();
//               Functions.textMoveContainer2();
//             }}
//           />
//           <Container
//             count={count3}
//             containerFunction={() => {
//               incrementCount3();
//               Functions.textMoveContainer3();
//             }}
//           />
//           <Container
//             count={count4}
//             containerFunction={() => {
//               incrementCount4();
//               Functions.textMoveContainer4();
//             }}
//           />
//           <Container
//             count={count5}
//             containerFunction={() => {
//               incrementCount5();
//               Functions.textMoveContainer5();
//             }}
//           />
//           <Container
//             count={count6}
//             containerFunction={() => {
//               incrementCount6();
//               Functions.textMoveContainer6();
//             }}
//           />
//         </div>
//       </div>
//       <div className='player1Points'>{countPointPlayer1}</div>
//     </div>
//   );
// };

const Board = () => {
  let pebble = <div className='pebble'></div>;
  // const pebbles = [pebble, pebble, pebble, pebble];
  const [count1, Setcount1] = useState([pebble, pebble, pebble, pebble]);
  const [count2, Setcount2] = useState([pebble, pebble, pebble, pebble]);
  const [count3, Setcount3] = useState([pebble, pebble, pebble, pebble]);
  const [count4, Setcount4] = useState([pebble, pebble, pebble, pebble]);
  const [count5, Setcount5] = useState([pebble, pebble, pebble, pebble]);
  const [count6, Setcount6] = useState([pebble, pebble, pebble, pebble]);
  const [countPointPlayer1, SetCountPointPlayer1] = useState([]);
  const [count7, Setcount7] = useState([pebble, pebble, pebble, pebble]);
  const [count8, Setcount8] = useState([pebble, pebble, pebble, pebble]);
  const [count9, Setcount9] = useState([pebble, pebble, pebble, pebble]);
  const [count10, Setcount10] = useState([pebble, pebble, pebble, pebble]);
  const [count11, Setcount11] = useState([pebble, pebble, pebble, pebble]);
  const [count12, Setcount12] = useState([pebble, pebble, pebble, pebble]);
  const [countPointPlayer2, SetCountPointPlayer2] = useState([]);

  function incrementCount1() {
    if (count1.length === 1) {
      count2.push(pebble);
    }
    if (count1.length === 2) {
      count2.push(pebble);
      count3.push(pebble);
    }
    if (count1.length === 3) {
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
    }
    if (count1.length === 4) {
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
    }
    if (count1.length === 5) {
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
    }
    if (count1.length === 6) {
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      Functions.oneRoundMore();
    }
    if (count1.length === 7) {
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
    }
    if (count1.length === 8) {
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
    }
    if (count1.length === 9) {
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count9.push(pebble);
    }
    if (count1.length === 10) {
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
    }
    if (count1.length === 11) {
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
    }
    if (count1.length === 12) {
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
    }
    if (count1.length === 13) {
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
    }
    if (count1.length === 1 && count2.length === 0) {
      countPointPlayer1.push(...count11);
      Setcount11([]);
    }
    if (count1.length === 2 && count3.length === 0) {
      countPointPlayer1.push(...count10);
      Setcount10([]);
    }
    if (count1.length === 3 && count4.length === 0) {
      countPointPlayer1.push(...count9);
      Setcount9([]);
    }
    if (count1.length === 4 && count5.length === 0) {
      countPointPlayer1.push(...count8);
      Setcount8([]);
    }
    if (count1.length === 5 && count6.length === 0) {
      countPointPlayer1.push(...count7);
      Setcount7([]);
    }
    if (count1.length === 15 && count2.length === 0) {
      countPointPlayer1.push(...count11, pebble);
      Setcount11([]);
    }
    if (count1.length === 16 && count3.length === 0) {
      countPointPlayer1.push(...count10, pebble);
      Setcount10([]);
    }
    if (count1.length === 17 && count4.length === 0) {
      countPointPlayer1.push(...count9, pebble);
      Setcount9([]);
    }
    if (count1.length === 18 && count5.length === 0) {
      countPointPlayer1.push(...count8, pebble);
      Setcount8([]);
    }
    if (count1.length === 19 && count6.length === 0) {
      countPointPlayer1.push(...count7, pebble);
      Setcount7([]);
    }

    Setcount1([]);
  }
  function incrementCount2() {
    if (count2.length === 1) {
      count3.push(pebble);
    }
    if (count2.length === 2) {
      count3.push(pebble);
      count4.push(pebble);
    }
    if (count2.length === 3) {
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
    }
    if (count2.length === 4) {
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
    }
    if (count2.length === 5) {
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      Functions.oneRoundMore();
    }
    if (count2.length === 6) {
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
    }
    if (count2.length === 7) {
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
    }
    if (count2.length === 8) {
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count9.push(pebble);
    }
    if (count2.length === 9) {
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
    }
    if (count2.length === 10) {
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
    }
    if (count2.length === 11) {
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
    }
    if (count2.length === 12) {
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
    }
    if (count2.length === 13) {
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
    }
    if (count2.length === 1 && count3 === []) {
      countPointPlayer1.push(...count10);
      Setcount10([]);
    }
    if (count2.length === 2 && count4 === []) {
      countPointPlayer1.push(...count9);
      Setcount9([]);
    }
    if (count2.length === 3 && count5 === []) {
      countPointPlayer1.push(...count8);
      Setcount8([]);
    }
    if (count2.length === 4 && count6 === []) {
      countPointPlayer1.push(...count7);
      Setcount7([]);
    }
    if (count2.length === 15 && count3 === []) {
      countPointPlayer1.push(...count10, pebble);
      Setcount10([]);
    }
    if (count2.length === 16 && count4 === []) {
      countPointPlayer1.push(...count9, pebble);
      Setcount9([]);
    }
    if (count2.length === 17 && count5 === []) {
      countPointPlayer1.push(...count8, pebble);
      Setcount8([]);
    }
    if (count2.length === 18 && count6 === []) {
      countPointPlayer1.push(...count7, pebble);
      Setcount7([]);
    }
    Setcount2([]);
  }
  function incrementCount3() {
    if (count3.length === 1) {
      count4.push(pebble);
    }
    if (count3.length === 2) {
      count4.push(pebble);
      count5.push(pebble);
    }
    if (count3.length === 3) {
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
    }
    if (count3.length === 4) {
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      Functions.oneRoundMore();
    }
    if (count3.length === 5) {
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
    }
    if (count3.length === 6) {
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
    }
    if (count3.length === 7) {
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count9.push(pebble);
    }
    if (count3.length === 8) {
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
    }
    if (count3.length === 9) {
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
    }
    if (count3.length === 10) {
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
    }
    if (count3.length === 11) {
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
    }
    if (count3.length === 12) {
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
    }
    if (count3.length === 13) {
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
    }
    if (count3.length === 1 && count4 === []) {
      countPointPlayer1.push(...count9);
      Setcount9([]);
    }
    if (count3.length === 2 && count5 === []) {
      countPointPlayer1.push(...count8);
      Setcount8([]);
    }
    if (count3.length === 3 && count6 === []) {
      countPointPlayer1.push(...count7);
      Setcount7([]);
    }
    if (count3.length === 15 && count4 === []) {
      countPointPlayer1.push(...count9, pebble);
      Setcount9([]);
    }
    if (count3.length === 16 && count5 === []) {
      countPointPlayer1.push(...count8, pebble);
      Setcount8([]);
    }
    if (count3.length === 17 && count6 === []) {
      countPointPlayer1.push(...count7, pebble);
      Setcount7([]);
    }
    Setcount3([]);
  }
  function incrementCount4() {
    if (count4.length === 1) {
      count5.push(pebble);
    }
    if (count4.length === 2) {
      count5.push(pebble);
      count6.push(pebble);
    }
    if (count4.length === 3) {
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      Functions.oneRoundMore();
    }
    if (count4.length === 4) {
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
    }
    if (count4.length === 5) {
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
    }
    if (count4.length === 6) {
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count9.push(pebble);
    }
    if (count4.length === 7) {
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
    }
    if (count4.length === 8) {
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
    }
    if (count4.length === 9) {
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
    }
    if (count4.length === 10) {
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
    }
    if (count4.length === 11) {
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
    }
    if (count4.length === 12) {
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
    }
    if (count4.length === 13) {
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.length.push(pebble);
    }
    if (count4.length === 1 && count5 === []) {
      countPointPlayer1.push(...count8);
      Setcount8([]);
    }
    if (count4.length === 2 && count6 === []) {
      countPointPlayer1.push(...count7);
      Setcount7([]);
    }
    if (count4.length === 15 && count5 === []) {
      countPointPlayer1.push(...count8, pebble);
      Setcount8([]);
    }
    if (count4.length === 16 && count6 === []) {
      countPointPlayer1.push(...count7, pebble);
      Setcount7([]);
    }
    Setcount4([]);
  }
  function incrementCount5() {
    if (count5.length === 1) {
      count6.push(pebble);
    }
    if (count5.length === 2) {
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      Functions.oneRoundMore();
    }
    if (count5.length === 3) {
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
    }
    if (count5.length === 4) {
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
    }
    if (count5.length === 5) {
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count9.push(pebble);
    }
    if (count5.length === 6) {
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
    }
    if (count5.length === 7) {
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
    }
    if (count5.length === 8) {
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
    }
    if (count5.length === 9) {
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
    }
    if (count5.length === 10) {
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
    }
    if (count5.length === 11) {
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
    }
    if (count5.length === 12) {
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.length.push(pebble);
    }
    if (count5.length === 13) {
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
    }
    if (count5.length === 1 && count6 === []) {
      countPointPlayer1.push(...count7);
      Setcount7([]);
    }
    if (count5.length === 15 && count6 === []) {
      countPointPlayer1.push(...count7, pebble);
      Setcount7([]);
    }
    Setcount5([]);
  }
  function incrementCount6() {
    if (count6.length === 1) {
      countPointPlayer1.push(pebble);
      Functions.oneRoundMore();
    }
    if (count6.length === 2) {
      countPointPlayer1.push(pebble);
      count7.push(pebble);
    }
    if (count6.length === 3) {
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
    }
    if (count6.length === 4) {
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count9.push(pebble);
    }
    if (count6.length === 5) {
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
    }
    if (count6.length === 6) {
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
    }
    if (count6.length === 7) {
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
    }
    if (count6.length === 8) {
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
    }
    if (count6.length === 9) {
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
    }
    if (count6.length === 10) {
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
    }
    if (count6.length === 11) {
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.push(pebble);
    }
    if (count6.length === 12) {
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
    }
    if (count6.length === 13) {
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
    }
    if (count6.length === 9 && count1 === []) {
      countPointPlayer1.push(...count12, pebble);
      Setcount12([]);
    }
    if (count6.length === 10 && count2 === []) {
      countPointPlayer1.push(...count11, pebble);
      Setcount11([]);
    }
    if (count6.length === 11 && count3 === []) {
      countPointPlayer1.push(...count10, pebble);
      Setcount10([]);
    }
    if (count6.length === 12 && count4 === []) {
      countPointPlayer1.push(...count9, pebble);
      Setcount9([]);
    }
    if (count6.length === 13 && count5 === []) {
      countPointPlayer1.push(...count8, pebble);
      Setcount8([]);
    }
    if (count6.length === 14 && count6 === []) {
      countPointPlayer1.push(...count7, pebble);
      Setcount7([]);
    }
    Setcount6([]);
  }
  function incrementCount7() {
    if (count7.length === 1) {
      count8.push(pebble);
    }
    if (count7.length === 2) {
      count8.push(pebble);
      count9.push(pebble);
    }
    if (count7.length === 3) {
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
    }
    if (count7.length === 4) {
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
    }
    if (count7.length === 5) {
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
    }
    if (count7.length === 6) {
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      Functions.oneRoundMore();
    }
    if (count7.length === 7) {
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
    }
    if (count7.length === 8) {
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
    }
    if (count7.length === 9) {
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.push(pebble);
    }
    if (count7.length === 10) {
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
    }
    if (count7.length === 11) {
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
    }
    if (count7.length === 12) {
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
    }
    if (count7.length === 13) {
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
    }
    if (count7.length === 1 && count8 === []) {
      countPointPlayer2.push(...count5);
      Setcount5([]);
    }
    if (count7.length === 2 && count9 === []) {
      countPointPlayer2.push(...count4);
      Setcount4([]);
    }
    if (count7.length === 3 && count10 === []) {
      countPointPlayer2.push(...count3);
      Setcount3([]);
    }
    if (count7.length === 4 && count11 === []) {
      countPointPlayer2.push(...count2);
      Setcount2([]);
    }
    if (count7.length === 5 && count12 === []) {
      countPointPlayer2.push(...count1);
      Setcount1([]);
    }
    if (count7.length === 15 && count8 === []) {
      countPointPlayer2.push(...count5, pebble);
      Setcount5([]);
    }
    if (count7.length === 16 && count9 === []) {
      countPointPlayer2.push(...count4, pebble);
      Setcount4([]);
    }
    if (count7.length === 17 && count10 === []) {
      countPointPlayer2.push(...count3, pebble);
      Setcount3([]);
    }
    if (count7.length === 18 && count11 === []) {
      countPointPlayer2.push(...count2, pebble);
      Setcount2([]);
    }
    if (count7.length === 19 && count12 === []) {
      countPointPlayer2.push(...count1, pebble);
      Setcount1([]);
    }
    Setcount7([]);
  }
  function incrementCount8() {
    if (count8.length === 1) {
      count9.push(pebble);
    }
    if (count8.length === 2) {
      count9.push(pebble);
      count10.push(pebble);
    }
    if (count8.length === 3) {
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
    }
    if (count8.length === 4) {
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
    }
    if (count8.length === 5) {
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      Functions.oneRoundMore();
    }
    if (count8.length === 6) {
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
    }
    if (count8.length === 7) {
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
    }
    if (count8.length === 8) {
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.push(pebble);
    }
    if (count8.length === 9) {
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
    }
    if (count8.length === 10) {
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
    }
    if (count8.length === 11) {
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
    }
    if (count8.length === 12) {
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
    }
    if (count8.length === 13) {
      count9.push(pebble);
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
    }
    if (count8.length === 1 && count9 === []) {
      countPointPlayer2.push(...count4);
      Setcount4([]);
    }
    if (count8.length === 2 && count10 === 0) {
      countPointPlayer2.push(...count3);
      Setcount3([]);
    }
    if (count8.length === 3 && count11 === []) {
      countPointPlayer2.push(...count2);
      Setcount2([]);
    }
    if (count8.length === 4 && count12 === []) {
      countPointPlayer2.push(...count1);
      Setcount1([]);
    }
    if (count8.length === 15 && count9 === []) {
      countPointPlayer2.push(...count4, pebble);
      Setcount4([]);
    }
    if (count8.length === 16 && count10 === []) {
      countPointPlayer2.push(...count3, pebble);
      Setcount3([]);
    }
    if (count8.length === 17 && count11 === []) {
      countPointPlayer2.push(...count2, pebble);
      Setcount2([]);
    }
    if (count8.length === 18 && count12 === []) {
      countPointPlayer2.push(...count1, pebble);
      Setcount1([]);
    }
    Setcount8([]);
  }
  function incrementCount9() {
    if (count9.length === 1) {
      count10.push(pebble);
    }
    if (count9.length === 2) {
      count10.push(pebble);
      count11.push(pebble);
    }
    if (count9.length === 3) {
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
    }
    if (count9.length === 4) {
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      Functions.oneRoundMore();
    }
    if (count9.length === 5) {
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
    }
    if (count9.length === 6) {
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
    }
    if (count9.length === 7) {
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.push(pebble);
    }
    if (count9.length === 8) {
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
    }
    if (count9.length === 9) {
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
    }
    if (count9.length === 10) {
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
    }
    if (count9.length === 11) {
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
    }
    if (count9.length === 12) {
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
    }
    if (count9.length === 13) {
      count10.push(pebble);
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
    }
    if (count9.length === 1 && count10 === []) {
      countPointPlayer2.push(...count3);
      Setcount3([]);
    }
    if (count9.length === 2 && count11 === []) {
      countPointPlayer2.push(...count2);
      Setcount2([]);
    }
    if (count9.length === 3 && count12 === []) {
      countPointPlayer2.push(...count1);
      Setcount1([]);
    }
    if (count9.length === 15 && count10 === []) {
      countPointPlayer2.push(...count3, pebble);
      Setcount3([]);
    }
    if (count9.length === 16 && count11 === []) {
      countPointPlayer2.push(...count2, pebble);
      Setcount2([]);
    }
    if (count9.length === 17 && count12 === []) {
      countPointPlayer2.push(...count1, pebble);
      Setcount1([]);
    }
    Setcount9([]);
  }
  function incrementCount10() {
    if (count10.length === 1) {
      count11.push(pebble);
    }
    if (count10.length === 2) {
      count11.push(pebble);
      count12.push(pebble);
    }
    if (count10.length === 3) {
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      Functions.oneRoundMore();
    }
    if (count10.length === 4) {
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
    }
    if (count10.length === 5) {
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
    }
    if (count10.length === 6) {
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.push(pebble);
    }
    if (count10.length === 7) {
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
    }
    if (count10.length === 8) {
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
    }
    if (count10.length === 9) {
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
    }
    if (count10.length === 10) {
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
    }
    if (count10.length === 11) {
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
    }
    if (count10.length === 12) {
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
    }
    if (count10.length === 13) {
      count11.push(pebble);
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count9.push(pebble);
    }
    if (count10.length === 1 && count11 === []) {
      countPointPlayer2.push(...count2);
      Setcount2([]);
    }
    if (count10.length === 2 && count12 === []) {
      countPointPlayer2.push(...count1);
      Setcount1([]);
    }
    if (count10.length === 15 && count11 === []) {
      countPointPlayer2.push(...count2, pebble);
      Setcount2([]);
    }
    if (count10.length === 16 && count12 === []) {
      countPointPlayer2.push(...count1, pebble);
      Setcount1([]);
    }
    Setcount10([]);
  }
  function incrementCount11() {
    if (count11.length === 1) {
      count12.push(pebble);
    }
    if (count11.length === 2) {
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      Functions.oneRoundMore();
    }
    if (count11.length === 3) {
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
    }
    if (count11.length === 4) {
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
    }
    if (count11.length === 5) {
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.push(pebble);
    }
    if (count11.length === 6) {
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
    }
    if (count11.length === 7) {
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
    }
    if (count11.length === 8) {
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
    }
    if (count11.length === 9) {
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
    }
    if (count11.length === 10) {
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
    }
    if (count11.length === 11) {
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
    }
    if (count11.length === 12) {
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count9.push(pebble);
    }
    if (count11.length === 13) {
      count12.push(pebble);
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
    }
    if (count11.length === 1 && count12 === []) {
      countPointPlayer2.push(...count1);
      Setcount1([]);
    }
    if ((count11.length === 15) & (count12 === [])) {
      countPointPlayer2.push(...count1, pebble);
      Setcount1([]);
    }
    Setcount11([]);
  }
  function incrementCount12() {
    if (count12.length === 1) {
      countPointPlayer2.push(pebble);
      Functions.oneRoundMore();
    }
    if (count12.length === 2) {
      countPointPlayer2.push(pebble);
      count1.push(pebble);
    }
    if (count12.length === 3) {
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
    }
    if (count12.length === 4) {
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.push(pebble);
    }
    if (count12.length === 5) {
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
    }
    if (count12.length === 6) {
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
    }
    if (count12.length === 7) {
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
    }
    if (count12.length === 8) {
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
    }
    if (count12.length === 9) {
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
    }
    if (count12.length === 10) {
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
    }
    if (count12.length === 11) {
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count9.push(pebble);
    }
    if (count12.length === 12) {
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
    }
    if (count12.length === 13) {
      countPointPlayer2.push(pebble);
      count1.push(pebble);
      count2.push(pebble);
      count3.push(pebble);
      count4.push(pebble);
      count5.push(pebble);
      count6.push(pebble);
      countPointPlayer1.push(pebble);
      count7.push(pebble);
      count8.push(pebble);
      count9.push(pebble);
      count10.push(pebble);
      count11.length.push(pebble);
    }
    if (count12.length === 9 && count7 === []) {
      countPointPlayer2.push(...count6, pebble);
      Setcount6([]);
    }
    if (count12.length === 10 && count8 === []) {
      countPointPlayer2.push(...count5, pebble);
      Setcount5([]);
    }
    if (count12.length === 11 && count9 === []) {
      countPointPlayer2.push(...count4, pebble);
      Setcount4([]);
    }
    if (count12.length === 12 && count10 === []) {
      countPointPlayer2.push(...count3, pebble);
      Setcount3([]);
    }
    if (count12.length === 13 && count11 === []) {
      countPointPlayer2.push(...count2, pebble);
      Setcount2([]);
    }
    if (count12.length === 14 && count12 === []) {
      countPointPlayer2.push(...count1, pebble);
      Setcount1([]);
    }
    Setcount12([]);
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
