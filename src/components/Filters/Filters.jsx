import './Filters.css';
import { RadioGroup, FormControlLabel, Radio } from '@mui/material';

function Filters(props) {
  return (
    <div className="filters">
      <h2 className="filters-header">Your Preferences</h2>
      <div className="filter-group">
        <label className="filter-group-label">Genre</label>
        <RadioGroup value={props.genreFilter} onChange={(e) => props.setGenreFilter(e.target.value)}>
          <FormControlLabel label="All"
            value="All"
            control={<Radio/>}
          />
          <FormControlLabel label="Indie"
            value="Indie"
            control={<Radio/>}
          />
          <FormControlLabel label="Pop"
            value="Pop"
            control={<Radio/>}
          />
          <FormControlLabel label="Rock"
            value="Rock"
            control={<Radio/>}
          />
          <FormControlLabel label="R&B"
            value="R&B"
            control={<Radio/>}
          />
          <FormControlLabel label="Hip-Hop/Rap"
            value="Hip-Hop/Rap"
            control={<Radio/>}
          />
        </RadioGroup>
      </div>

      <div className="filter-group">
        <label className="filter-group-label">Vibe</label>
        <RadioGroup value={props.vibeFilter}  onChange={(e) => props.setVibeFilter(e.target.value)}>
          <FormControlLabel label="All"
            value="All"
            control={<Radio/>}
          />
          <FormControlLabel label="Chill"
            value="Chill"
            control={<Radio/>}
          />
          <FormControlLabel label="Energetic"
            value="Energetic"
            control={<Radio/>}
          />
          <FormControlLabel label="Sentimental"
            value="Sentimental"
            control={<Radio/>}
          />
        </RadioGroup>
      </div>
    </div>
  );
}

export default Filters;
