const PORT = process.env.PORT ?? 8000
const express = require('express')
const app = express()
const pool = require('./db')

// Get all TODOS ...

app.get('/todos', async (req, res) => {
    try {
        // await
        const todos = await pool.query('SELECT * FROM todos')
        res.json(todos.rows)
    } catch (err) {
        console.error(error)
    }
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
