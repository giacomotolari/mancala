import './container.css';

const Container = (props) => {
  return (
    <button
      className='container'
      disabled={props.disable}
      onClick={props.containerFunction}
    >
      {Array.from(Array(props.count).keys()).map(
        (n) => (n = <div key={`${n}${Math.random()}${Math.random()}`} className='pebble'></div>)
      )}
    </button>
  );
};

export default Container;
