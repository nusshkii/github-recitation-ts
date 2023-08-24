import express from 'express';
const app = express();

const fibonacci = require("./fib");

app.get('/fib/:num', (req: express.Request, res: express.Response) => {
  const { num } = req.params;

  const fibN = fibonacci(parseInt(num));
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
