import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from './store/slices/counter';

function App() {

  const { counter } = useSelector( state => state.counter )
  const dispatch = useDispatch();


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <p>count is: { counter }</p> 
      <button type='button' onClick={ () => dispatch( increment() ) } >
        increment
      </button>
      <button type='button' onClick={ () => dispatch( decrement() ) } >
        decrement
      </button>
      <button type='button' onClick={ () => dispatch( incrementByAmount(3) ) } >
        increment by 2
      </button>
      </header>
    </div>
  );
}

export default App;
