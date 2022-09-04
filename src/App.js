import './App.css';
import Lottery from './Lottery.js';

function App() {
  return (
    <div className="App">
      <Lottery title="Lotto" numBalls={4} maxNum={40} />
    </div>
  );
}

export default App;
