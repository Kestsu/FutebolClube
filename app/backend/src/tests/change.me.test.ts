import * as sinon from "sinon";
import * as chai from "chai";
// @ts-ignore
import chaiHttp = require("chai-http");

import { app } from "../app";
import Example from "../database/models/ExampleModel";
// import Teams from '../database/models/Teams';
import {teamsMock} from './mock'

import { Response } from "superagent";

chai.use(chaiHttp);

const { expect } = chai;

describe("Seu teste", () => {
  it("Primeiro teste", async () => {
    const httpResponse = await chai.request(app).get("/");
    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.deep.equal({ ok: true });
  });
  describe("Testando email", () => {
    it("Deve dar um error 400 quando nao informar email", async () => {
      const httpResponse = await chai.request(app).post("/login").send({
        password: "secret_admin",
      });
      expect(httpResponse.status).to.equal(400);
      expect(httpResponse.body).to.deep.equal({
        message: "All fields must be filled",
      });
    });
    it("Deve dar um error 400 quando email não existe no banco de dados", async () => {
      const httpResponse = await chai.request(app).post("/login").send({
        email: "amin@admin.com",
        password: "secret_admin",
      });
      expect(httpResponse.status).to.equal(401);
      expect(httpResponse.body).to.deep.equal({
        message: "Incorrect email or password",
      });
    });
    it("Deve dar um error 400 quando email é invalido", async () => {
      const httpResponse = await chai.request(app).post("/login").send({
        email: "aminadmin",
        password: "secret_admin",
      });
      expect(httpResponse.status).to.equal(401);
      expect(httpResponse.body).to.deep.equal({
        message: "Incorrect email or password",
      });
    });
  });

  describe("Testando senha", () => {
    it("Deve dar um error 400 quando nao informar senha", async () => {
      const httpResponse = await chai.request(app).post("/login").send({
        email: "admin@admin.com",
      });
      expect(httpResponse.status).to.equal(400);
      expect(httpResponse.body).to.deep.equal({
        message: "All fields must be filled",
      });
    });
    it("Deve dar um error 400 quando senha estiver errado", async () => {
      const httpResponse = await chai.request(app).post("/login").send({
        email: "admin@admin.com",
        password: "secret_adin",
      });
      expect(httpResponse.status).to.equal(401);
      expect(httpResponse.body).to.deep.equal({
        message: "Incorrect email or password",
      });
    });
  });

  // describe("Testando model", () => {
  //   const a = [
  //     {
  //       "id": 1,
  //       "teamName": "Avaí/Kindermann"
  //     }]
  //   before(()=> sinon.stub(Teams, 'findAll').resolves(a as Teams))
  //   after(() => sinon.restore() )
  //   it("Testando retorno da model", async () => {
  //   });
  // });
});

/**
 * Exemplo do uso de stubs com tipos
 */

// let chaiHttpResponse: Response;

// before(async () => {
//   sinon
//     .stub(Example, "findOne")
//     .resolves({
//       ...<Seu mock>
//     } as Example);
// });

// after(()=>{
//   (Example.findOne as sinon.SinonStub).restore();
// })

// it('...', async () => {
//   chaiHttpResponse = await chai
//      .request(app)
//      ...

//   expect(...)
// });
// it('Seu sub-teste', () => {
//   expect(false).to.be.eq(true);
// });
