import { IconButton } from '@mui/material';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';

function MusicControls(props) {
  return (
    <div>
      <IconButton size="large" color="success">
        <SkipPreviousIcon />
      </IconButton>
      <IconButton size="large" color="success"
        onClick={() => props.setIsPlaying(!props.isPlaying)}>
        {
          props.isPlaying
            ? <PauseIcon />
            : <PlayArrowIcon />
        }
      </IconButton>
      <IconButton size="large" color="success">
        <SkipNextIcon />
      </IconButton>
    </div>
  );
}

export default MusicControls;
