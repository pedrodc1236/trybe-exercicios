import express from 'express';
import UsersRoutes from './src/routes/users.routes';

const app = express();
const { PORT } = process.env;

app.use(express.json());

app.use('/users', UsersRoutes);

app.listen(PORT, () => {
  console.log(`Rodando na porta: ${PORT}`)
})


