# navigate-cells

This is my attempt to use arrays to navigate through a grid. I built this to allow people to explore a building by clicking on a series of photos, like in the game Myst.

The array is actually three arrays, nested within each other. These are used to convey a grid.

array[x][y][z];

The x-index contains all the *rows* of the grid. Incrementing or decrementing the x-index will move you up and down.

The y-index contains all the *columns* of the grid. Incrementing or decrementing the y-index will move you side to side. 

Changing the z-index allows you to rotate in place.

