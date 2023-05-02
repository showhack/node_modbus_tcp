import express from 'express'
import { Config } from './drivers/config'
import { ExpressServerDriver } from './drivers/express-server.js'
const app = express()
app.use(express.json())

const PORT = new ExpressServerDriver({port: Number.parseInt(Config.modbusServerPort())})

app.get('/ping', (_req, res) => {
  console.log('Hello, Im here!!')
  res.send('Hola')
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})


