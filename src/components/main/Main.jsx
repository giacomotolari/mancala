import './main.css';
import { Switch, Route } from 'react-router-dom';
import Board from './board/Board';
import Rules from './rules/Rules';
const Main = () => {
  return (
    <div className='Main'>
      <Switch>
        <Route exact path='/'>
          <Board />
        </Route>
        <Route path='/Rules'>
          <Rules />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
