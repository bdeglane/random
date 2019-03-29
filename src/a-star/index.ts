import { Spot } from "./spot";

const COLS = 10
const ROWS = 10


// build a grid with 2D array
const grid = new Array(COLS)
    .fill(0)
    .map(col =>
        new Array(ROWS)
            .fill(0)
            .map(ii => new Spot()))

const openSet = []
const closedSet = []

// grid.map((col, x) =>
 //     col.map((row, y) =>
 //        ))

console.log(grid)


// console.log(grid)