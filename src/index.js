const express = require("express");


const app = express();

// nossos estados do http localhost: como rotas
const router = express.Router();
app.use(router);

const projects = [
    {
        id: 1,
        name: "first project",
        discription:  "my project",
        authro: "guihdeveloper",
    },
    {
        id: 2,
        name: "second project",
        discription:  "the project",
        authro: "Lacoste",
    },
]

router.get("/projects", (request, response) => {
    // example:
    // response.send({message: "server started"})

    response.send(projects)

    // opcional (status) que a requisicao é true ou qualquer codigo q for.
    response.status(204).send(projects)
    
});


app.listen(3333, () => console.log("server started at port 3333"));