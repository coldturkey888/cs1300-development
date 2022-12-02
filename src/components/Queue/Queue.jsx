import './Queue.css';
import QueueCard from '../QueueCard/QueueCard';
import { useState } from "react";

function Queue(props) {
  return (
    <div className="queue">
      <div className="queue-header">
        <h2>Your Queue</h2>
        <p>Total time: <b>{formatTime(calculateTotalTime(props.queue))}</b></p>
      </div>
      <div className="queue-content">
        {
          props.queue.length === 0
            ? <p>Nothing queued. Add a song now!</p>
            : props.queue.map((song, i) =>
                <QueueCard
                  id={i}
                  song={song}
                  queue={props.queue}
                  setQueue={props.setQueue} />)
        }
      </div>
    </div>
  );
}

function formatTime(time) {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  return minutes.toString() + ":" + seconds.toString().padStart(2, '0');
}

function calculateTotalTime(queue) {
  let totalTime = 0;
  for (let i = 0; i < queue.length; i++) {
    totalTime += queue[i].duration;
  }
  return totalTime;
}

export default Queue;
