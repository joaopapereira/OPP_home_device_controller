const {GridRepository} = require('./grid-repository');
const {expect} = require('../shared/common.test');

function buildGrid(overrides) {
  const defaults = {
    name: 'my grid'
  };
  return Object.assign({}, defaults, overrides);
}

describe('GridRepository', function() {
  let gridRepository;

  beforeEach(() => {
    gridRepository = new GridRepository();
  });

  describe('getGrid', function() {
    it('returns a grid object', () => {
      expect(gridRepository.getGrid()).eql(buildGrid({
        name: 'my grid'
      }));
    });
  });    
});
  