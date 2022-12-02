import './App.css';
import MusicControls from './components/MusicControls/MusicControls';
import Filters from './components/Filters/Filters';
import Library from './components/Library/Library';
import Queue from './components/Queue/Queue';
import stopify_logo from './assets/stopify_logo.png';
import { useState } from "react";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [queue, setQueue] = useState([]);
  const [genreFilter, setGenreFilter] = useState("All");
  const [vibeFilter, setVibeFilter] = useState("All");

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-left">
          <img src={stopify_logo} className="App-logo" alt="logo" style={{ animationPlayState: isPlaying ? "running" : "paused" }}/>
          <h1 className="App-title">Stopify</h1>
        </div>
        <div className="App-header-right">
          <MusicControls isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
        </div>
      </header>

      <div className="App-body">
        <div className="App-body-left">
          <Filters
            genreFilter={genreFilter}
            vibeFilter={vibeFilter}
            setGenreFilter={setGenreFilter}
            setVibeFilter={setVibeFilter} />
        </div>
        <div className="App-body-center">
          <Library
            genreFilter={genreFilter}
            vibeFilter={vibeFilter}
            queue={queue}
            setQueue={setQueue} />
        </div>
        <div className="App-body-right">
          <Queue
            queue={queue}
            setQueue={setQueue} />
        </div>
      </div>
    </div>
  );
}

export default App;
