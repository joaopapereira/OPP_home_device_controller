import retrieveGrid from './retrieve-grid';
import testCommon from '../shared/tests-common';
const expect = testCommon.expect;

function buildGrid(overrides) {
  const defaults = {
    name: 'my grid'
  };
  return Object.assign({}, defaults, overrides);
}

describe('GridRepository', function() {

  beforeEach(() => {
  });

  describe('getGrid', function() {
    it('returns a grid object', () => {
      expect(retrieveGrid()).eql(buildGrid({
        name: 'my grid'
      }));
    });
  });    
});
  