const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

const canvasWidth = 1250;
const canvasHeight = 500;
canvas.width = canvasWidth;
canvas.height = canvasHeight;

const cellSize = 50;
const rows = canvas.height / cellSize;
const cols = canvas.width / cellSize;

// Represent the state using a 2d array. 0 represents dead, 1 represents alive
// Randomly initialize the state
function initializeState(rows, cols) {
  const state = Array.from({ length: rows }, () => Array(cols).fill(0));
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      state[i][j] = Math.random() > 0.5 ? 1 : 0;
    }
  }
  return state;
}

// Draw the grid on the canvas
function drawGrid(state) {
  context.clearRect(0, 0, canvas.width, canvas.height); // clear the canvas
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      context.strokeStyle = "lightgray";
      context.strokeRect(j * cellSize, i * cellSize, cellSize, cellSize);
      if (state[i][j]) {
        context.fillStyle = "black";
        context.fillRect(j * cellSize, i * cellSize, cellSize, cellSize);
      }
    }
  }
}

const state = initializeState(rows, cols);
drawGrid(state);
