const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(require("./endpoints/homepage.js"))
});

app.get('/listKeys', (req, res) => {
  var id = req.query.id
  res.send('Hello Express app!' + id)

});

app.listen(5050, () => {
  console.log('server started');
});