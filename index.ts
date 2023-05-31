import { AppDataSource } from './src/databases/connections/data-source';
AppDataSource.initialize()

const express = require("express")
const app = express()
app.use(express.json())

app.get('/', (request, response) => {
    return response.json("E ai, Beleza?")
})

app.listen(3333, () => console.log("O server esta ON na porta 3333."))