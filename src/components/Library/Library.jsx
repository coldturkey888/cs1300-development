import './Library.css';
import SongCard from '../SongCard/SongCard';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useState } from "react";
import data from '../../data.json';

function Library(props) {
  const [sort, setSort] = useState('name');

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  let songs = data.songs;

  songs = songs.filter((song) => {
    return (song.genre.includes(props.genreFilter) || props.genreFilter === 'All') &&
      (song.vibe.includes(props.vibeFilter) || props.vibeFilter === 'All');
  });

  songs = songs.sort((a, b) => {
    if (sort === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sort === 'artist') {
      return a.artist.localeCompare(b.artist);
    } else if (sort === 'duration') {
      return a.duration - b.duration;
    }
  });

  return (
    <div className="library">
      <div className="library-header">
        <h2>Your Library</h2>
        <div>
          <FormControl>
            <InputLabel>Sort by</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sort}
              label="Sort by"
              onChange={handleSortChange}
            >
              <MenuItem value="name">Name</MenuItem>
              <MenuItem value="artist">Artist</MenuItem>
              <MenuItem value="duration">Duration</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="library-content">
        {
          songs.map((song, i) =>
            <SongCard
              key={i}
              song={song}
              queue={props.queue}
              setQueue={props.setQueue} />)
        }
      </div>
    </div>
  );
}

export default Library;
