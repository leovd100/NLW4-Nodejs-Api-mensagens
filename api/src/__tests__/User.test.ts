import request from 'supertest';
import { app } from '../app';

import createConnection from '../database';


describe("user", () =>{
    
    beforeAll(async () =>{
        const connection = await createConnection();
        await connection.runMigrations();
    });

    it("Should be able to create a new user", async ()=>{

        const response = await request(app).post("/users").send({
            name: "Novo teste",
            email: "teste@teste.com"
        });
        expect(response.status).toBe(201);
    });

    it("Shoud not be able to create a user with exits email", async () => {
        const response = await request(app).post("/users").send({
            name: "Novo teste",
            email: "teste@teste.com"
        });

        expect(response.status).toBe(400);
    });
    
});


