import {retrieveGridUseCase} from 'opp_gateway_domain';
console.log(retrieveGridUseCase);
let controller = (app) => {
  app.get('/grid', (request, response) => {
    let myGrid = retrieveGridUseCase();
    response.send(myGrid);
  });
};

export default controller;