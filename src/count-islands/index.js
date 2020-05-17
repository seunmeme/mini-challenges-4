function countIslands(grid) {

  if(grid === null || grid.length < 1){
    return 0;
  }

  let numOfIslands = 0;

  for(let i=0; i<grid.length; i++){
    for(let j=0; j<grid[i].length; j++){
      if(grid[i][j] === 1){
        numOfIslands += dfs(grid, i, j);
      }
    }
  }

  return numOfIslands;

}


function dfs(grid, row, col){
  if(row<0 || row>=grid.length || col<0 || col>=grid[row].length || grid[row][col] === 0){
    return 0;
  }

  grid[row][col] = 0;

  dfs(grid, row+1, col);
  dfs(grid, row-1, col);
  dfs(grid, row, col+1);
  dfs(grid, row, col-1);

  return 1;
}

module.exports = countIslands;
