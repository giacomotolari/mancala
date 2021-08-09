import './board.css';
import React, { useState } from 'react';
import * as Functions from '../../../Functions.jsx';
import Container from './container/Container.jsx';

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
    if (count1 === 1 && count2 === 0) {
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
