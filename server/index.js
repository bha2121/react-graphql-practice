require('dotenv').config()
const express = require('express')
const massive = require('massive')

const session = require('express-session')
const app = express()

const houseCtlr = require('./controllers/houseController')

const {SERVER_PORT, CONNECTION_STRING, SECRET} = process.env

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    // console.log('db is connected')
    // console.log(db.listTables())
    app.listen(SERVER_PORT, () => console.log('listening on port', SERVER_PORT))
})

app.use(express.json())
app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use( express.static( `${__dirname}/../build` ) )


// app.get('/api/gethouses', houseCtlr.gethouses)