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

// request é responsavel por tudo que o back-end enviar
// dentro temos os dados das variaveis (so que dentro do parametro q é .query)

router.get("/projects", (request, response) => {
    // example:
    // response.send({message: "server started"})

    // http://localhost:3333/projects?queryID=153
    const { queryID } = request.query
    console.log(queryID);

    // example:
    // response.send(projects)

    // opcional (status) que a requisicao é true ou qualquer codigo q for.
    // response.status(200).send({ message: 'have id'})

    if(!queryID) {
        return response.status(200).send({ projects });
    }

    // verifica que nosso parametro dentro da requisicao tem o numero que passamos e retorna
    const projectsById = projects.filter((projects) => projects.id == queryID)

    if (projectsById.length > 0) {
        return response.status(200).send(projectsById)
    }

    return response.status(500).send({ error: "Project not found"})
    
});

// listen abre o servidor e funcao
app.listen(3333, () => console.log("server started at port 3333"));