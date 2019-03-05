# GameOfJS

An attempt at [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) using JS TDD

# User Stories/Rules

1. Any live cell with fewer than two live neighbors dies, as if by underpopulation.
2. Any live cell with two or three live neighbors lives on to the next generation.
3. Any live cell with more than three live neighbors dies, as if by overpopulation.
4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

# Rough plan

![Imgur](https://i.imgur.com/TZwc01v.jpg)

### Game
* Create a 2D-array which will contain x * y cells
* 'Generation Zero' - randomly implemented array with dead & alive cells
* 'Generation one++' - implemented based off of the rules mentioned above
* **TDD**

### Cell status
* Dead or Alive
* **TDD**

### Cells
* Dead cells represented by a 0
* Live cells represented by a 1
* Contain a status, dead or alive (0, or 1)
* **TDD**

### Further steps
* Play/pause button
* Gneration counter
