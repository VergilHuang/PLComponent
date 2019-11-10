import React from 'react';
import logo from './logo.svg';
import './App.sass';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className="container">
        <div className="col-xs-12">1</div>
        <div className="col-xs-12 col-sm-6 col-md-3">2</div>
        <div className="col-xs-12 col-sm-6 col-md-3">3</div>
        <div className="col-xs-12 col-sm-6 col-md-3">4</div>
        <div className="col-xs-12 col-sm-6 col-md-3">5</div>
      </div>
    </div>
  );
}

export default App;
