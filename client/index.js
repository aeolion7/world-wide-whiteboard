// Import from the module './whiteboard':
//   The default export, naming it draw,
//   An export named `events`, calling it `whiteboard`.
import whiteboard, { draw } from './whiteboard';

// Example: Draw a single stroke.
draw([0, 0], [250, 250], 'red', true);

whiteboard.on('draw', payload => {
  console.log(payload);
});

// the window.location object describes the URL of the current page
const socket = io(window.location.origin);

socket.on('connect', () => {
  console.log('Persistent two-way server connection established');
});
