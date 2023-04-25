import { Config } from "./drivers/config.js"
import { ModbusClientDriver } from "./drivers/modbus-client.js"

console.log("Client Started....")
const client = new ModbusClientDriver({ port: Number.parseInt(Config.modbusClientPort()) })

client.start()
