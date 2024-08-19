const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

const canvasWidth = 80;
const canvasHeight = 80;
canvas.width = canvasWidth;
canvas.height = canvasHeight;

const cellSize = 10;
const rows = canvas.height / cellSize;
const cols = canvas.width / cellSize;

// Represent the state using a 2d array. 0 represents dead, 1 represents alive
// Randomly initialize the state
function initializeState(rows, cols) {
  const state = Array.from({ length: rows }, () =>
    Array(cols).fill(Math.random() > 0.5 ? 1 : 0)
  );
  return state;
}

// Draw the grid on the canvas
function drawGrid() {
	// function to draw grid goes here
}

initializeState();
