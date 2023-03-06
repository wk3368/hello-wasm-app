import logo from './logo.svg';
import './App.css';
import init, { greet, greet2 } from '@wk3368/hello-wasm';

init().then(() => {
  greet('WebAssembly');
  const temp = greet2('WebAssembly2');
  console.log(temp);
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
