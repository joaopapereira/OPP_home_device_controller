import {GridRepository} from './grid-repository';
import testCommon from '../shared/tests-common';
const expect = testCommon.expect;

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
  