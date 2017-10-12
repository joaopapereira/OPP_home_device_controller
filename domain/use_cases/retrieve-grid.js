const repo = require('../grid/grid-repository');
let grid = new repo.GridRepository();
module.exports = function () {
  return grid.getGrid();
};