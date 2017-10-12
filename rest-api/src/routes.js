const {gridController} = require('./controllers/grid.controller');
module.exports = function (app) {
  app.get('/', function (req, res) {
    res.send('Open Peer Power API');
  });

  gridController(app);
};
