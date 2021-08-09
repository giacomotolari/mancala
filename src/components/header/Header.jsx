import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='Header'>
      <h1>MANCALA</h1>
      <ul>
        <li>
          <Link className='link' to='/'>
            Game
          </Link>
        </li>
        <li>
          <Link className='link' to='/Rules'>
            Rules
          </Link>
        </li>
      </ul>
      <section>
        <h2 id='Specialtext'> </h2>
        <h3 id='text'> </h3>
      </section>
    </div>
  );
};

export default Header;
