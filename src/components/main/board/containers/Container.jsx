import './container.css';

const container = (props) => {
  return (
    <div className='container' onClick={props.containerFunction}>
      {Array.from(Array(props.count).keys()).map(
        (n) => (n = <div className='pebble'></div>)
      )}
    </div>
  );
};

export default container;
