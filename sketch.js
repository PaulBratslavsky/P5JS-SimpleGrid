const BOARD_SIZE = 7;
const BLOCK_SIZE = 50;

const canvas = {
  width: 725,
  height: 550,
};

function getOfSet(position, gridSize) {
  return position - (gridSize - 1) / 2;
}

function renderGrid({ startPosition, tileSize, dataSize }) {
  const GRID_SIZE = dataSize.length;
  console.log(startPosition, tileSize);

  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      if (dataSize[x][y]) fill("orange");
      else noFill();

      square(
        startPosition[0] + getOfSet(x, GRID_SIZE) * tileSize,
        startPosition[1] + getOfSet(y, GRID_SIZE) * tileSize,
        tileSize
      );
    }
  }
}

function setup() {
  createCanvas(canvas.width, canvas.height);
  frameRate(10);
  rectMode(CENTER);
}

function draw() {
  background(100);

  renderGrid({
    startPosition: [275, 275],
    tileSize: 55.5,
    dataSize: [
      [true, true, true, true, true, true, true, true, true],
      [true, false, false, false, false, false, false, false, true],
      [true, false, false, false, false, false, false, false, true],
      [true, false, false, false, false, false, false, false, true],
      [true, false, false, false, true, false, false, false, true],
      [true, false, false, false, false, false, false, false, true],
      [true, false, false, false, false, false, false, false, true],
      [true, false, false, false, false, false, false, false, true],
      [true, true, true, true, true, true, true, true, true],
    ],
  });

  renderGrid({
    startPosition: [625, 100],
    tileSize: BLOCK_SIZE,
    dataSize: [
      [false, false, false],
      [false, true, false],
      [true, true, true],
    ],
  });

  renderGrid({
    startPosition: [625, 275],
    tileSize: BLOCK_SIZE,
    dataSize: [
      [false, true, false],
      [false, true, false],
      [false, true, false],
    ],
  });

  renderGrid({
    startPosition: [625, 450],
    tileSize: BLOCK_SIZE,
    dataSize: [
      [true, true, false],
      [false, true, true],
      [false, false, false],
    ],
  });
}
