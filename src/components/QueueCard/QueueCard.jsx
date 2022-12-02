import './QueueCard.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

function QueueCard(props) {
  return (
    <div className="queue-card">
      <div className="queue-card-content">
        <div className="queue-card-content-left">
          <img className="queue-card-content-left-img"
            src={require("../../assets/album_art/" + props.song.img_src)}
            alt={props.song.name} />
        </div>
        <div className="queue-card-content-right">
          <div className="queue-card-content-right-top">
            <span className="queue-card-content-right-name">{props.song.name}</span>
            <span className="queue-card-content-right-artist">{props.song.artist}</span>
          </div>
        </div>
      </div>
      <IconButton size="large" color="success">
        <DeleteIcon
          onClick={() => props.setQueue(removeSongById(props.queue, props.id))}
        />
      </IconButton>
    </div>
  );
}

function removeSongById(queue, id) {
  let newQueue = [];
  for (let i = 0; i < queue.length; i++) {
    if (i !== id) {
      newQueue.push(queue[i]);
    }
  }
  return newQueue;
}

export default QueueCard;
