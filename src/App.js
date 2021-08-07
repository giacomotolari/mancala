import './App.css';
import Board from './components/Board.jsx';


function App() {
  return (
    <div className='App'>
      <section>
        <h1>MANCALA</h1>
        <h2 id='Specialtext'> </h2>
        <h3 id='text'> </h3>
      </section>
      <Board />
    </div>
  );
}

export default App;
