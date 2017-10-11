import {chai, server} from '../shared/tests-common';

describe('GridController', function() {
  describe('GET /grid', function() {
    describe('when grid exists', function() {
      it('return the grid information', (done) => {
        chai.request(server)
          .get('/grid')
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.be.eql({
              name: 'my grid'
            });

            done();
          });
      });
    });
  });
});
  