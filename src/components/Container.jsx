import React from 'react';

const container = (props) => {
  return (
    <div className='container' onClick={props.containerFunction}>
      {props.count}
    </div>
  );
};

export default container;




