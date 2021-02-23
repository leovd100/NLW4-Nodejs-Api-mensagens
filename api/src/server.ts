import express, { request, response } from 'express';

const app = express();

// app.get /users

app.get("/", (request, response) =>{
    return response.json({mensagem:"Hello World - NLW 4 "});
});


app.post("/",(request,response) =>{
    return response.json({mensgame:"Os dados foram recebidos com sucesso!"});
})




app.listen(8080, () => console.log("Server is running!"));