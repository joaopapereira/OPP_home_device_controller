const {Grid} = require('./grid');
class GridRepository {
  getGrid() {
    return new Grid('my grid');
  }
}

exports.GridRepository = GridRepository;