const express = require('express');
const app = express();

const giveNickName = require('./story').giveNickName;

app.get('/', (req, res) => {
  res.send(`<h1>Hello ${giveNickName()}<h1>`);
});
app.listen(8080, () => {
  console.log(`Server is listening on port 8080`);
});
