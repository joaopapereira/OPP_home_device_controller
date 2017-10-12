const {retrieveGridUseCase} = require('opp_gateway_domain');

const controller = (app) => {
  app.get('/grid', (request, response) => {
    const myGrid = retrieveGridUseCase();
    response.send(myGrid);
  });
};

exports.gridController = controller;