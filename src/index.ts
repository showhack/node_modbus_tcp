import express from 'express'
import { Config } from './drivers/config.js'
import { ExpressServerDriver } from './drivers/express-server.js'


const PORT = new ExpressServerDriver({port: Number.parseInt(Config.expressServerPort())})

console.log('Server Starting...')
PORT.start()


