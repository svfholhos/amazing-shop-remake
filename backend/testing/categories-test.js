"use strict";
const app = require("../app");
const chai = require("chai"),
  chaiHttp = require("chai-http");
const mocha = require("mocha");
const should = chai.should();

chai.use(chaiHttp);

describe("Testing categories", () => {
  it("should get 200 as response", () => {
    chai
      .request(app)
      .get("/categories")
      .then(res => {
        res.should.have.status(200);
      });
  });
});
