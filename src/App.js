import logo from './logo.svg';
import './App.css';
import {useEffect, useRef} from 'react'

function App() {
  const mainRef = useRef(null);
      

  const autor = "Iván Antón";
  
  useEffect(() => {
    mainRef.current.innerHTML = "Página desarrollada por " + autor;
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 ref={mainRef}>No js enabled</h2>
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
