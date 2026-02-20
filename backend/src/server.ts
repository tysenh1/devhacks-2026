import express, { Request, Response } from 'express';
import cors from 'cors';
// import userRoutes from './api/v1/routes/userRoutes.ts'
import userRoutes from './api/v1/routes/userRoutes.ts'
import errorHandler from './api/v1/middleware/errorHandler.ts';

const app = express();
const PORT = 3000;
// const IP_ADDR = '10.20.191.29'
const IP_ADDR = '10.153.221.69'

app.use(cors());
app.use(express.json());

app.use(errorHandler);

app.get('/', (req: Request, res: Response) => {
  res.send({ message: "Backend is online!" });
});

app.get('api/v1/users', userRoutes)

app.listen(PORT, IP_ADDR, () => {
  console.log(`🚀 Server running on ${IP_ADDR}:${PORT}`);
});
