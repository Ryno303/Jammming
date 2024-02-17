
import './App.css';

function App() {



  return (
    <div className="App">
      <header><h1>Jammming</h1></header>
      <div id="songSection">
      <div id="searchSection">
      <div id="searchBar">
        <label for='searchBar'>Search</label>
        <input type='text' name='searchBar'></input>

      </div>
      <div id="searchResults">
        <p>mock song 1</p>

      </div>
      <div id="playList">

      </div>
      </div>
      <div id="trackSection">
        <h2>Tracks</h2>
      <div id="trackList">

      </div>
      <div id="track">
        <h2>Now Playing</h2>
        <div id="trackInfo">
          <div id="trackThumbnail" ></div>
          <div id="trackData">
            <p>Artist:</p>
            <p>Title:</p>
            <p>Album:</p>
          </div>
        </div>

      </div>
      </div>
      </div>
           
    </div>
  );
}

export default App;
