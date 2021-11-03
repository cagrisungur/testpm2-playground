const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

console.log('test')
 
app.listen(3000)