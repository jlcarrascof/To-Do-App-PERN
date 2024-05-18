const PORT = process.env.PORT ?? 8000
const express = require('express')
const app = express()
const pool = require('./db')

// Get all TODOS ...

app.get('/todos', async (req, res) => {
    console.log(req)
    const userEmail = req.params

    try {
        const todos = await pool.query('SELECT * FROM todos WHERE user_email = $1', [userEmail])
        res.json(todos.rows)
    } catch (error) {
        console.error(error)
    }
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
