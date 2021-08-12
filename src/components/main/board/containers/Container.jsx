import './container.css';

const Container = (props) => {
  // console.log(

  //     [1,2,3,4,5].filter((m) => m !== 0).map((x) => (x = 0)));

  return (
    <button
      className='container'
      disabled={props.disable}
      onClick={props.containerFunction}
    >
      {Array.from(Array(props.count).keys()).map(
        (n) =>
          (n = (
            <div
              key={`${n}${Math.random()}${Math.random()}`}
              className='pebble'
            ></div>
          ))
      )}
    </button>
  );
};

export default Container;
