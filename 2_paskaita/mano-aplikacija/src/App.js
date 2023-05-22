import Car from './components/Car';
import FuncCar from './components/FuncCar';
import FuncBestCar from './components/FuncBestCar';
import FuncCounter from './components/FuncCounter';
import Counter from './components/CounterClass';
import Hero from './components/Hero';
import Button from './components/Button';
import MoodChecker from './components/MoodChecker';
import MoodCheckerV2 from './components/MoodCheckerV2';
import './App.css';
import MoodCheckerV3 from './components/MoodCheckerV3';

const App = () => {
  return (
    <div>
      <h2>Class</h2>
      <Car />
      <br />
      <br />
      <h2>Function with one state</h2>
      <FuncCar />
      <br />
      <br />
      <h2>Function with separate states</h2>
      <FuncBestCar />
      <FuncCounter />
      <Counter />
      <div>
        <Hero title="Info hero" subtitle="Info subtitle" />
        <br />
        <Hero title="Info hero" />
        <br />
        <Hero subtitle="Info subtitle" />
      </div>
      <div>
        <Button title="TEXT" variant="text" />
        <Button title="CONTAINED" variant="contained" />
        <Button title="OUTLINED" variant="outlined" />
      </div>
      <div>
        <MoodChecker />
      </div>
      <div>
        <MoodCheckerV2 />
      </div>
      <div>
        <MoodCheckerV3 />
      </div>
    </div>
  );
};

export default App;
