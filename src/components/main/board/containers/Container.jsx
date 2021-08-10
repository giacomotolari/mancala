import './container.css';

const container = (props) => {
  return (
    <button className='container' disabled={props.disable} onClick={props.containerFunction}>
      {Array.from(Array(props.count).keys()).map(
        (n) => (n = <div className='pebble'></div>)
      )}
    </button>
  );
};

export default container;
