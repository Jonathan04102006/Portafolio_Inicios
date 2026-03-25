import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/hello', (req, res) => {
  res.send('¡Hola desde tu API!');
});

app.get('/', (req, res) => {
  res.send('Servidor API funcionando. Visita /hello para una respuesta.');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});