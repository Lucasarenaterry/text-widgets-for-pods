import express, { Router } from 'express';
import setUpWidgetRoutes from './routes/widgets';
import cors from 'cors';

// Use 0.0.0.0 to make accessible from Docker container
const host = process.env['HOST'] ?? '0.0.0.0';
const port = process.env['PORT'] ? Number(process.env['PORT']) : 3000;

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ['http://localhost:4200'],
    credentials: true,
  })
);

const router = Router();
setUpWidgetRoutes(router);

app.use(router);

app.get('/', (req, res) => {
  res.send({ message: 'API is running' });
});

// 404 Not Found
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

// General error handler
app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(err.status || 500).json({
      error: err.message || 'Internal Server Error',
    });
  }
);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
