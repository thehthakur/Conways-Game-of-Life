import { state, drawGrid } from "./modules/canvas_logic.js";
import { updateState } from "./modules/game_logic.js";

let newState = state;
function update() {
  drawGrid(newState);
  newState = updateState(newState);
}

setInterval(update, 1000);
