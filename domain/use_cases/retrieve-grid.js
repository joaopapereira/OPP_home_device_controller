import {GridRepository} from '../grid/grid-repository';
let grid = new GridRepository();
export default function () {
  return grid.getGrid();
}