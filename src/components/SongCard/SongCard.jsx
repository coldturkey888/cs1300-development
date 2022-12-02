import './SongCard.css';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { Button } from '@mui/material';

function SongCard(props) {
  return (
    <div className="song-card">
      <div className="song-card-content">
        <div className="song-card-content-left">
          <img className="song-card-content-left-img"
            src={require("../../assets/album_art/" + props.song.img_src)}
            alt={props.song.name} />
          <div className="song-card-content-left-duration">{formatTime(props.song.duration)}</div>
        </div>
        <div className="song-card-content-right">
          <div className="song-card-content-right-top">
            <span className="song-card-content-right-name">{props.song.name}</span>
            <span className="song-card-content-right-artist">{props.song.artist}</span>
          </div>
          <div className="song-card-content-right-genres">
            {renderGenreTags(props.song.genre)}
          </div>
        </div>
      </div>
      <div className="song-card-actions">
        <div className="song-card-vibes">{renderVibeTags(props.song.vibe)}</div>
        <div className="song-card-add">
          <Button
            sx={{ borderRadius: 1 }}
            color="success"
            variant="outlined"
            startIcon={<PlaylistAddIcon />}
            onClick={() => props.setQueue([...props.queue, props.song])}
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}

/*
  {
              id: props.queue.length,
              song: props.song
            }
*/

function formatTime(time) {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  return minutes.toString() + ":" + seconds.toString().padStart(2, '0');
}

function renderGenreTags(genres) {
  return genres.map((genre, i) =>
    <div className="song-card-genre-tag" key={i}>{genre}</div>
  );
}

function renderVibeTags(vibes) {
  return vibes.map((vibe, i) =>
    <span className="song-card-vibe-tag" id={vibe} key={i}>{vibe}</span>
  );
}

export default SongCard;
