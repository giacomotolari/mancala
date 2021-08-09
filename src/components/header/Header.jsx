import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='Header'>
      <ul>
        <li>
          <Link to='/'>Game</Link>
        </li>
        <li>
          <Link to='/Rules'>Rules</Link>
        </li>
      </ul>
      <h1>MANCALA</h1>
      <h2 id='Specialtext'> </h2>
      <h3 id='text'> </h3>
    </div>
  );
};

export default Header;
