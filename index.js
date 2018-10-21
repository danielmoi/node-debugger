const express = require('express');

const app = express();

const PORT = 1337;

app.get('/', (req, res) => {
  const secret = Math.floor(Math.random() * 10);
  console.log('secret:', secret);
  res.send(`Secret: ${secret}\n`);
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));