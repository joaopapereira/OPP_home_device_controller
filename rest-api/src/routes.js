let server = require('iotivity-adapter/domain/server');

module.exports = function (app) {
  console.log("server:", server());
  
  app.get('/', function (req, res) {
    res.send('Open Peer Power API');
  });
};
