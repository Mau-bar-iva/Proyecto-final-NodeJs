import express from 'express';
import cors from 'cors';
import productsRouter from './src/routes/products.routes.js';
import bodyParser from 'body-parser';
import { authentication } from './src/middlewares/authentication.js';
import authRouter from './src/routes/auth.routes.js';
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Rutas
app.use('/auth', authRouter)
app.use('/api/products', authentication, productsRouter);

// Middleware para manejar rutas no encontradas
app.use((req, res, next) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Puerto de escucha
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

export default app;