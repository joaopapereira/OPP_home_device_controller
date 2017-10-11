import {Grid} from './grid';
class GridRepository {
  getGrid() {
    return new Grid('my grid');
  }
}

export {GridRepository};