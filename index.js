const express = require('express')
const app = express()

app.use(express.static(__dirname + '/'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.get('/coucou', (req, res) => {
    res.send('coucou');
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})