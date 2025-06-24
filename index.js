const express = require('express');
const os = require('os');

const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

app.get('/status', (req, res) => {
  res.json({
    status: 'ok',
    uptime: os.uptime(),
    load: os.loadavg(), 
    memory: {
      free: os.freemem(),
      total: os.totalmem()
    }
  });
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});