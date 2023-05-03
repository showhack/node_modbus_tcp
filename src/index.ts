import { Config } from "./drivers/config.js"
import express from 'express'
const app = express()
app.use(express.json())

const PORT = Config.expressServerPort()

app.get('/ping', (_req, res) => {
  console.log('Hello, Im here!!')
  res.send('Hola')
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})

