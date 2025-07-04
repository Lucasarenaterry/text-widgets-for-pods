import express from 'express';
// Using 0.0.0.0 instead of localhost to allow external access for Docker
const host = process.env['HOST'] ?? '0.0.0.0';
const port = process.env['PORT'] ? Number(process.env['PORT']) : 3000;

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
