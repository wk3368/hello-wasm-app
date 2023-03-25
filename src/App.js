import logo from './logo.svg';
import './App.css';
import init, { encrypt } from '@wk3368/rust-rsa-wasm-npm';

function clickButton() {
  const origin_str = JSON.stringify(
    {
      name: "text",
      type: "input",
      value: 1
    }
  );

  init().then(() => {
    const encrypted = encrypt(origin_str);
    console.log({ origin_str, encrypted });
    window.postMessage(
      { type: "FROM_PAGE", text: encrypted }, "*"
    );
  });
}

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
        <p>
          <button id="EncryptButton" onClick={clickButton}>Encrypt</button>
        </p>
      </header>
    </div>
  );
}

export default App;
