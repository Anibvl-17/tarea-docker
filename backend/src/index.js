import express from 'express';

const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hola mundo");
})

app.listen(PORT, () => {
  console.log(`=> Servidor corriendo en http://localhost:${PORT}`);
})