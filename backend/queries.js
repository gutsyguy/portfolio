const Pool = require('pg').Pool
require('dotenv').config
const pool = new Pool({
    user: process.env.user,
    host: process.env.host,
    database: process.env.database,
    password: process.env.password,
    port: 5432    
})

const getProjects = (req, res) =>{
    pool.query("SELECT * FROM projects"), (err, results) =>{
        if(err) throw err
        res.status(200).json(results.row)
    }
    
}

const getProjectById = (req, res) => {
    const id = parseInt(req.params.id)
  
    pool.query('SELECT * FROM projects WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
}

const addProject = (req, res) => {
    const { name, description, skills, github } = req.body;

    pool.query(
        "INSERT INTO projects (name, description, skills, github) VALUES ($1, $2, $3, $4)",
        [name, description, skills, github],
        (err, results) => {
            if (err) throw err;
            // Handle response or send a success status
            res.sendStatus(200);
        }
    );
};


const updateProject = (req, res) =>{
    const id = parseInt(request.params.id)
    const {name, description, skills, github} = req.body
    pool.query(
        'UPDATE projects SET name = $1, description = $2, set skills = $3, set github = $4 WHERE id = $5',
        [name, description, skills, github, id],
        (error, results) => {
          if (error) throw error
          response.status(200).send(`User modified with ID: ${id}`)
        }
      )
}

const deleteProject = (req, res) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM projects WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }

module.exports = {
    getProjects,
    getProjectById,
    addProject,
    updateProject,
    deleteProject
}