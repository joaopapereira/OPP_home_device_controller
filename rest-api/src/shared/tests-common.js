let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

process.env.PORT = 8765;

let server = require('../../bin/server');

export {should, chai, server};