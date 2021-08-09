import './pointcontainer.css';

const PointsContainer = (props) => {
  return (
    <div className='PointsContainer'>
      {Array.from(Array(props.count).keys()).map(
        (n) => (n = <div className='pebble'></div>)
      )}
    </div>
  );
};

export default PointsContainer;
