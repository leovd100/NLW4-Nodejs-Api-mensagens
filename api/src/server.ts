import "reflect-metadata";
import express, { request, response } from 'express';
import "./database";
import { router } from "./routes";

const app = express();

app.use(express.json()); // habilita o formato Json

app.use(router);

app.listen(8080, () => console.log("Server is running!"));