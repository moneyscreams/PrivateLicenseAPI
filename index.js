const express = require('express');
const fs = require('fs')

const app = express();

app.get('/', (req, res) => {
  res.send(require("./endpoints/homepage.js"))
});

app.get('/listKeys', (req, res) => {
  var id = req.query.id
  res.send('Hello Express app!' + id)

});

app.get('/keys', (req, res) => {
  fs.readFile("keys.txt", (err, data) => {
    if (err) throw err;
    const keys = data.toString();
    res.send(keys);
  });
});

app.listen(5050, () => {
  console.log('server started');
});
