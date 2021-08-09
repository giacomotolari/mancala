import './App.css';
import Main from './components/main/Main';
import Header from './components/header/Header';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Main />
      </Router>
    </div>
  );
}

export default App;
