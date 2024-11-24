import express from 'express';
import { PrismaClient } from '@prisma/client';
import clientRoutes from './routes/clientRoutes';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.use(clientRoutes);

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
