import './App.css';
import Lottery from './Lottery.js';

function App() {
  return (
    <div className="App">
      <Lottery title="Lotto" maxBalls={7} maxNum={40} />
      <Lottery title="Mini Daily" maxBalls={4} maxNum={10} />
    </div>
  );
}

export default App;
