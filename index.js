const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000

app.use(cors())

const main = require('./datat/manu.json')
const rum = require('./datat/rum.json')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/manu' , (req ,res) =>{
    res.send(main)
})

app.get('/rum' , (req ,res) =>{
    res.send(rum)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})