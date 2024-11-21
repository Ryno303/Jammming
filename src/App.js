import logo from './logo.svg';
import './App.css';
import Searchbar from './Searchbar.js';
//import './Searchbar.css';
import MyList from './Tracklist.jsx';

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
        <MyList />  
        <Searchbar />
      </header>
      <div>
      
      </div>
      
    </div>
  );
}

export default App;
