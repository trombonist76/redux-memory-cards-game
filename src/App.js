import './App.css';
import GameResults from './components/GameResults';
import Navbar from './components/Navbar';
import Playground from './components/Playground';

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <div className="container">
        <GameResults />
        <Playground />
      </div>
    </div>
  );
}

export default App;
