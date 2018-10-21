const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
  const secret = Math.floor(Math.random() * 10);

  res.send(`Secret: ${secret}\n`);
});

app.listen(port, () => console.log(`App listening on port ${port}`));