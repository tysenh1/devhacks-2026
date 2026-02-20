import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;
const IP_ADDR = '10.20.191.29'

app.use(cors()); // Allows your mobile app to connect
app.use(express.json()); // Parses JSON from your app

app.get('/', (req: Request, res: Response) => {
  res.send({ message: "Backend is online!" });
});

app.listen(PORT, IP_ADDR, () => {
  console.log(`🚀 Server running on ${IP_ADDR}:${PORT}`);
});
