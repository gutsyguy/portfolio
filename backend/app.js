const express = require('express')
const bodyParser = require('body-parser')
const db = require('./queries')

const app = express()
const port = 3000

app.use(bodyParser.json())

app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

app.get((req, res) =>{
    res.json({info: 'Node.js, Express, Postgres'})
})

app.get('/', db.getProjects)
// app.get('#Projects/:id', db.getProjectById)
// app.post('#Projects', db.addProject)
// app.put('#Projects/:id', db.updateProject);
// app.delete('#Projects/:id', db.deleteProject);

app.listen(port, () =>{
    console.log(`app running on port ${port}.`)
})