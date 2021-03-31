const BOARD_SIZE = 9;
const BLOCK_SIZE = 55;
const BOARD_TILE_SCALE = 58;
const BOARD_CENTER_POS = [275, 275];

let boardPieceData;
// control pieces selecting
let firstPieceHovered;
let secondPieceHovered;
let thirdPieceHovered;
let selectedPieceKey = null


const canvas = {
  width: 725,
  height: 550,
};

function getOfSet(position, gridSize) {
  return position - (gridSize - 1) / 2;
}

function renderPiece({ startPosition, tileSize, dataSize, colorValue }) {
  fill(colorValue)
  const GRID_SIZE = dataSize.length;
  //console.log(startPosition, tileSize);

  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      if (dataSize[x][y] === 1) {
        square(
          startPosition[0] + getOfSet(x, GRID_SIZE) * tileSize,
          startPosition[1] + getOfSet(y, GRID_SIZE) * tileSize,
          tileSize
        );
      }
    }
  }
}

function renderBoard({ startPosition, tileSize, dataSize }){
  const GRID_SIZE = dataSize.length;
  noFill()
  for ( let y = 0; y < BOARD_SIZE; y++) {
    for ( let x = 0; x < BOARD_SIZE; x++) {
       square(
        startPosition[0] + getOfSet(x, GRID_SIZE) * tileSize,
        startPosition[1] + getOfSet(y, GRID_SIZE) * tileSize,
        tileSize
       )
    }
  }
}



function detectHover(x, y, squareSize) {
  const insideX = mouseX > (x - squareSize/2) && mouseX < (x + squareSize/2);
  const insideY = mouseY > (y - squareSize/2) && mouseY < (y + squareSize/2);
  console.log(mouseX, mouseY)
  return insideX && insideY
}

function setup() {
  createCanvas(canvas.width, canvas.height);
  frameRate(20);
  rectMode(CENTER);

  boardPieceData =[];
  for (let y = 0; y < BOARD_SIZE; y++) {
    let arr = [];
    for (let x = 0; x < BOARD_SIZE; x++) {
      arr.push(0);
    }
    boardPieceData.push(arr)
  }

  console.log(boardPieceData, "board");
}

function draw() {
  background(100);

  renderBoard({
    startPosition: [275, 275],
    tileSize: BOARD_TILE_SCALE,
    dataSize: boardPieceData
  })


  firstPieceHovered = detectHover(630, 100, BLOCK_SIZE*3)
  renderPiece({
    colorValue: firstPieceHovered ? "white" : "yellow",
    startPosition: [630, 100],
    tileSize: BLOCK_SIZE,
    dataSize: [
      [1, 0, 1],
      [0, 1, 0],
      [1, 0, 1]
    ],
  });

  secondPieceHovered = detectHover(630, 275, BLOCK_SIZE*3)
  renderPiece({
    colorValue: secondPieceHovered ? "white" : "yellow",
    startPosition: [630, 275],
    tileSize: BLOCK_SIZE,
    dataSize: [
      [1, 0, 1],
      [0, 1, 0],
      [1, 0, 1]
    ],
  });

  thirdPieceHovered = detectHover(630, 450, BLOCK_SIZE*3)
  renderPiece({
    colorValue: thirdPieceHovered ? "white" : "yellow",
    startPosition: [630, 450],
    tileSize: BLOCK_SIZE,
    dataSize: [
      [1, 0, 1],
      [0, 1, 0],
      [1, 0, 1]
    ],
  });
}
