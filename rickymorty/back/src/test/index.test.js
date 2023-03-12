const session = require('supertest');
const app = require('../../src/routes/server.js');
const agent = session(app);

describe("Test de RUTAS", () => {
    describe('GET rickandmorty/onsearch/:id', () => {
        it('Responde con status: 200', () => agent.get('/rickandmorty/onsearch/1').expect(200));
        })
    })