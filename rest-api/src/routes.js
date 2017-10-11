import gridController from './controllers/grid.controller';
export default function (app) {
  app.get('/', function (req, res) {
    res.send('Open Peer Power API');
  });

  gridController(app);
}
