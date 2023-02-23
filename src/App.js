import work from './workInProgress.svg';
import './App.css';
import {useEffect, useRef} from 'react';

function App() {
  const mainRef = useRef(null);
      

  const autor = "Iván Antón";
  
  useEffect(() => {
    mainRef.current.innerHTML = "Página desarrollada por " + autor;
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={work} className="App-logo" alt="logo" />
        <h2 ref={mainRef}>No js enabled</h2>
        <h4>Actualmente en desarrollo</h4>
        <a
          className="App-link"
          href="/thor.html"
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
