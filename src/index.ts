import express from 'express'
const app = express()
app.use(express.json())

const PORT = 502

app.get('/ping', (_req, res) => {
  console.log('Hello, Im here!!')
  res.send('Hola')
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})

