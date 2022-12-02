# Stopify, a CS1300 Development project

<sub>_A little Easter egg: Press the play button and watch the vinyl record-inspired logo spin!_</sub>

## Link to Deployed Website
Check out the deployed Stopify website [here](https://coldturkey888.github.io/cs1300-development/).

## Goal and Value of the Application
The goal of the Stopify application is similar to that of its inspiration: Spotify — to spread love and appreciation towards music, regardless of genre and boundaries. The application allows users to choose from a small (but growing) selection of music to "listen" to. The application also gives users the ability to filter by genre and vibe, as well as to sort the library by name, artist or duration. Users should also appreciate the ability to queue songs to "listen" to next.

## Usability Principles Considered
The application is designed to be simple and intuitive. Starting with a default dark mode, the application aims to put focus on the music selection. The library is front and center, so that users can appreciate the soon-to-be-extensive library of songs. Flanked on its left are the filter options, while the play queue are on the right.
* Font sizes are varied but consistent throughout the application. Larger font sizes and heavier font weights are used for headers.
* Genres are vibes are represented as "tags", which makes them more identifiable at a glance.
* The application adheres to Material Design (and utilizes Material UI) to ensure a consistent and modern user experience.

## Organization of Components
I've implemented the following Components:
1. `MusicControls`: The previous/play/next buttons
2. `Filters`: The left panel that contains the filter options
3. `Library`: The main panel that contains the library of songs
4. `SongCard`: The individual song cards that are displayed in the library
5. `Queue`: The right panel that contains the play queue
6. `QueueCard`: The individual song cards that are displayed in the queue

## State Changes
There are five states that are managed via React Hooks:
1. `[isPlaying, setIsPlaying]` controls whether the music is "playing" or not
      - This is used to determine whether to display the Play or Pause button.
      - This also determines whether to spin the vinyl record-inspired logo.
2. `[queue, setQueue]` controls the list of songs in the queue.
      - This is used to display the queue, as well as to add to and remove songs from the queue.
3. `[genreFilter, setGenreFilter]` controls the genre filter.
      - This is used to filter the library by genre.
4. `[vibeFilter, setVibeFilter]` controls the vibe filter.
      - This is used to filter the library by vibe.
5. `[sort, setSort]` controls the sorting of the library.
      - This is used to sort the library by name, artist or duration.

## How Data is Passed Down Through Components
Data is passed between Components using `props`. In general, the following data is passed from one Component to another:
1. React Hooks (as described above) to manage state
2. Song information (via a JavaScript object) from `Library` to `SongCard` as well as from `Queue` to `QueueCard`

