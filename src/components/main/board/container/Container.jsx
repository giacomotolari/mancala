import React from 'react';
import './container.css';

const container = (props) => {
  return (
    <div className='container' onClick={props.containerFunction}>
      {props.count}
    </div>
  );
};

export default container;




