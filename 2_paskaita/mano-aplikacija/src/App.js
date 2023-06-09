import Car from './components/Car';
import FuncCar from './components/FuncCar';
import FuncBestCar from './components/FuncBestCar';
import FuncCounter from './components/FuncCounter';
import Counter from './components/CounterClass';

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
    </div>
  );
};

export default App;
