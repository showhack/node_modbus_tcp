import { Config } from "./drivers/config.js"
import { ModbusServerDriver } from "./drivers/modbus-server.js"

console.log("Server Starting...")
const server = new ModbusServerDriver({ port: Number.parseInt(Config.modbusServerPort()) })

server.start()
