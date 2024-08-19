const directions = [
  [0, -1], // up
  [0, 1], // right
  [1, 0], // down
  [-1, 0], // left
  [-1, 1], // up-right
  [1, 1], // down-right
  [1, -1], // down-left
  [-1, -1], // up-left
];

function isInBounds(currRow, currCol, rows, cols) {
  return currRow >= 0 && currRow < rows && currCol >= 0 && currCol < cols;
}

function numOfLiveNeighbours(currRow, currCol, state) {
  const rows = state.length;
  const cols = state[0].length;
  let count = 0;
  for (const dir of directions) {
    const neighbourRow = currRow + dir[0];
    const neighbourCol = currCol + dir[1];
    if (
      isInBounds(neighbourRow, neighbourCol, rows, cols) &&
      state[neighbourRow][neighbourCol]
    ) {
      count += 1;
    }
  }
  return count;
}

function updateState(state) {
  const rows = state.length;
  const cols = state[0].length;
  let newState = Array.from({ length: rows }, () => Array(cols).fill(0));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const liveNeighbors = numOfLiveNeighbours(i, j, state);

      if (state[i][j] === 1) {
        // Any live cell with fewer than two live neighbours dies, as if by underpopulation.
        if (liveNeighbors < 2) {
          newState[i][j] = 0;
        }

        // Any live cell with two or three live neighbours lives on to the next generation.
        if (liveNeighbors === 2 || liveNeighbors === 3) {
          newState[i][j] = 1;
        }

        // Any live cell with more than three live neighbours dies, as if by overpopulation.
        if (liveNeighbors > 3) {
          newState[i][j] = 0;
        }
      } else {
        // Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
        if (liveNeighbors === 3) {
          newState[i][j] = 1;
        }
      }
    }
  }
  return newState;
}

export { updateState };
